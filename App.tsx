import React, { useState } from 'react';
import InputSection from './components/InputSection';
import ManualCalculator from './components/ManualCalculator';
import MarginGrid from './components/MarginGrid';

const App: React.FC = () => {
  const [cost, setCost] = useState<string>('');

  const numericCost = parseFloat(cost) || 0;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-200">
              $
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">حاسبة الربح لوميرا كيم</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <InputSection 
            cost={cost} 
            setCost={setCost} 
          />

          <ManualCalculator cost={numericCost} />
          
          <MarginGrid cost={numericCost} />
        </div>
      </main>
    </div>
  );
};

export default App;