#!/usr/bin/env node
/**
 * Cross-platform script to clone or update a git repository.
 * Usage:
 *   node ./scripts/ensure-repo.js <repo-url> <dir> <branch>
 * Or set env vars: REPO, DIR, BRANCH
 */
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const argv = process.argv.slice(2);
const REPO = argv[0] || process.env.REPO;
const DIR = argv[1] || process.env.DIR;
const BRANCH = argv[2] || process.env.BRANCH || 'main';

if (!REPO || !DIR) {
	console.error('Usage: node scripts/ensure-repo.js <repo-url> <dir> <branch>');
	console.error('Or set env vars: REPO, DIR, BRANCH (BRANCH defaults to "main")');
	process.exit(2);
}

function run(cmd, args, opts = {}) {
	const res = spawnSync(cmd, args, { stdio: 'inherit', ...opts });
	if (res.error) throw res.error;
	if (res.status !== 0) {
		const err = new Error(`${cmd} ${args.join(' ')} exited with ${res.status}`);
		err.status = res.status;
		throw err;
	}
}

try {
	const absDir = path.resolve(DIR);
	const gitDir = path.join(absDir, '.git');

	if (!fs.existsSync(gitDir)) {
		console.log(`Cloning ${REPO} (branch ${BRANCH}) into ${absDir}...`);
		run('git', ['clone', '--branch', BRANCH, '--single-branch', REPO, absDir]);
	} else {
		console.log(`Updating existing repo in ${absDir}...`);
		run('git', ['-C', absDir, 'remote', 'set-url', 'origin', REPO]);
		run('git', ['-C', absDir, 'fetch', '--all', '--prune']);

		// Try checkout or create tracking branch
		try {
			run('git', ['-C', absDir, 'rev-parse', '--verify', `refs/heads/${BRANCH}`]);
			run('git', ['-C', absDir, 'checkout', BRANCH]);
		} catch (_) {
			// create or track branch from origin
			try {
				run('git', ['-C', absDir, 'checkout', '-B', BRANCH, `origin/${BRANCH}`]);
			} catch (_) {
				run('git', ['-C', absDir, 'checkout', '--track', `origin/${BRANCH}`]);
			}
		}
		// Force local to match remote (change if you do not want to discard local changes)
		run('git', ['-C', absDir, 'reset', '--hard', `origin/${BRANCH}`]);
	}

	// Submodules
	run('git', ['-C', path.resolve(DIR), 'submodule', 'update', '--init', '--recursive']);

	console.log('Repository ensured.');
} catch (err) {
	console.error('Error:', err && err.message ? err.message : err);
	process.exit(err && err.status ? err.status : 1);
}
