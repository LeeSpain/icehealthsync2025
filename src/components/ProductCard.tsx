'use client';

import React from 'react';
import { Video, ArrowRight, Check } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="relative group h-full">
    <div className={`absolute -inset-0.5 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 bg-gradient-to-r ${product.gradientBorder}`} />
    
    <div className="relative h-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 ${product.gradient} mix-blend-multiply`} />
        <img 
          src="/api/placeholder/400/320"
          alt={product.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                {React.createElement(product.icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div>
                <h3 className="font-bold text-lg">{product.title}</h3>
                <div className="flex items-center gap-2 text-xs text-white/80">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Connected Device</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold">{product.price}</div>
              {product.subscription && (
                <div className="text-xs text-white/80">{product.subscription}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {product.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-2 rounded-xl" style={{ backgroundColor: `${product.accentColor}05` }}>
              <div className="text-lg font-bold" style={{ color: product.accentColor }}>{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2 mb-6">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4" style={{ color: product.accentColor }} />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100">
          <button 
            className="flex-1 py-2.5 rounded-xl font-medium text-white flex items-center justify-center gap-2 transition-transform hover:scale-105"
            style={{ backgroundColor: product.accentColor }}
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button 
            className="px-4 rounded-xl border-2 flex items-center gap-2 transition-colors hover:bg-gray-50"
            style={{ borderColor: product.accentColor, color: product.accentColor }}
          >
            <Video className="w-4 h-4" />
            Demo
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;