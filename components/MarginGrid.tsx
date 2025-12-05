import React from 'react';
import { MarginItem } from '../types';

interface MarginGridProps {
  cost: number;
}

const MarginGrid: React.FC<MarginGridProps> = ({ cost }) => {
  const margins: MarginItem[] = [];
  
  // Logic: 5% to 70%, increment by 5
  for (let i = 5; i <= 70; i += 5) {
    const profit = cost * (i / 100);
    margins.push({
      percentage: i,
      profitAmount: profit,
      sellingPrice: cost + profit
    });
  }

  if (cost === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
        <p className="text-gray-400">أدخل سعر التكلفة أولاً لعرض قائمة الأسعار المقترحة</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="bg-purple-100 text-purple-600 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
          </svg>
        </span>
        جدول الأسعار المقترحة (5% - 70%)
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {margins.map((item) => (
          <div key={item.percentage} className="relative group bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-xl p-4 transition-all duration-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold bg-gray-200 group-hover:bg-emerald-200 text-gray-700 group-hover:text-emerald-800 px-2 py-1 rounded-md transition-colors">
                {item.percentage}%
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-500">سعر البيع</p>
              <p className="text-xl font-bold text-gray-900 group-hover:text-emerald-700">
                {item.sellingPrice.toFixed(2)}
              </p>
              <p className="text-xs text-emerald-600 font-medium">
                ربح: {item.profitAmount.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarginGrid;