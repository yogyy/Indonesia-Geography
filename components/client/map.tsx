'use client';

import React from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import Tooltips from './tooltips';
import Link from 'next/link';

interface Map {
  geoUrl: any;
}
export const MapIndo = ({ geoUrl }: Map) => {
  return (
    <div className="w-full">
      <ComposableMap projection="geoMercator" className="h-screen w-full border-red-600">
        <ZoomableGroup center={[117, -4]} zoom={9} maxZoom={20}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Link key={geo.rsmKey} href={`/provinsi/${geo.properties.code}`}>
                  <Geography
                    aria-label={geo.properties.provinsi}
                    onClick={() => console.log(geo.properties.provinsi, geo)}
                    className="outline-none hover:opacity-70 fill-green-700"
                    geography={geo}
                  />
                </Link>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};
