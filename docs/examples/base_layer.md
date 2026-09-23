<div class="example">
	<h3>Change the Base Layer</h3>
	<div id="fgs52ym" class="output"><bayern-atlas l="GEORESOURCE_WEB,803da236-15f1-4c97-91e0-73248154d381"></bayern-atlas></div>
	<div class="output">
		<select class="layer-select">
			<option selected value="GEORESOURCE_AERIAL">Aerial</option>
			<option value="GEORESOURCE_WEB" selected>Map</option>
		</select>
	</div>
	<script>
		document.querySelector('#fgs52ym bayern-atlas').addEventListener('baLoad', (event) => {
			const baMap = event.target;
			document.querySelector('.layer-select').addEventListener('change', (event) => {
				// remove the layer on index=0
				baMap.removeLayer(baMap.layers[0]);
				// add a new layer on index=0
				baMap.addLayer(event.target.value, { zIndex: 0 });
			});
		});
	</script>
	<h4>HTML:</h4>
	<pre><code class="language-html">&lt;bayern-atlas l=&quot;GEORESOURCE_WEB,803da236-15f1-4c97-91e0-73248154d381&quot;&gt;&lt;/bayern-atlas&gt;

&lt;select class=&quot;layer-select&quot;&gt;
  &lt;option selected value=&quot;GEORESOURCE_AERIAL&quot;&gt;Aerial&lt;/option&gt;
  &lt;option value=&quot;GEORESOURCE_WEB&quot; selected&gt;Map&lt;/option&gt;
&lt;/select&gt;</code></pre>

    <h4>JavaScript:</h4>
    <pre><code class="language-javascript">document.querySelector('#fgs52ym bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;

	document.querySelector('.layer-select').addEventListener('change', (event) => {
		// remove the layer on index=0
		baMap.removeLayer(baMap.layers[0]);
		// add a new layer on index=0
		baMap.addLayer(event.target.value, { zIndex: 0 });
	});
});
</code></pre>

</div>

[Back to Overview](../wc-examples.html#more-examples)