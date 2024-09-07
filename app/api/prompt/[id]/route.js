import { Connecttodb } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, { params }) => {
  try {
    await Connecttodb();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "failed to get prompt" }), {
      status: 500,
    });
  }
};

export const PATCH = async (req, { params }) => {
    try {
        await Connecttodb();

        const { prompt: updatedPrompt, tag: updatedTag } = await req.json();
        const updatedDocument = await Prompt.findByIdAndUpdate(
            params.id,
            {
                prompt: updatedPrompt,
                tag: updatedTag,
            },
            { new: true }
        );
        if (!updatedDocument) {
            return new Response(JSON.stringify({ error: "Prompt not found" }), {
                status: 404,
            });
        }
        return new Response(JSON.stringify(updatedDocument), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "failed to update prompt" }), {
            status: 500,
        });
    }
};

export const DELETE = async (req, { params }) => {
  try {
    await Connecttodb();
    const prompt = await Prompt.findByIdAndDelete(params.id);
    if (!prompt) {
        return new Response(JSON.stringify({ error: "Prompt not found" }), { status: 404 });
      }
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "failed to delete prompt" }), {
      status: 500,
    });
  }
};
