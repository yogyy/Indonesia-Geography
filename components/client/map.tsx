'use client';

import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
// import 'react-tooltip/dist/react-tooltip.css';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Map {
  geoUrl: any;
  center: [number, number] | undefined;
  zoom: number;
  maxZoom: number;
  scale?: number;
  topage: boolean;
}
export const MapIndo = ({ geoUrl, scale, zoom, maxZoom, center, topage }: Map) => {
  return (
    <>
      <Tooltip
        id="wilayah"
        offset={5}
        style={{ backgroundColor: '#131313', color: 'white', fontWeight: 600 }}
      />
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: scale, center: center }}
        className="w-full h-screen z-[5]"
      >
        <ZoomableGroup zoom={zoom} maxZoom={maxZoom} center={center}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo, index) => (
                <Link
                  tabIndex={1}
                  className="outline-none maps"
                  key={geo.properties.kabkot + index || geo.properties.provinsi}
                  href={
                    topage
                      ? `/provinsi/${geo.properties.code}`
                      : `https://www.google.com/search?q=kab/kot+${geo.properties.kabkot}`
                  }
                  target={topage ? '_self' : '_blank'}
                >
                  <Geography
                    data-tooltip-id="wilayah"
                    data-tooltip-content={geo.properties.kabkot || geo.properties.provinsi}
                    data-tooltip-place="top"
                    data-tooltip-delay-show={600}
                    aria-label={geo.properties.provinsi}
                    className={cn(
                      'outline-none border-none hover:opacity-70 fill-green-700 transition-all duration-300',
                      geo.properties.kabkot
                    )}
                    geography={geo}
                  />
                </Link>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};
