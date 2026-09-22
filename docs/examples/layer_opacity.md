<div class="example">
    <h3>Change Layer Opacity</h3>
    <div id="exa-layer-opacity">
        <input type="range" class="opacity-input" min="0" max="100" value="50" />
        <bayern-atlas l="GEORESOURCE_WEB,GEORESOURCE_HISTORIC" z="8"></bayern-atlas>
        <script>
            document.querySelector('#exa-layer-opacity bayern-atlas').addEventListener('baLoad', (event) => {
                const ba = event.target;
                const opacitySlider = document.querySelector('#exa-layer-opacity .opacity-input');
                const historicLayer = ba.layers[1];

                ba.modifyLayer(historicLayer, {
                    opacity: parseFloat(opacitySlider.value) * 0.01
                });

                opacitySlider.addEventListener('input', (event) => {
                    ba.modifyLayer(historicLayer, {
                        opacity: parseFloat(opacitySlider.value) * 0.01
                    });
                });
            });
        </script>
    </div>
    <h4>HTML:</h4>
    <pre><code class="language-html">&lt;input type="range" class="opacity-input" min="0" max="100" value="50" /&gt;
&lt;bayern-atlas l="GEORESOURCE_WEB,GEORESOURCE_HISTORIC" z="8"&gt;&lt;/bayern-atlas&gt;
</code></pre>

    <h4>Javascript</h4>
    <pre><code class="language-javascript">

ba.addEventListener('baLoad', (event) => {
	const ba = event.target;
	const opacitySlider = document.querySelector('.opacity-input');
	const historicLayer = ba.layers[1];

	ba.modifyLayer(historicLayer, {
		opacity: parseFloat(opacitySlider.value) * 0.01
	});

	opacitySlider.addEventListener('input', (event) => {
		ba.modifyLayer(historicLayer, {
			opacity: parseFloat(opacitySlider.value) * 0.01
		});
	});
});</code></pre>

    
</div>

[Back to Overview](../wc-examples.html#more-examples)