import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="h-screen bg-hero-image bg-cover bg-center bg-no-repeat bg-fixed text-white flex flex-col items-center">
        <Navbar />
        <div className="z-0 fixed h-screen w-full flex flex-col gap-0 justify-center items-center font-bold -mt-20">
          <span className="text-[250px] uppercase">smk</span>
          <span className="text-[100px] uppercase -mt-28">15 години</span>
          <span className="text-[60px] uppercase -mt-8">експертен опит</span>
        </div>
      </div>

      <div className="relative z-10 h-screen bg-[#69a7b4] bg-cover bg-center bg-no-repeat bg-fixed"></div>
    </>
  );
}

export default App;
