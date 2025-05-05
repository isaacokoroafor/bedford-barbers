import * as React from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map, {Source, Layer} from 'react-map-gl/maplibre';
import type {CircleLayer} from 'react-map-gl/maplibre';
import type {FeatureCollection} from 'geojson';

const geojson: FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-0.465,  52.1252]
      },
      properties: {title: 'Bedford Barber co'}
    }
  ]
};

const layerStyle: CircleLayer = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#ffba00'
  }
};
export default function  MapControl() {
  return (
    <Map
      initialViewState={{
        longitude: -0.470,
        latitude: 52.129,
        zoom: 13
      }}
      	
      style={{width: 600, height: 400}}
      mapStyle="https://api.maptiler.com/maps/0196a14d-322e-7748-a5b4-b42b6e69d11c/style.json?key=snZanJNdGav0zNmve8HB"
    >
    <Source id="my-data" type="geojson" data={geojson}>
      <Layer {...layerStyle} />
    </Source>
  </Map>
  );
}
