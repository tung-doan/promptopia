import { Connecttodb } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  //không thể trực tiếp sử dụng req.body để lấy dữ liệu từ request body như trong các framework khác (ví dụ: Express).
  //sử dụng await req.json() để parse dữ liệu JSON từ body của request.
  const { userId, prompt, tag } = await req.json();
  try {
    await Connecttodb();
    const newprompt = await new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    await newprompt.save();
    return new Response(JSON.stringify(newprompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Failed to create prompt" }), {
      status: 500,
    });
  }
};
