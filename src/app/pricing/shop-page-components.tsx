// src/app/pricing/shop-page-components.tsx

import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export const Feature = ({ text }) => (
  <div className="flex items-center gap-2">
    <Check className="w-5 h-5 text-green-500" />
    <span>{text}</span>
  </div>
);

export const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200">
    <div className="flex items-center gap-4 mb-4">
      <product.icon className="w-12 h-12 text-[#008B8B]" />
      <div>
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-gray-600">{product.category}</p>
      </div>
    </div>
    <div className="space-y-2 mb-4">
      {product.features.map((feature, index) => (
        <Feature key={index} text={feature} />
      ))}
    </div>
    <div className="flex justify-between items-center">
      <div>
        {product.price && (
          <div className="text-lg font-bold">
            ${product.price}
            {product.monthlyFee && (
              <span className="text-sm text-gray-500">/month</span>
            )}
          </div>
        )}
        {product.monthlyFee && (
          <div className="text-sm text-gray-500">
            ${product.monthlyFee} per month
          </div>
        )}
      </div>
      <Link href={product.moreInfoLink}>
        <button className="flex items-center gap-2 text-[#008B8B] hover:underline">
          More Info
          <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
    </div>
  </div>
);