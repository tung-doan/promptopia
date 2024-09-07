import PrompCard from "./PrompCard";

const MyProfile = ({ name, description, data, handlerEdit, handlerDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
      <span className="blue_gradient">{name}</span>

      </h1>
      <p className="desc text-left">{description}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PrompCard 
          key={post._id}
          post={post}
          handlerEdit={handlerEdit ? () => handlerEdit(post) : undefined}  
          handlerDelete={handlerDelete ? () => handlerDelete(post) : undefined}  
          />
        ))}
      </div>
    </section>
  );
};

export default MyProfile;
