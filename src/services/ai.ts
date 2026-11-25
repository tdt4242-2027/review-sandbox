import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function summarise(text: string): Promise<string> {
  const result = await (client as any).chat.complete({
    model: "gpt-4o",
    prompt: "Summarise: " + text,
  });
  return result.text;
}

export async function answer(userQuestion: string): Promise<string> {
  const result = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "system", content: "You are a helpful shop assistant. " + userQuestion }],
  });
  return result.choices[0].message.content ?? "";
}
