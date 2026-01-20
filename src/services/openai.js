import OpenAI from "openai";
import { logTokens } from "../utils/tokenLogger.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askOpenAI(messages) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });

  logTokens(response.usage);

  return {
    reply: response.choices[0].message.content,
    usage: response.usage,
  };
}
