<div class="example">
	<h3>Draw on the map</h3>
	<div id="d3gd63fs" class="output"><bayern-atlas ec_srid="4326" ec_draw_tool="point,line,polygon" ec_geometry_format="kml"></bayern-atlas></div>
	<div id="d3gd63fs_desc">Create a geometry after enabling the drawing tool...</div>
	<div id="d3gd63fs_output" class="output" style="display: none">
		<pre><code></code></pre>
	</div>
	<script>
		document.querySelector('#d3gd63fs bayern-atlas').addEventListener('baLoad', (event) => {
			const baMap = event.target;
			const coordinate25832 = [703437, 5425425];
			baMap.modifyView({ center: coordinate25832, zoom: 12 });
			baMap.addEventListener('baGeometryChange', (event) => {
				document.querySelector('#d3gd63fs_desc').style.display = 'none';
				document.querySelector('#d3gd63fs_output').style.display = 'block';

    			const el = document.querySelector('#d3gd63fs_output pre code');
    			el.innerText = `${new Date().toISOString()}: ${JSON.stringify(event.detail, null, 1)} \n${el.innerText}`;
    		});
    	});
    </script>
    <h4>HTML:</h4>
    <pre><code class="language-html">&lt;bayern-atlas ec_srid=&quot;4326&quot; ec_draw_tool=&quot;point,line,polygon&quot; ec_geometry_format=&quot;kml&quot;&gt;&lt;/bayern-atlas&gt;</code></pre>
    <h4>JavaScript:</h4>
    <pre><code class="language-javascript">document.querySelector('bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;
	const coordinate25832 = [703437, 5425425]; // coordinate in EPSG:25832
	baMap.modifyView({ center: coordinate25832, zoom: 12 });
	baMap.addMarker(coordinate25832, { label: "MyMarker" });
	// register a baGeometryChange -listener
	baMap.addEventListener("baGeometryChange",(event) => {
		console.log(JSON.stringify(event.detail, null, 1);
	});

});
</code></pre>

</div>


[Back to Overview](../wc-examples.html#more-examples)