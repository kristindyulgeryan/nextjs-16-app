import Hello from "../../components/hello";

const Home = () => {
  console.log("What type of a component am I?");
  return (
    <main>
      <div className="text-2xl underline bg-amber-500">Welcome to Next.js!</div>
      <Hello />
    </main>
  );
};

export default Home;
