# bayern-atlas

BayernAtlas WebComponent - Embed interactive maps in your web applications.

This WebComponent provides a declarative API for embedding BayernAtlas maps with full programmatic control.
It supports multiple coordinate systems, layer management, drawing tools, and real-time state synchronization.

## Key Features

- **Declarative Setup**: Configure maps using HTML attributes
- **Programmatic Control**: Full JavaScript API for dynamic manipulation
- **Multiple Projections**: Support for EPSG:4326 and EPSG:25832
- **Layer Management**: Add, modify, and remove map layers
- **Drawing Tools**: Built-in geometry creation tools
- **Event System**: Comprehensive event handling for map interactions
- **Responsive Design**: Adapts to container dimensions

## API Philosophy

- **Attributes**: Declarative setup and state reflection
- **Properties**: Read current map state
- **Methods**: Programmatic map manipulation
- **Events**: Real-time state change notifications

## Core Concepts

### Layer
A logical map layer that groups GeoResources or Features, controlling visibility, z-order, and styling.
Examples: base map layers (WMTS), overlay layers (vector data), marker layers.

### GeoResource
A geospatial data source referenced by ID (e.g., `GEORESOURCE_AERIAL`) or URL pattern.
Can be raster tiles, vector data, or external services.

### Feature
A single geospatial object with geometry, properties, and optional label.
Features can be selected, highlighted, and exported.

### Geometry
The spatial shape defining a Feature (Point, LineString, Polygon, Multi* variants).
Supports multiple formats: EWKT, GeoJSON, KML, GPX.

## Coordinate Systems

The component accepts coordinates in both WGS84 (EPSG:4326) and UTM32N (EPSG:25832):
- **EPSG:4326**: Longitude, Latitude (default)
- **EPSG:25832**: Easting, Northing

Output coordinates can be configured via the `ec_srid` attribute.

## Basic Usage

## Examples

```html
// Include the WebComponent script
<script src="https://bayernatlas.de/wc.js" type="module"></script>
```

```html
// Simple map
<bayern-atlas></bayern-atlas>
```

```html
// Configured map with attributes
<bayern-atlas
  z="8"
  c="11.5,48.1"
  l="atkis,luftbild_labels"
  ec_srid="25832"
></bayern-atlas>
```

```javascript
// Programmatic control
const map = document.querySelector('bayern-atlas');
map.addEventListener('baLoad', () => {
  map.modifyView({ zoom: 10, center: [11, 48] });
  const layerId = map.addLayer('GEORESOURCE_AERIAL');
});
```

```html
// Drawing tools
<bayern-atlas ec_draw_tool="polygon"></bayern-atlas>
```

```javascript
// Event handling
const map = document.querySelector('bayern-atlas');
map.addEventListener('baFeatureSelect', (event) => {
  console.log('Selected features:', event.detail);
});
```

```javascript
// TYPE definitions

// Defines the center, resolution, and rotation of the map
View {
zoom: 4, // The new number zoom level of the map (number, optional)
center: [1286733,039367 6130639,596329], // The new center coordinate in 4326 (lon, lat) or in 25832 (Coordinate, optional)
rotation: 0.5 // The new rotation pf the map in rad (number, optional)
}

// Defines a coordinate
Coordinate // An array of two numbers representing an XY coordinate. Ordering is [easting, northing] or [lon, lat]. Example: `[16, 48]`.

// Defines an extent
Extent // An array of four numbers representing an extent: `[minx, miny, maxx, maxy]`.

// Defines a geometry
Geometry {
type: 'EWKT',  // The type of the geometry (string)
srid: 4236,  //The srid of the geometry (number)
data: 'SRID=4326POINT(15 20)',  //The data of the geometry (string)
}

// Defines a feature
Feature {
geometry:  {type: 'EWKT', srid: 4236, data: 'SRID=4326POINT(15 20)'} // The geometry of the feature (Geometry)
label: "Foo", // The label of the feature (string, optional)
properties: {} // The properties of the feature (object, optional)
}

// Defines the options for adding a layer
AddLayerOptions {
opacity: 1, // Opacity (number, 0, 1, optional)
visible: true,  // Visibility (boolean, optional)
zIndex: 0,  // Index of this layer within the list of active layers. When not set, the layer will be appended at the end (number, optional)
style: { baseColor: "#fcba03" },  // If applicable the style of this layer (Style, optional),
displayFeatureLabels: true, // If applicable labels of features should be displayed (boolean, optional).
zoomToExtent: true , // If applicable the map should be zoomed to the extent of this layer (boolean, optional)
layerId: "myLayerO", // The id of the layer (string, optional)
modifiable: false, // If applicable the data of this layer should be modifiable by the user (boolean, optional). Note: Only one layer per map can be modifiable. A modifiable layer must meet the following expectations: Its data must have the format `KML` and must previously be created by the BayernAtlas
}

// Defines the options for modifying a layer
ModifyLayerOptions {
opacity: 1, // Opacity (number, 0, 1, optional)
visible: true,  // Visibility (boolean, optional)
zIndex: 0,  // Index of this layer within the list of active layers. When not set, the layer will be appended at the end (number, optional)
style: { baseColor: "#fcba03" },  // If applicable the style of this layer (Style, optional),
displayFeatureLabels: true // If applicable labels of features should be displayed (boolean, optional)
}

// Defines the style for a layer
Style {
baseColor: "#fcba03" //A simple base color as style for this layer (seven-character hexadecimal notation) or `null`
}

// Defines the options for a marker
MarkerOptions {
id: "myMarker0", // The id of the marker (string, optional). When no ID is given a random ID will be generated
label: "My label" // The label of the marker (string, optional). Must be set if the marker should be selectable by the user
}
```

## Attributes

| Attribute            | Type      | Description                                      |
|----------------------|-----------|--------------------------------------------------|
| `c`                  | `string`  | The Center coordinate (longitude,latitude / easting,northing) in `4326` (lon, lat) or in `25832`. Example: `c="11,48"`. |
| `ec_draw_tool`       | `boolean` | Display the drawing tool for the types `point`, `line`, `polygon`: Example: `ec_draw_tool="point,line,polygon"`. |
| `ec_geometry_format` | `string`  | Designated Type (format) of returned features. One of `ewkt`, `kml`, `geojson`, `gpx`. Default is `ewkt`. Example: `ec_geometry_format="geoJson"`. |
| `ec_link_to_app`     | `boolean` | Display a chip that opens the current view in the BayernAtlas. Example: `ec_link_to_app="true"`. |
| `ec_map_activation`  | `boolean` | Display the map insensitive for user interactions unless the user activates the map via a button. Example: `ec_map_activation="true"`. |
| `ec_srid`            | `string`  | Designated SRID of returned coordinates (e.g. of geometries). One of `3857`, `4326` , `25832`. Default is `4326`. Example: `ec_srid="25832"`. |
| `l`                  | `string`  | The layers of the map. Example: `l="layer_a,layer_b"`. |
| `l_o`                | `string`  | The opacity of the layers of the map. Example: `l_o="1,0.5"`. |
| `l_v`                | `string`  | The visibility of the layers of the map. Example: `l_v="true,false"`. |
| `r`                  | `number`  | The rotation of the map (in rad). Example: `r="0.5"`. |
| `z`                  | `string`  | The Zoom level (0-20) of the map. Example: `z="8"`. |

## Properties

| Property                      | Modifiers | Type               | Description                                      |
|-------------------------------|-----------|--------------------|--------------------------------------------------|
| `GEORESOURCE_AERIAL`          | readonly  | `string`           | Returns the identifier for the aerial imagery with labels ("Luftbild + Beschriftung").<br />High-resolution satellite/aerial imagery with overlaid place names and labels. |
| `GEORESOURCE_HISTORIC`        | readonly  | `string`           | Returns the identifier for the historic map ("Historische Karte").<br />Historical topographic mapping showing Bavaria's landscape in earlier times. |
| `GEORESOURCE_TOPOGRAPHIC`     | readonly  | `string`           | Returns the identifier for the topographic map ("Topographische Karte").<br />Detailed topographic mapping with elevation contours and terrain features. |
| `GEORESOURCE_WEB`             | readonly  | `string`           | Returns the identifier for the default raster base map ("Webkarte").<br />A general-purpose topographic map suitable for most use cases. |
| `GEORESOURCE_WEB_GRAY`        | readonly  | `string`           | Returns the identifier for the grayscale raster base map ("Webkarte S/W").<br />A black and white version of the topographic map. |
| `GEORESOURCE_WEB_VECTOR`      | readonly  | `string`           | Returns the identifier for the standard vector base map ("Web Vector Standard").<br />Vector-based topographic mapping with scalable rendering. |
| `GEORESOURCE_WEB_VECTOR_GRAY` | readonly  | `string`           | Returns the identifier for the grayscale vector base map ("Web Vector Grau").<br />Monochrome version of the vector topographic map. |
| `center`                      | readonly  | `Coordinate\|null` | Returns the current center coordinate in map projection or in the configured SRID.<br />Returns `null` if the map is not yet initialized. |
| `layers`                      | readonly  | `Array<string>`    | Returns the IDs of the currently active layers.<br />Returns an empty array if the map is not yet initialized. |
| `layersOpacity`               | readonly  | `Array<number>`    | Returns the opacity of each layer (0-1).<br />Returns an empty array if the map is not yet initialized. |
| `layersVisibility`            | readonly  | `Array<boolean>`   | Returns the visibility state of each layer (true/false).<br />Returns an empty array if the map is not yet initialized. |
| `rotation`                    | readonly  | `number\|null`     | Returns the rotation of the map in radians.<br />Returns `null` if the map is not yet initialized. |
| `zoom`                        | readonly  | `number\|null`     | Returns the current zoom level of the map (0-20).<br />Returns `null` if the map is not yet initialized. |

