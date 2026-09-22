<div class="example">
	<h3>Change Order of Layers</h3>
	<div id="exa-layer-order">
		<ul class="layer-list"></ul>
		<bayern-atlas l="GEORESOURCE_AERIAL,GEORESOURCE_WEB,GEORESOURCE_HISTORIC" z="6"></bayern-atlas>
	</div>
	<h4>HTML</h4>

    <pre><code class="language-html">&lt;ul class=&quot;layer-list&quot;&gt;&lt;/ul&gt;
&lt;bayern-atlas l=&quot;GEORESOURCE_AERIAL,GEORESOURCE_WEB,GEORESOURCE_HISTORIC&quot; z=&quot;6&quot;&gt;&lt;/bayern-atlas&gt;
</code></pre>

    <h4>Javascript</h4>
    <pre><code class="language-javascript">document.querySelector("bayern-atlas").addEventListener('baLoad', (event) => {
	const ba = event.target;
	const updateDOM = () => {
		const layerListElement = document.querySelector('.layer-list');
		layerListElement.innerHTML = '';

		for (let i = ba.layers.length - 1; i &gt;= 0; i--) {
			const listItem = document.createElement('li');
			listItem.append(`Layer ${i}: ${ba.layers[i]}`);

			if (i &lt; ba.layers.length - 1) {
				const downButton = document.createElement('button');
				downButton.innerText = 'UP';
				downButton.addEventListener('click', () => {
					ba.modifyLayer(ba.layers[i], { zIndex: i + 1 });
				});
				listItem.append(downButton);
			}
			if (i &gt; 0) {
				const upButton = document.createElement('button');
				upButton.innerText = 'DOWN';
				upButton.addEventListener('click', () => {
					ba.modifyLayer(ba.layers[i], { zIndex: i - 1 });
				});
				listItem.append(upButton);
			}

			layerListElement.append(listItem);
		}
	};

	updateDOM();
	ba.addEventListener('baChange', updateDOM);

});</code></pre>

    <script>
    	document.querySelector('#exa-layer-order bayern-atlas').addEventListener('baLoad', (event) => {
    		const ba = event.target;
    		const updateDOM = () => {
    			const layerListElement = document.querySelector('#exa-layer-order .layer-list');
    			layerListElement.innerHTML = '';

    			for (let i = ba.layers.length - 1; i >= 0; i--) {
    				const listItem = document.createElement('li');
    				listItem.append(`Layer ${i}: ${ba.layers[i]} `);

    				if (i < ba.layers.length - 1) {
    					const downButton = document.createElement('button');
    					downButton.innerText = 'UP';
    					downButton.addEventListener('click', () => {
    						ba.modifyLayer(ba.layers[i], {
    							zIndex: i + 1
    						});
    					});

    					listItem.append(downButton);
    				}

    				if (i > 0) {
    					const upButton = document.createElement('button');
    					upButton.innerText = 'DOWN';

    					upButton.addEventListener('click', () => {
    						ba.modifyLayer(ba.layers[i], {
    							zIndex: i - 1
    						});
    					});
    					listItem.append(upButton);
    				}

    				layerListElement.append(listItem);
    			}
    		};

    		updateDOM();
    		ba.addEventListener('baChange', updateDOM);
    	});
    </script>

</div>

[Back to Overview](../wc-examples.html#more-examples)