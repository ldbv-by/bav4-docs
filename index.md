# Documentation of the BayernAtlas

<iframe src=https://atlas.bayern.de/embed.html?c=671115%2C5416102&z=6&r=0&l=vt_luftbild&mid=1&ec_map_activation=true&ec_link_to_app=true width='250px' height='250px' loading='lazy' frameborder='0' style='border:0' role='application'></iframe>

## Query Parameters

Documentation of the query parameters of the BayernAtlas. Query parameters allow users to access the BayernAtlas via the URL according to their needs.

- [QueryParameters Docs](queryParameters.md)

## WebComponent (Beta)

The BayernAtlas Web Component is a lightweight, framework-agnostic Web Component that embeds the BayernAtlas map into any web page or single-page app as a reusable custom element.
It exposes simple attributes, properties and events so you can configure base layers (topographic, orthophoto), map center/zoom, add GeoJSON/markers, and react to user interactions (click, move, extent change) without pulling in a large mapping framework.

Key features

- Easy to use: drop-in custom element with declarative attributes (center, zoom, layers) and JS API for dynamic control.
- BayernAtlas integration: loads BayernAtlas tiles/WMS/WMTS layers, supports common BayernAtlas layer names and respects required attribution.
- Vector overlays: add markers, polylines, polygons or full GeoJSON, EWKT, KML, GPX features programmatically.
- Events & methods: emits events (map-click, view-change) and provides methods (addLayer, modifyView, addMarker, zoomToExtent).
- Terms & attribution: includes automatic BayernAtlas attribution; users must follow BayernAtlas terms of use and API rules.

Note: The BayernAtlas WebComponent is currently just available for Beta testers.

- [WebComponent Docs](wc.md)
- [WebComponent Examples](test.html)
