
<div class="example">
	<h3>Add Data to the Map</h3>
	<b>Note:</b>
	<p>This example shows how to add data in ewkt format to the map. The setup for the other supported data types (GeoJSON, KML, GPX) is similar.</p>
	<div id="dfjc52vc" class="output"><bayern-atlas l="GEORESOURCE_WEB_GRAY"></bayern-atlas></div>
	<script>
		document.querySelector('#dfjc52vc bayern-atlas').addEventListener('baLoad', (event) => {
			const baMap = event.target;
			baMap.addLayer(
				'SRID=4326;POLYGON Z((11.60243572 47.98438157 0,11.60861553 47.9832613 0,11.60664142 47.97932578 0,11.60089077 47.98044614 0,11.60243572 47.98438157 0))',
				{ zoomToExtent: true, style: { baseColor: '#8f37db' } }
			);
		});
	</script>
	<h4>HTML:</h4>
	<pre><code class="language-html">&lt;bayern-atlas l=&quot;GEORESOURCE_WEB_GRAY&quot;&gt;&lt;/bayern-atlas&gt;</code></pre>
	<h4>JavaScript:</h4>
	<pre><code class="language-javascript">document.querySelector('bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;
	const dataAsEwkt = "SRID=4326;POLYGON Z((11.60243572 47.98438157 0,11.60861553 47.9832613 0,11.60664142 47.97932578 0,11.60089077 47.98044614 0,11.60243572 47.98438157 0))";
	// a new layer containing the data and zoom to its extent
	baMap.addLayer(dataAsEwkt, { zoomToExtent: true, style: { baseColor:"#8f37db" } });
});
</code></pre>

</div>

[Back to Overview](../wc-examples.html#more-examples)