# bayern-atlas

A WebComponent that embeds the BayernAtlas in your page.

## API philosophy

- In order to declaratively setup the map you can use **attributes**  which are initially read
- **Attributes** as well as **Getter-Properties** reflect the current state of the map
- Use the **methods** to programmatically change / modify the map

## Coordinates and reference systems
- The map can take coordinates in both the 4326 and 25832 reference systems (default is 4326)
- The map itself can output coordinates in different reference systems (default is 4326). See `ec_srid` attribute for more information

## Examples

```html
//A simple example

<bayern-atlas></bayern-atlas>
```

```html
//A more complex example

<bayern-atlas
l="GEORESOURCE_AERIAL,803da236-15f1-4c97-91e0-73248154d381,c5859de2-5f50-428a-aa63-c14e7543463f"
z="8"
c="671092,5299670"
r="0.5"
ec_draw_tool="polygon"
ec_srid="25832"
ec_geometry_format="ewkt"
>
</bayern-atlas>

<script>
document.querySelector('bayern-atlas')
.addEventListener('baLoad', (event) => {  // register a load-event listener on the map
// save to call the bayern-atlas map now
const baMap = event.target;
// position the map
baMap.modifyView({ zoom: 10, center: [11, 48] });
});
</script>
```

```javascript
// Defines the center, resolution, and rotation of the map
View {
	zoom: 4, // The new number zoom level of the map (number, optional)
	center: [1286733,039367 6130639,596329], // The new center coordinate in 4326 (lon, lat) or in 25832 (Coordinate, optional)
	rotation: 0.5 // The new rotation pf the map in rad (number, optional)
}

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

ModifyLayerOptions {
	opacity: 1, // Opacity (number, 0, 1, optional)
	visible: true,  // Visibility (boolean, optional)
	zIndex: 0,  // Index of this layer within the list of active layers. When not set, the layer will be appended at the end (number, optional)
	style: { baseColor: "#fcba03" },  // If applicable the style of this layer (Style, optional),
	displayFeatureLabels: true // If applicable labels of features should be displayed (boolean, optional)
}

Style {
		baseColor: "#fcba03" //A simple base color as style for this layer (seven-character hexadecimal notation) or `null`
}

Coordinate // An array of two numbers representing an XY coordinate. Ordering is [easting, northing] or [lon, lat]. Example: `[16, 48]`.

Extent // An array of four numbers representing an extent: `[minx, miny, maxx, maxy]`.

MarkerOptions {
	id: "myMarker0", // The id of the marker (string, optional). When no ID is given a random ID will be generated
	label: "My label" // The label of the marker (string, optional). Must be set if the marker should be selectable by the user
}
```

## Attributes

| Attribute            | Type      | Description                                      |
|----------------------|-----------|--------------------------------------------------|
| `c`                  | `string`  | The Center coordinate (longitude,latitude / easting,northing) in `4326` (lon, lat) or in `25832`. Example: `c="11,48"` |
| `ec_draw_tool`       | `boolean` | Display the drawing tool for the types `point`, `line`, `polygon`: Example: `ec_draw_tool="point,line,polygon"`. |
| `ec_geometry_format` | `string`  | Designated Type (format) of returned features. One of `ewkt`, `kml`, `geojson`, `gpx`. Default is `ewkt`. Example: `ec_geometry_format="geoJson"`. |
| `ec_link_to_app`     | `boolean` | Display a chip that opens the current view in the BayernAtlas. Example: `ec_link_to_app="true"`. |
| `ec_map_activation`  | `boolean` | Display the map insensitive for user interactions unless the user activates the map via a button. Example: `ec_map_activation="true"`. |
| `ec_srid`            | `string`  | Designated SRID of returned coordinates (e.g. of geometries). One of `3857`, `4326` , `25832`. Default is `4326`. Example: `ec_srid="25832"` |
| `l`                  | `string`  | The layers of the map. Example: `l="layer_a,layer_b"`. |
| `l_o`                | `string`  | The opacity of the layers of the map. Example: `l_o="1,0.5"`. |
| `l_v`                | `string`  | The visibility of the layers of the map. Example: `l_v="true,false"`. |
| `r`                  | `number`  | The rotation of the map (in rad). Example: `r="0.5"`. |
| `z`                  | `string`  | The Zoom level (0-20) of the map. Example: `z="8"`. |

## Properties

