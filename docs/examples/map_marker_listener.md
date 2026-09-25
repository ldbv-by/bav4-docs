


<div class="example">
	<h3>Add a Marker and Register a FeatureSelect Listener</h3>
	<div id="lsd6gs" class="output"><bayern-atlas l="GEORESOURCE_WEB_GRAY"></bayern-atlas></div>
	<div>Click on the marker...</div>
	<script>
		document.querySelector('#lsd6gs bayern-atlas').addEventListener('baLoad', (event) => {
			const baMap = event.target;
			const markerId = baMap.addMarker([11.60861553, 47.9832613], { label: 'MyMarker' });
			baMap.addEventListener('baFeatureSelect', (event) => {
				if (event.detail.features.map((f) => f.properties.id).includes(markerId)) {
					setTimeout(() => {
						baMap.removeMarker(markerId);
						baMap.clearHighlights();
					}, 1000);
				}
			});
		});
	</script>
	<h4>HTML:</h4>
	<pre><code class="language-html">&lt;bayern-atlas l=&quot;GEORESOURCE_WEB_GRAY&quot;&gt;&lt;/bayern-atlas&gt;</code></pre>
	<h4>JavaScript:</h4>
	<pre><code class="language-javascript">document.querySelector('bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;
	// we add a marker. To be selectable the marker must have a label
	const markerId = baMap.addMarker([11.60861553, 47.9832613], { label: "MyMarker" });
	baMap.addEventListener("baFeatureSelect", (event) => {
		// when our marker is selected by the user we want to remove it after a delay of 1s
		if(event.detail.features.map(f => f.properties.id).includes(markerId)) {
			setTimeout(() => {
				baMap.removeMarker(markerId);
				baMap.clearHighlights(); 
			}, 1000);
		}
	});
});
</code></pre>

</div>


[Back to Overview](../wc-examples.html#more-examples)