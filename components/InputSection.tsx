import React from 'react';

interface InputSectionProps {
  cost: string;
  setCost: (val: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ cost, setCost }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        بيانات التكلفة
      </h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">سعر الشراء (التكلفة)</label>
        <div className="relative">
          <input
            type="number"
            min="0"
            step="0.01"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-xl font-bold text-gray-900"
            placeholder="0.00"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">عملة</span>
        </div>
      </div>
    </div>
  );
};

export default InputSection;