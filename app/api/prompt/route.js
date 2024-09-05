import { Connecttodb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
  try {
    await Connecttodb();
    const prompt = await Prompt.find().populate("creator");
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to get prompt" }), {
      status: 500,
    });
  }
};