## Methods

| Method              | Type                                             | Description                                      |
|---------------------|--------------------------------------------------|--------------------------------------------------|
| `addLayer`          | `(geoResourceIdOrData: string, options?: AddLayerOptions \| undefined): string` | Adds a new layer to the map.<br />Supports GeoResource IDs, URLs, or raw geospatial data (EWKT, GeoJSON, KML, GPX).<br /><br />**geoResourceIdOrData**: GeoResource ID, URL, or data string<br />**options**: Layer configuration options |
| `addMarker`         | `(coordinate: Coordinate, markerOptions?: MarkerOptions \| undefined): string` | Adds a marker to the map at the specified coordinate.<br />Markers can be selected by users if they have a label.<br /><br />**coordinate**: The marker position<br />**markerOptions**: Marker configuration |
| `clearHighlights`   | `(): void`                                       | Clears all feature highlights/selection from the map. |
| `clearMarkers`      | `(): void`                                       | Removes all markers from the map.                |
| `closeTool`         | `(): void`                                       | Closes the current active tool.                  |
| `modifyLayer`       | `(layerId: string, options?: ModifyLayerOptions \| undefined): void` | Modifies an existing layer's properties.<br />All options are optional - only specified properties will be updated.<br /><br />**layerId**: The ID of the layer to modify<br />**options**: The modification options |
| `modifyView`        | `(view?: View): void`                            | Modifies the map view (center, zoom, rotation).<br />All parameters are optional - only specified properties will be updated.<br /><br />**view**: The view configuration to apply |
| `removeLayer`       | `(layerId: string): void`                        | Removes a layer from the map.<br /><br />**layerId**: The ID of the layer to remove |
| `removeMarker`      | `(markerId: string): void`                       | Removes a specific marker from the map.<br /><br />**markerId**: The ID of the marker to remove |
| `zoomToExtent`      | `(extent: Extent): void`                         | Zooms the map to fit the specified extent.<br />The extent coordinates should match the map's current coordinate system.<br /><br />**extent**: The bounding box to zoom to [minx, miny, maxx, maxy] |
| `zoomToLayerExtent` | `(layerId: string): void`                        | Zooms the map to fit the extent of a specific layer.<br />Only works for layers that have a defined spatial extent.<br /><br />**layerId**: The ID of the layer to zoom to |

## Events

| Event              | Type                | Description                                      |
|--------------------|---------------------|--------------------------------------------------|
| `baChange`         | `CustomEvent<this>` | Fired when the state of the BayernAtlas map has changed.<br />See `event.detail` for the payload of the event.<br />The following changes are supported:<br />`c` - The center of the map has changed<br />`z` - The zoom level of the map has changed<br />`r` - The rotation of the map has changed<br />`l` - List of layers has changed<br />`l_v` - The visibility of a layer has changed<br />`l_o` - The opacity of a layer has changed |
| `baFeatureSelect`  | `CustomEvent<this>` | Fired when one or more features are selected. Use `event.detail` to access the selected `Feature`. |
| `baGeometryChange` | `CustomEvent<this>` | Fired when the user creates or modifies a geometry. Use `event.detail` to access its `Geometry`. |
| `baLoad`           | `CustomEvent<this>` | Fired when the BayernAtlas is loaded             |
| `connected`        | `CustomEvent<this>` |                                                  |
