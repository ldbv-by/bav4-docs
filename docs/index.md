<img class="full-width" src="img/ba.png">

## Query Parameters

Documentation of the query parameters of the BayernAtlas. Query parameters allow users to access the BayernAtlas via the URL according to their needs.

- [QueryParameters Docs](queryParameters.md)

## WebComponent (Beta)

The BayernAtlas WebComponent is a lightweight, framework-agnostic Web Component that embeds the BayernAtlas map into any web page or single-page app as a reusable custom element.
It provides simple methods, properties, and events that allow you to interact with the map, for example, by setting and modifying different base layers, adjusting the map center or resolution, adding markers and geometries (e.g., via GeoJSON and KML), and responding to various user interactions (clicking, panning, changing the map view, etc.) without having to include a complex map framework.

Key Features

- **Declarative Setup**: Configure maps using HTML attributes
- **Programmatic Control**: Full JavaScript API for dynamic manipulation
- **Multiple Projections**: Support for EPSG:4326 and EPSG:25832
- **Layer Management**: Add, modify, and remove map layers
- **Drawing Tools**: Built-in geometry creation tools
- **Event System**: Comprehensive event handling for map interactions
- **Responsive Design**: Adapts to container dimensions

**Note**: The BayernAtlas WebComponent is currently only available to beta testers.

- [WebComponent Docs](wc.md)
- [WebComponent Examples](wc-examples.html)
