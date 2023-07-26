import goals from "../assets/8.jpg";

const Company = () => {
  return (
    <div className="text-white grid grid-cols-1 lg:grid-cols-2  max-w-[1240px] mx-auto px-4">
      <div>
        <h2 className="p-4 border-b border-gray-600 mt-20 mb-4 text-3xl font-bold text-[#00df9a]">
          Our Goals
        </h2>
        <p className="font-semibold text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt fuga?
        </p>
      </div>
      <div>
        <img src={goals} alt="/" className="w-[700px] mx-auto" />
      </div>
    </div>
  );
};

export default Company;
