<div class="example">
	<h3>Change Layer Visibility</h3>
	<div id="exa-layer-visibility">
		<ul class="layer-list"></ul>
		<bayern-atlas l="GEORESOURCE_AERIAL,GEORESOURCE_WEB,GEORESOURCE_HISTORIC"></bayern-atlas>
	</div>
	<h4>HTML:</h4>
	<pre><code class="language-html">&lt;ul class="layer-list"&gt;&lt;/ul&gt;
&lt;bayern-atlas l="GEORESOURCE_AERIAL,GEORESOURCE_WEB,GEORESOURCE_HISTORIC"&gt;&lt;/bayern-atlas&gt;
</code></pre>

    <h4>Javascript</h4>
    <pre><code class="language-javascript">document.querySelector("bayern-atlas").addEventListener('baLoad', (event) => {
	const ba = event.target;
	const updateDOM = (event) => {
		const layerListElement = document.querySelector('.layer-list');
		layerListElement.innerHTML = '';

		for (let i = ba.layers.length - 1; i &gt;= 0; i--) {
			const muteButton = document.createElement('button');
			const listItem = document.createElement('li');
			const isVisible = ba.layersVisibility[i];

			listItem.append(`Layer ${i}: ${ba.layers[i]} `);
			muteButton.innerText = isVisible ? 'Hide' : 'Show';
			muteButton.addEventListener('click', () => {
				ba.modifyLayer(ba.layers[i], { visible: !isVisible });
			});
			listItem.append(muteButton);
			layerListElement.append(listItem);
		}
	};

	updateDOM();
	ba.addEventListener('baChange', (event) => {
		updateDOM(event);
	});
});</code></pre>

    <script>
    	document.querySelector('#exa-layer-visibility bayern-atlas').addEventListener('baLoad', (event) => {
    		const ba = event.target;
    		const updateDOM = (event) => {
    			const layerListElement = document.querySelector('#exa-layer-visibility .layer-list');
    			layerListElement.innerHTML = '';

    			for (let i = ba.layers.length - 1; i >= 0; i--) {
    				const listItem = document.createElement('li');
    				const isVisible = ba.layersVisibility[i];

    				listItem.append(`Layer ${i}: ${ba.layers[i]} `);

    				const muteButton = document.createElement('button');
    				muteButton.innerText = isVisible ? 'Hide' : 'Show';
    				muteButton.addEventListener('click', () => {
    					ba.modifyLayer(ba.layers[i], {
    						visible: !ba.layersVisibility[i]
    					});
    				});

    				listItem.append(muteButton);
    				layerListElement.append(listItem);
    			}
    		};

    		updateDOM();

    		ba.addEventListener('baChange', (event) => {
    			updateDOM(event);
    		});
    	});
    </script>

</div>

[Back to Overview](../wc-examples.html#more-examples)