import React, { useState } from 'react';
import { getPricingAdvice } from '../services/geminiService';

interface SmartAdvisorProps {
  cost: number;
  productName: string;
}

const SmartAdvisor: React.FC<SmartAdvisorProps> = ({ cost, productName }) => {
  const [advice, setAdvice] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleAskAI = async () => {
    if (!cost) return;
    setLoading(true);
    setAdvice('');
    const result = await getPricingAdvice(productName || 'منتج عام', cost);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl shadow-sm border border-indigo-100">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
            <span className="bg-indigo-600 text-white p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </span>
            مستشار التسعير الذكي
          </h2>
          <p className="text-sm text-indigo-600 mt-1">مدعوم بواسطة Google Gemini</p>
        </div>
      </div>

      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        هل أنت محتار في تسعير <strong>{productName || 'المنتج'}</strong>؟ دع الذكاء الاصطناعي يحلل التكلفة ({cost}) ويقترح عليك استراتيجية مناسبة.
      </p>

      {!advice && !loading && (
        <button
          onClick={handleAskAI}
          disabled={cost <= 0}
          className={`w-full py-3 px-4 rounded-xl font-bold shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2
            ${cost > 0 
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          {cost > 0 ? 'اطلب نصيحة الذكاء الاصطناعي' : 'أدخل التكلفة أولاً'}
        </button>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-8 space-y-3">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-indigo-600 font-medium animate-pulse">جاري تحليل بيانات السوق...</p>
        </div>
      )}

      {advice && (
        <div className="mt-4 bg-white p-5 rounded-xl border border-indigo-100 shadow-inner">
          <h3 className="font-bold text-gray-900 mb-3 border-b pb-2">رأي المستشار:</h3>
          <div className="prose prose-sm prose-indigo text-gray-700 whitespace-pre-line leading-relaxed">
            {advice}
          </div>
          <button 
            onClick={() => setAdvice('')}
            className="mt-4 text-xs text-indigo-500 hover:text-indigo-700 underline"
          >
            طلب استشارة جديدة
          </button>
        </div>
      )}
    </div>
  );
};

export default SmartAdvisor;