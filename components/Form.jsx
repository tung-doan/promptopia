import Link from "next/link";
import { useRouter } from "next/router";

const Form = ({ type, post, setpost, submitting, handlersubmit }) => {
  return (
    <section className="w-full flex flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} POST</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world.
      </p>
      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handlersubmit}
        
      >
        <span className="font-satoshi font-semibold text-base text-gray-700">
          YOUR AI PROMPT
        </span>
        <textarea
          className="form_textarea"
          placeholder="write your prompt here ..."
          onChange={(e) => setpost({ ...post, prompt: e.target.value })}
        ></textarea>
        <label className="font-satoshi font-semibold text-base text-gray-700">
          TAG
          <span className="font-normal">
            {" "}
            (#product, #webdevelopment, ....)
          </span>
          <input
            placeholder="#tag"
            className="form_input"
            required
            onChange={(e) => setpost({ ...post, tag: e.target.value })}
          ></input>
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">Cancel</Link>
          <button type="submit" className="font-semibold text-white px-4 py-1.5 text-sm bg-orange-400 rounded-full" disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
