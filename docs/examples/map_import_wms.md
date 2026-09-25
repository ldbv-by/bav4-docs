
<div class="example">
	<h3>Import an OGC Web Map Service (WMS)</h3>
	<p>This example shows how to import an OGC WMS and listen to GetFeatureInfo events.</p>
	<p>
	The WMS ist imported by its URL. The desired layer of the WMS is referenced by the expression following the double-pipe. In our example, therefore <code>https://geoservices.bayern.de/od/wms/gdi/v1/denkmal||landschaftsdenkmalO</code>.</p>
	<div id="dfjc52vc" class="output"><bayern-atlas l="GEORESOURCE_WEB_GRAY"></bayern-atlas></div>
	<div id="ksg3bna_desc">Click in on a feature of the WMS...</div>
	<div id="ksg3bna_output" class="output" style="display: none">
		<pre><code></code></pre>
	</div>
	<script>
		document.querySelector('#dfjc52vc bayern-atlas').addEventListener('baLoad', (event) => {
			const baMap = event.target;
			baMap.addLayer(
				'https://geoservices.bayern.de/od/wms/gdi/v1/denkmal||landschaftsdenkmalO'
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
	<pre><code class="language-html">&lt;bayern-atlas l=&quot;GEORESOURCE_WEB_GRAY&quot;&gt;&lt;/bayern-atlas&gt;</code></pre>
	<h4>JavaScript:</h4>
	<pre><code class="language-javascript">document.querySelector('bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;
	baMap.addLayer(
		'https://geoservices.bayern.de/od/wms/gdi/v1/denkmal||landschaftsdenkmalO'
	);
	baMap.addEventListener("baFeatureSelect",(event) => {
		console.log(JSON.stringify(event.detail, null, 1);
	});
});
</code></pre>

</div>

[Back to Overview](../wc-examples.html#more-examples)