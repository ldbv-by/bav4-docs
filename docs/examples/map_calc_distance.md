<div class="example">
	<h3>Calculate distance with Haversine Approximation</h3>
	<h4>Note: Lengths are calculated by assuming great circle segments between geometry coordinates.</h4>

    <div id="exa-distance-haversine">
    	<p>
    		Distance: <b><span class="distance-span">0</span></b> km
    	</p>
    	<button class="clear-button">Clear waypoints</button>
    	<div style="width: 400px; height: 400px">
    		<bayern-atlas ec_srid="4326"></bayern-atlas>
    	</div>

    	<script>
    		document.querySelector('#exa-distance-haversine bayern-atlas').addEventListener('baLoad', (event) => {
    			const baMap = event.target;
    			let startCoordinate = null;
    			let endCoordinate = null;

    			const getDistanceInKM = (coordinate1, coordinate2) => {
    				const deg2rad = (deg) => {
    					return deg * (Math.PI / 180);
    				};

    				var R = 6371; // approximation - earth radius
    				var dLat = deg2rad(coordinate2[0] - coordinate1[0]);
    				var dLon = deg2rad(coordinate2[1] - coordinate1[1]);
    				var a =
    					Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    					Math.cos(deg2rad(coordinate1[0])) * Math.cos(deg2rad(coordinate2[0])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    				var d = R * c;
    				return d.toFixed(3);
    			};

    			document.querySelector('#exa-distance-haversine .clear-button').addEventListener('click', () => {
    				baMap.clearMarkers();
    				startCoordinate = endCoordinate = null;
    				document.querySelector('#exa-distance-haversine .distance-span').innerText = '0';
    			});

    			baMap.addEventListener('baFeatureSelect', (event) => {
    				const info = event.detail;
    				const coordinate = info.coordinate;

    				if (info.features.length > 0) return;

    				if (startCoordinate == null) {
    					startCoordinate = coordinate;
    					baMap.addMarker(coordinate);
    					return;
    				}

    				endCoordinate = coordinate;
    				baMap.clearMarkers();
    				baMap.addMarker(startCoordinate);
    				baMap.addMarker(endCoordinate);
    				document.querySelector('#exa-distance-haversine .distance-span').innerText = getDistanceInKM(startCoordinate, endCoordinate);
    			});
    		});
    	</script>

    	<h4>HTML:</h4>
    	<pre><code class="language-html">&lt;p&gt;Distance: &lt;b&gt;&lt;span class=&quot;distance-span&quot;&gt;0&lt;/span&gt;&lt;/b&gt; km&lt;/p&gt;
&lt;button class=&quot;clear-button&quot;&gt;Clear waypoints&lt;/button&gt;
&lt;div style=&quot;width: 400px; height: 400px;&quot;&gt;&lt;bayern-atlas ec_srid=&quot;4326&quot;&gt;&lt;/div&gt;
</code></pre>

    	<h4>JavaScript:</h4>
    	<pre><code class="language-javascript">document.querySelector('#exa-distance-haversine bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;
	let startCoordinate = null;
	let endCoordinate = null;

	// https://en.wikipedia.org/wiki/Haversine_formula
	const getDistanceInKM = (coordinate1, coordinate2) => {
		const deg2rad = (deg) => { return deg _ (Math.PI / 180) }
		var R = 6371; // approximation - earth radius
		var dLat = deg2rad(coordinate2[0] - coordinate1[0]);
		var dLon = deg2rad(coordinate2[1] - coordinate1[1]);
		var a =
		Math.sin(dLat / 2) _ Math.sin(dLat / 2) +
		Math.cos(deg2rad(coordinate1[0])) _ Math.cos(deg2rad(coordinate2[0])) _
		Math.sin(dLon / 2) _ Math.sin(dLon / 2);
		var c = 2 _ Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = R \* c;
		return d.toFixed(3);
	}

	document.querySelector(".clear-button").addEventListener('click', () => {
		baMap.clearMarkers();
		startCoordinate = endCoordinate = null;
		document.querySelector(".distance-span").innerText = '0';
	});

	baMap.addEventListener('baFeatureSelect', (event) => {
		const info = event.detail;
		const coordinate = info.coordinate;
		if (info.features.length > 0)
			return;
		if (startCoordinate == null) {
			startCoordinate = coordinate;
			baMap.addMarker(coordinate);
			return;
		}

		endCoordinate = coordinate;
		baMap.clearMarkers();
		baMap.addMarker(startCoordinate);
		baMap.addMarker(endCoordinate);
		document.querySelector(".distance-span").innerText
			= getDistanceInKM(startCoordinate, endCoordinate);
	});
});
</code></pre>

    	<script>
    		document.querySelector('#exa-distance-haversine bayern-atlas').addEventListener('baLoad', (event) => {
    			const baMap = event.target;
    			let startCoordinate = null;
    			let endCoordinate = null;

    			const getDistanceInKM = (coordinate1, coordinate2) => {
    				const deg2rad = (deg) => {
    					return deg * (Math.PI / 180);
    				};

    				var R = 6371; // approximation - earth radius
    				var dLat = deg2rad(coordinate2[0] - coordinate1[0]);
    				var dLon = deg2rad(coordinate2[1] - coordinate1[1]);
    				var a =
    					Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    					Math.cos(deg2rad(coordinate1[0])) * Math.cos(deg2rad(coordinate2[0])) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    				var d = R * c;
    				return d.toFixed(3);
    			};

    			document.querySelector('#exa-distance-haversine .clear-button').addEventListener('click', () => {
    				baMap.clearMarkers();
    				startCoordinate = endCoordinate = null;
    				document.querySelector('#exa-distance-haversine .distance-span').innerText = '0';
    			});

    			baMap.addEventListener('baFeatureSelect', (event) => {
    				const info = event.detail;
    				const coordinate = info.coordinate;

    				if (info.features.length > 0) return;

    				if (startCoordinate == null) {
    					startCoordinate = coordinate;
    					baMap.addMarker(coordinate);
    					return;
    				}

    				endCoordinate = coordinate;
    				baMap.clearMarkers();
    				baMap.addMarker(startCoordinate);
    				baMap.addMarker(endCoordinate);
    				document.querySelector('#exa-distance-haversine .distance-span').innerText = getDistanceInKM(startCoordinate, endCoordinate);
    			});
    		});
    	</script>
    </div>


</div>

[Back to Overview](../wc-examples.html#more-examples)