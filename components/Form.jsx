

const Form = ({ type, post, setpost, submitting, handlersubmit }) => {
  return (
    <section className="w-full flex flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} POST</span>
      </h1>
      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world.
      </p>
      <Form>
        <span className='font-satoshi font-semibold text-base text-gray-700'>YOUR AI PROMPT</span>
      </Form>
    </section>
  );
};

export default Form;
