const Contact = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Send a message to us!</h1>
      <form onSubmit={formHandler} className="pt-12	flex flex-col w-6/12 m-auto">
        <input
          placeholder="Name"
          className="h-12 py-0 px-4 mb-8 rounded-md border-2 border-solid border-yellow-900"
        />
        <input
          placeholder="Email"
          className="h-12 py-0 px-4 mb-8 rounded-md border-2 border-solid border-yellow-900"
        />
        <input
          placeholder="Subject"
          className="h-12 py-0 px-4 mb-8 rounded-md border-2 border-solid border-yellow-900"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="p-4 mb-8 rounded-md border-2 border-solid border-yellow-900"
        ></textarea>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
