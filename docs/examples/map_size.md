<div class="example">
	<h3>Change Map Size</h3>
	<p>The WebComponent matches the size of its parent container. You should not resize the WebComponent directly.</p>
    <div class="size-example-wrapper"><bayern-atlas l="GEORESOURCE_WEB"></bayern-atlas></div>
    <style>
    	.size-example-wrapper {
    		width: 400px;
    		height: 400px;
    	}
    </style>
    <h4>HTML:</h4>
    <pre><code class="language-html">&lt;div class=&quot;size-example-wrapper&quot;&gt;&lt;bayern-atlas l=&quot;GEORESOURCE_WEB&quot; r=&quot;.5&quot;&gt;&lt;/bayern-atlas&gt;&lt;/div&gt;</code></pre>
    <h4>CSS:</h4>
    <pre><code class="language-css">.size-example-wrapper {
  height: 400px;
  width: 400px;
}
</code></pre>

</div>

[Back to Overview](../wc-examples.html#more-examples)