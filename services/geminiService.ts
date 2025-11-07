import { GoogleGenAI } from "@google/genai";
import { Tour } from "../types";

// Assume process.env.API_KEY is available in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd have better error handling or a check at startup.
  // For this context, we'll log a warning.
  console.warn("Gemini API key not found. The Tour Recommender will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getTourRecommendation = async (
  preferences: string,
  tours: Tour[]
): Promise<string> => {
  if (!API_KEY) {
    return Promise.resolve("The tour recommender is currently unavailable. Please check the API key configuration.");
  }

  const model = "gemini-2.5-flash";

  const tourDetails = tours.map(tour => 
    `- ${tour.name} in ${tour.location}: ${tour.description} Good for someone who likes ${tour.usp.join(', ')}.`
  ).join('\n');

  const prompt = `You are a friendly tour guide for "Ride Mexico". A customer has described their preferences for an eBike tour. Based on their preferences and the available tours, recommend ONE tour and explain in a short, exciting paragraph why it's the perfect match for them. Be enthusiastic and helpful.

Customer Preferences: "${preferences}"

Available Tours:
${tourDetails}

Your recommendation (recommend only one and explain why):`;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I had trouble coming up with a recommendation. Please try again!";
  }
};
