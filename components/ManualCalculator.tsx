import React, { useState, useEffect } from 'react';

interface ManualCalculatorProps {
  cost: number;
}

const ManualCalculator: React.FC<ManualCalculatorProps> = ({ cost }) => {
  const [percent, setPercent] = useState<string>('');
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  useEffect(() => {
    const p = parseFloat(percent);
    if (!isNaN(p) && !isNaN(cost)) {
      const profitVal = cost * (p / 100);
      setProfit(profitVal);
      setSellingPrice(cost + profitVal);
    } else {
      setSellingPrice(0);
      setProfit(0);
    }
  }, [cost, percent]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18m2.497-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM6 18v-1.5a1.5 1.5 0 011.5-1.5h2.25a1.5 1.5 0 011.5 1.5V18m12-11.25H3v3.75h18V6.75z" />
          </svg>
        </span>
        حساب نسبة مخصصة
      </h2>
      
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="w-full md:w-1/3">
          <label className="block text-sm font-medium text-gray-700 mb-2">نسبة الربح المطلوبة %</label>
          <input
            type="number"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-center text-lg"
            placeholder="مثال: 25"
          />
        </div>

        <div className="flex-1 w-full bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
          <div className="text-center w-1/2 border-l border-gray-300 pl-4">
            <p className="text-xs text-gray-500 mb-1">مبلغ الربح</p>
            <p className="text-lg font-bold text-emerald-600">+{profit.toFixed(2)}</p>
          </div>
          <div className="text-center w-1/2 pr-4">
            <p className="text-xs text-gray-500 mb-1">سعر البيع النهائي</p>
            <p className="text-2xl font-black text-gray-900">{sellingPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualCalculator;