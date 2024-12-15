import React from 'react';
import { Check, ShoppingCart, Plus } from 'lucide-react';

// Feature Component
export const Feature: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-3">
    <div className="w-5 h-5 rounded-full bg-[#008B8B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="w-3 h-3 text-[#008B8B]" />
    </div>
    <span className="text-gray-600 text-sm">{text}</span>
  </div>
);

// Product Card Component
interface Product {
  name: string;
  price?: string;
  monthlyFee: string;
  icon: React.ComponentType<{ className: string }>;
  category: string;
  features: string[];
  requiresPro?: boolean;
  perUser?: boolean;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500">
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-sm mb-2 ${
            product.requiresPro 
              ? 'bg-[#FF4500]/10 text-[#FF4500]' 
              : 'bg-[#008B8B]/10 text-[#008B8B]'
          }`}>
            {product.category}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
        </div>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
          product.requiresPro
            ? 'bg-gradient-to-br from-[#FF4500] to-[#FF6347]'
            : 'bg-gradient-to-br from-[#008B8B] to-[#20B2AA]'
        }`}>
          <product.icon className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        {product.price && (
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-gray-900">€{product.price}</span>
            <span className="text-gray-500 mb-1">one-time</span>
          </div>
        )}
        <div className="flex items-center gap-2 mt-2">
          <Plus className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">
            €{product.monthlyFee}/month
            {product.perUser ? ' per user' : ''}
          </span>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {product.features.map((feature, index) => (
          <Feature key={index} text={feature} />
        ))}
      </div>

      <button className={`w-full px-6 py-3 rounded-xl
        transition-all duration-300 flex items-center justify-center gap-2 text-white
        ${product.requiresPro 
          ? 'bg-gradient-to-r from-[#FF4500] to-[#FF6347]' 
          : 'bg-gradient-to-r from-[#008B8B] to-[#20B2AA]'
        }`}>
        Add to Cart
        <ShoppingCart className="w-4 h-4" />
      </button>
    </div>
  </div>
);