| Property                      | Modifiers | Type                  | Description                                      |
|-------------------------------|-----------|-----------------------|--------------------------------------------------|
| `GEORESOURCE_AERIAL`          | readonly  | `string`              | Returns the identifier (GeoResource ID) for the arial image with labels (`"Luftbild + Beschriftung"`) |
| `GEORESOURCE_HISTORIC`        | readonly  | `string`              | Returns the identifier (GeoResource ID) for the historic map (`"Historische Karte"`) |
| `GEORESOURCE_TOPOGRAPHIC`     | readonly  | `string`              | Returns the identifier (GeoResource ID) for the topographic aster image map (`"Topographische Karte"`) |
| `GEORESOURCE_WEB`             | readonly  | `string`              | Returns the identifier (GeoResource ID) for the default raster image map (`"Webkarte"`) |
| `GEORESOURCE_WEB_GRAY`        | readonly  | `string`              | Returns the identifier (GeoResource ID) for the grayscale raster image map (`"Webkarte S/W"`) |
| `GEORESOURCE_WEB_VECTOR`      | readonly  | `string`              | Returns the identifier (GeoResource ID) for the default vector data map (`"Web Vector Standard"`) |
| `GEORESOURCE_WEB_VECTOR_GRAY` | readonly  | `string`              | Returns the identifier (GeoResource ID) for the grayscale vector data map (`"Web Vector Grau"`) |
| `center`                      | readonly  | `Array<number>\|null` | Returns the current center coordinate in map projection or in the configured SRID.<br />Returns `null` if the map is not yet initialized. |
| `layers`                      | readonly  | `Array<string>`       | Returns the IDs of the layers of the map or. Returns `[]` if the map is not yet initialized. |
| `layersOpacity`               | readonly  | `Array<number>`       | Returns the opacity of the layers of the map or `[]` if the map is not yet initialized. |
| `layersVisibility`            | readonly  | `Array<boolean>`      | Returns the visibility of the layers of the map or `[]` if the map is not yet initialized. |
| `rotation`                    | readonly  | `number\|null`        | Returns the rotation of the map (in rad) or `null` if the map is not yet initialized. |
| `zoom`                        | readonly  | `number\|null`        | Returns the current zoom level of the map or `null` if the map is not yet initialized. |

## Methods

| Method              | Type                                             | Description                                      |
|---------------------|--------------------------------------------------|--------------------------------------------------|
| `addLayer`          | `(geoResourceIdOrData: string, options?: AddLayerOptions): string` | Adds a new Layer to the map. <b>Returns the id of the added layer.</b><br />Optionally, the id is customizable in the AddLayerOptions.<br /><br />**geoResourceIdOrData**: The id of a GeoResource, the URL-pattern denoting an external GeoResource or the (vector) data as string (`EWKT`, `GeoJSON`, `KML`, `GPX`)<br />**options**: AddLayerOptions |
| `addMarker`         | `(coordinate: Coordinate, markerOptions?: MarkerOptions): Coordinate` | Adds a new Marker to the map. <b>Returns the id of the added marker.</b><br />Optionally, the id is customizable in the MarkerOptions.<br /><br />**coordinate**: The coordinate of the marker in 4326 (lon, lat) or in 25832 (Coordinate)<br />**markerOptions**: MarkerOptions |
| `clearHighlights`   | `(): void`                                       | Clears all highlights from currently highlighted (selected) features |
| `clearMarkers`      | `(): void`                                       | Removes all markers from the map                 |
| `modifyLayer`       | `(layerId: string, options?: ModifyLayerOptions): void` | Modifies a layer of the map.<br /><br />**layerId**: The id of a layer<br />**options**: ModifyLayerOptions |
| `modifyView`        | `(view?: View): void`                            | Modifies the view of the map.<br /><br />**view**: The new view of the map |
| `removeLayer`       | `(layerId: string): void`                        | Removes a layer from the map.<br /><br />**layerId**: The id of a layer |
| `removeMarker`      | `(markerId: string): void`                       | Removes a marker.<br /><br />**markerId**: undefined |
| `zoomToExtent`      | `(extent: Extent): void`                         | Fits the map to the given extent<br /><br />**extent**: The new extent in 4326 (lon, lat) or in 25832 |
| `zoomToLayerExtent` | `(layerId: string): void`                        | Fits the map to the extent of a layer (if possible)<br /><br />**layerId**: The id of a layer |

## Events

| Event              | Type                | Description                                      |
|--------------------|---------------------|--------------------------------------------------|
| `baChange`         | `CustomEvent<this>` | Fired when the state of the BayernAtlas map has changed.<br />See `event.detail` for the payload of the event.<br />The following changes are supported:<br />`c` - The center of the map has changed<br />`z` - The zoom level of the map has changed<br />`r` - The rotation of the map has changed<br />`l` - List of layers has changed<br />`l_v` - The visibility of a layer has changed<br />`l_o` - The opacity of a layer has changed |
| `baFeatureSelect`  | `CustomEvent<this>` | Fired when one or more features are selected.<br />See `event.detail` for the payload of the event. |
| `baGeometryChange` | `CustomEvent<this>` | Fired when the user creates or modifies a geometry.<br />See `event.detail` for the payload of the event. |
| `baLoad`           | `CustomEvent<this>` | Fired when the BayernAtlas is loaded             |
| `connected`        | `CustomEvent<this>` |                                                  |
