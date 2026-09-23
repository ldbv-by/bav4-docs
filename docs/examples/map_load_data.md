
<div class="example">
	<h3>Load Geometries from a Storage</h3>
	<h4>Note: The data must be in KML format and may only be created and modified by the BayernAtlas</h4>
	<div id="ls5ewgxc" class="output"><bayern-atlas ec_srid="4326" ec_draw_tool="point,line,polygon" ec_geometry_format="kml"></bayern-atlas></div>
	<div id="ls5ewgxc_desc">Create a geometry after enabling the drawing tool and reload the page...</div>
	<div id="ls5ewgxc_output" class="output" style="display: none">
		<pre><code></code></pre>
	</div>
	<script>
		document.querySelector('#ls5ewgxc bayern-atlas').addEventListener('baLoad', (event) => {
			const baMap = event.target;
			const dataAsKml = localStorage.getItem('mySavedDataAsKML') ?? '';
			baMap.addLayer(dataAsKml, { zoomToExtent: true, modifiable: true });
			baMap.addEventListener('baGeometryChange', (event) => {
				localStorage.setItem('mySavedDataAsKML', event.detail.data);
			});
		});
	</script>
	<h4>HTML:</h4>
	<pre><code class="language-html">&lt;bayern-atlas ec_srid=&quot;4326&quot; ec_draw_tool=&quot;point,line,polygon&quot; ec_geometry_format=&quot;kml&quot;&gt;</code></pre>
	<h4>JavaScript:</h4>
	<pre><code class="language-javascript">document.querySelector('bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;
	const dataAsKml = localStorage.getItem("mySavedDataAsKML") ?? ""; // Load data from the local storage
	baMap.addLayer(dataAsKml, { zoomToExtent: true, modifiable: true });  // make the layer modifiable: Note: A modifiable layer must meet the following expectations: Its data must have the format `KML` and must previously be created by the BayernAtlas
	
	baMap.addEventListener("baGeometryChange",(event) => {
		localStorage.setItem("mySavedDataAsKML", event.detail.data); // Save data to the local storage
	})
});
</code></pre>

</div>

[Back to Overview](../wc-examples.html#more-examples)