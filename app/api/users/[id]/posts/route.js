import { Connecttodb } from "@utils/database"
import Prompt from "@models/prompt"

export const GET = async (req, {params}) => {
try{
    Connecttodb();
    const userId = params.id;
    const user = await Prompt.find({creator: userId}).populate("creator");
    return new Response(JSON.stringify(user), {status: 200});
}catch(error){
    return new Response(JSON.stringify({error: "Failed to get prompt"}), {status: 500});
}
}