"use client";

import React, { useState, memo, useEffect } from 'react';
import { Building, Users, BarChart2, Zap } from 'lucide-react';
import NavHeader from "@/components/ui/NavHeader";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

// Use a simpler GeoJSON source
const geoUrl = "/world-110m.json";  // Ensure this file is in the public folder

const MapChart = memo(() => {
  const markers = [
    { name: "New York", coordinates: [-74.006, 40.7128] },
    { name: "London", coordinates: [-0.1278, 51.5074] },
    { name: "Singapore", coordinates: [103.8198, 1.3521] }
  ];

  return (
    <ComposableMap
      projection="geoMercator"
      width={800}
      height={400}
      style={{
        width: "100%",
        height: "auto"
      }}
    >
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies, error }) => {
            if (error) {
              console.error("Error loading geographies:", error);
              return <div>Error loading map data</div>;
            }
            return geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#E6E6E6"
                stroke="#CCCCCC"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#D6D6D6", outline: "none" },
                  pressed: { outline: "none" }
                }}
              />
            ));
          }}
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <g>
              <circle r="4" fill="#00B5B5" />
              <text
                textAnchor="middle"
                y={-15}
                style={{ fontFamily: "Arial", fontSize: 10, fill: "#00B5B5" }}
              >
                {name}
              </text>
            </g>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
});

MapChart.displayName = 'MapChart';

const WorldMapGrowth = () => {
  const [timeframe, setTimeframe] = useState(6);
  const [stats, setStats] = useState({
    locations: 10,
    users: 10000,
    partners: 25,
    growth: 300
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <NavHeader />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-12">
          {[
            { icon: Building, label: 'Locations', value: stats.locations },
            { icon: Users, label: 'Active Users', value: stats.users.toLocaleString() },
            { icon: Zap, label: 'Partners', value: stats.partners },
            { icon: BarChart2, label: 'Growth Rate', value: `${stats.growth}%` }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-[#00B5B5]/10 p-3 rounded-lg">
                  <stat.icon className="w-6 h-6 text-[#00B5B5]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          {/* Timeline Controls */}
          <div className="flex justify-center gap-4 mb-12">
            {[3, 6, 12].map((months) => (
              <button
                key={months}
                onClick={() => setTimeframe(months)}
                className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                  timeframe === months 
                    ? 'bg-[#00B5B5] text-white' 
                    : 'border border-gray-200 text-gray-600 hover:border-[#00B5B5]'
                }`}
              >
                {months} Months
              </button>
            ))}
          </div>

          <div className="relative aspect-[2/1] border border-gray-100 rounded-xl overflow-hidden">
            <MapChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMapGrowth;