<div class="example">
    <h3>Listen to Map Events</h3>
    <div id="sdhdt3w7" class="output"><bayern-atlas l="GEORESOURCE_WEB" r=".5"></bayern-atlas></div>
    <div id="sdhdt3w7_desc">Drag, zoom and rotate the map...</div>
    <div id="sdhdt3w7_output" class="output" style="display: none">
        <pre><code></code></pre>
    </div>
    <script>
        document.querySelector('#sdhdt3w7 bayern-atlas').addEventListener('baLoad', (event) => {
            const baMap = event.target;
            baMap.addEventListener('baChange', (event) => {
                var datetime = new Date().toISOString();
                document.querySelector('#sdhdt3w7_desc').style.display = 'none';
                document.querySelector('#sdhdt3w7_output').style.display = 'block';
                const el = document.querySelector('#sdhdt3w7_output pre code');
                el.innerText = `${new Date().toISOString()}: ${JSON.stringify(event.detail, null, 1)} \n${el.innerText}`;
            });
        });
    </script>
    <h4>HTML:</h4>
    <pre><code class="language-html">&lt;bayern-atlas l=&quot;GEORESOURCE_WEB&quot; r=&quot;.5&quot;&gt;&lt;/bayern-atlas&gt;</code></pre>
    <h4>JavaScript:</h4>
    <pre><code class="language-javascript">document.querySelector('bayern-atlas').addEventListener('baLoad', (event) => {
	const baMap = event.target;

	baMap.addEventListener("baChange",(event) => {
		console.log(event.detail);
	});
});
</code></pre>


</div>

[Back to Overview](../wc-examples.html#more-examples)