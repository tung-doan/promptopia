import Feed from '@components/Feed'

const Home = () => {
  return (
    <div>
      <section className="w-full flex flex-center flex-col" >
        <h1 className = 'head_text text-center'>DISCOVER AND SHARE 
        <br className = 'max-md:hidden'></br>
        <span className = 'orange_gradient text-center'>AI-Powered Prompts</span>
        </h1>
        <p className = 'desc text-center'>
          Promptopia is an open source platform for sharing AI-generated prompts.
        </p>
        <Feed />
      </section>
    </div>
  );
};

export default Home;
