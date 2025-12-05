import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPricingAdvice = async (productName: string, cost: number): Promise<string> => {
  try {
    const prompt = `
      تصرف كخبير اقتصادي ومستشار تسعير محترف.
      لدى المستخدم منتج باسم: "${productName}"
      سعر التكلفة هو: ${cost}
      
      المطلوب:
      1. اقترح نسبة ربح منطقية لهذا النوع من المنتجات في السوق الحالي.
      2. اشرح باختصار لماذا اخترت هذه النسبة.
      3. اعطِ نصيحة تسويقية سريعة لبيع هذا المنتج بهذا السعر.
      
      اجعل الإجابة قصيرة ومفيدة (أقل من 150 كلمة) وباللغة العربية.
      لا تستخدم Markdown معقد، استخدم نقاط بسيطة.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "عذراً، لم أتمكن من توليد نصيحة في الوقت الحالي.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء الاتصال بمستشار الذكاء الاصطناعي. يرجى التأكد من مفتاح API والمحاولة مرة أخرى.";
  }
};