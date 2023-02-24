import Header from "@/modules/Header/Header";
import Navbar from "../modules/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div>
        <div>
          <div>
            <h4>HTML</h4>
            <div className="w-96 bg-gray-400 h-5"><div></div></div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
