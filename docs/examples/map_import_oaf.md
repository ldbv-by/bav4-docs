
<div class="example">
	<h3>OGC API-Features Service (OAF)</h3>
	<p>This example shows how to import an OGC API-Features service and listen to FeatureInfo events.</p>
	<p>
	The OAF ist imported by its URL. The desired collection of the OAF is referenced by the expression following the double-pipe. In our example, therefore <code>https://api.hamburg.de/datasets/v1/verwaltungsgrenzen||landesgrenze</code>.</p>
	<div id="dfjc52vc" class="output"><bayern-atlas l="GEORESOURCE_WEB_GRAY" c="9.99,53.52" z="8"></bayern-atlas></div>
	<div id="ksg3bna_desc">Click in on a feature of the OAF...</div>
	<div id="ksg3bna_output" class="output" style="display: none">
		<pre><code></code></pre>
	</div>
	<script>
		document.querySelector('#dfjc52vc bayern-atlas').addEventListener('baLoad', (event) => {
			const baMap = event.target;
			baMap.addLayer(
				'https://api.hamburg.de/datasets/v1/verwaltungsgrenzen||landesgrenze', { style: { baseColor: "#350b59"} }
			);
			baMap.addEventListener('baFeatureSelect', (event) => {
				document.querySelector('#ksg3bna_desc').style.display = 'none';
				document.querySelector('#ksg3bna_output').style.display = 'block';

    			const el = document.querySelector('#ksg3bna_output pre code');
    			el.innerText = `${new Date().toISOString()}: ${JSON.stringify(event.detail, null, 1)} \n${el.innerText}`;
    		});
		});
	</script>
	<h4>HTML:</h4>
	<pre><code class="language-html">&lt;bayern-atlas l=&quot;GEORESOURCE_WEB_GRAY&quot; c=&quot;9.99,53.52&quot; z=&quot;8&quot;&gt;&lt;/bayern-atlas&gt;</code></pre>
	<h4>JavaScript:</h4>
	<pre><code class="language-javascript">document.querySelector('bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;
	baMap.addLayer(
		'https://api.hamburg.de/datasets/v1/verwaltungsgrenzen||landesgrenze', { style: { baseColor: "#350b59"} }
	);
	baMap.addEventListener("baFeatureSelect",(event) => {
		console.log(JSON.stringify(event.detail, null, 1);
	});
});
</code></pre>

</div>

[Back to Overview](../wc-examples.html#more-examples)