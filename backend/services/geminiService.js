const endpoint = () => `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL || "gemini-2.5-flash"}:generateContent?key=${process.env.GEMINI_API_KEY}`;

export const askGemini = async ({ prompt, image }) => {
  if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not configured in backend/.env");
  const parts = [{ text: prompt }];
  if (image) parts.push({ inline_data: { mime_type: image.mimetype, data: image.buffer.toString("base64") } });
  const response = await fetch(endpoint(), { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: [{ parts }], generationConfig: { responseMimeType: "application/json" } }) });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || "AI service request failed.");
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  return JSON.parse(text || "{}");
};
