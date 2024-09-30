import { geminiKey } from "./Constants";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see our Getting Started tutorial)
export const genAI = new GoogleGenerativeAI(geminiKey);
