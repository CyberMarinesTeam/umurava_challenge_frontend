import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  const slides = ["hello1", "hello2", "hello3", "This is a text-based slide!"];
  const courseNames = [
    "UI/UX Design",
    "Data Science",
    "Graphic Design",
    "Data Analysis & Research",
    "Animation",
    "Videography & Photography",
    "AI & Machine Learning",
    "Web3",
    "Digital Marketing & Communications",
  ];
  return (
    <main className="">
      <NavBar />

      <section className="flex pb-[50px]   flex-row items-center justify-center space-x-[10px] mt-[50px] ">
        <div className="flex flex-col space-y-[30px] text-left mt-[60px] w-[570px]">
          <h2 className="text-[#2B71f0] leading-[52.8px] font-bold text-[44px]">
            Build Work Experience through Skills Challenges Program
          </h2>
          <p className="text-[19px] w-[550px] text-gray-700">
            Enhance Your Employability and Accelerate Your Career Growth by
            working on Hands-on projects & Hackathons from various businesses &
            organizations
          </p>
          <button className="bg-[#2B71f0] mt-[40px] w-[201px] h-[56px]  text-[16px] rounded-[9px] font-semibold text-white">
            Get Started
          </button>
        </div>
        <img
          src="/homePagePhoto.webp"
          className="h-[500px] w-auto"
          draggable="false"
          alt="home image"
        />
      </section>
      <section className="flex flex-col space-y-[20px] pb-[50px] bg-[#F9FAFB] items-center pt-[50px] justify-center">
        <h2 className="text-[#03192E] text-[30px] font-bold">
          Experience a New Way of Building Work Experience
        </h2>
        <p className="text-gray-300 text-[13px] w-[580px] text-center">
          Join Skills Challenges Program to accelerate yout career growth and
          become part of Africa's largest workforce of digital professionals{" "}
        </p>
        <div className="flex flex-col w-full px-[200px] space-y-[20px]">
          <div className="bg-[#2B71F0] space-y-[30px] rounded-[10px] w-full p-[30px] flex flex-col">
            <img
              src="/bagLogo.webp"
              draggable="false"
              className="w-[60px] rounded-[10px] h-auto"
              alt="bag logo"
            />
            <h2 className="font-bold text-white text-[17px]">
              Build a Strong Portforio and Hand-On Experience
            </h2>
            <p className="text-white">
              Tackle real-world projects through Challenges and hackathons that
              mirror real world challenges faced by businesses and
              organizations.Therefore, showcase your skills and accomplishments
              to potential employers and clients through a portforio of
              completed projects
            </p>
          </div>
          <div className="flex flex-row space-x-[20px]">
            <div className="bg-[#2B71F0] space-y-[30px]  rounded-[10px] w-full p-[30px] flex flex-col">
              <img
                src="/bagLogo.webp"
                draggable="false"
                className="w-[60px] rounded-[10px] h-auto"
                alt="bag logo"
              />
              <h2 className="font-bold text-white text-[17px]">
                Enhance Your Employment Path
              </h2>
              <p className="text-white">
                Elop the in-demand skills and build a strong portforio to
                increase your chances of landing your dream job or contract
              </p>
            </div>
            <div className="bg-[#2B71F0]  space-y-[30px] rounded-[10px] w-full p-[30px] flex flex-col">
              <img
                src="/bagLogo.webp"
                draggable="false"
                className="w-[60px] rounded-[10px] h-auto"
                alt="bag logo"
              />
              <h2 className="font-bold text-white text-[17px]">
                Earn Recognition and Prizes
              </h2>
              <p className="text-white">
                Earn both Money and knowledge Prizes by participating in various
                contests and competitions by working on real world projects and{" "}
                hackathons from partner companies or organizations
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center p-[70px] justify-center">
        <div className="bg-[url('/cardBg.webp')] text-white bg-cover bg-center h-[200px] space-x-[70px] rounded-[30px] w-[850px] flex flex-row items-center justify-center">
          <div className="grid place-items-center grid-cols-1">
            <span className="font-bold text-[20px]">1</span>
            <span>year</span>
          </div>
          <div className="grid place-items-center grid-cols-1">
            <span className="font-bold text-[20px]">500+</span>
            <span>Challenges Completed</span>
          </div>
          <div className="grid place-items-center grid-cols-1">
            <span className="font-bold text-[20px]">10k+</span>
            <span>users</span>
          </div>
          <div className="grid place-items-center grid-cols-1">
            <span className="font-bold text-[20px]">6+</span>
            <span>Countries</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-[20px] pb-[50px] items-center pt-[50px] justify-center">
        <h2 className="text-[#03192E] text-[30px] w-[700px] text-center font-bold">
          Skills Challenges Cover various in-demand skills and Careers for the
          digital economy{" "}
        </h2>
        <p className="text-gray-300 text-[13px] w-[580px] text-center">
          Explore the projects that various talents are working on{" "}
        </p>
        <div className="flex flex-wrap justify-center gap-[20px] w-[700px] ">
          {courseNames.map((courseName: string, index) => (
            <button
              key={index}
              className="bg-[#f1f1f1] hover:bg-[#2b71f0] rounded-[10px] text-[#657888] p-[14px] transition-all duration-150 hover:text-white"
            >
              {courseName}
            </button>
          ))}
        </div>
        <div className="bg-[#f1f1f1] py-[80px]  px-[50px] w-[1100px] rounded-[20px] grid grid-cols-2 place-items-center">
          {/* <div className="flex flex-col space-y-[40px] items-start">
            <span className="bg-white p-[10px] rounded-[10px]">
              <img
                src="/EmbeddedFinance.webp"
                alt="embedded finance"
                className="h-[40px] w-[40px]"
              />
            </span>
            <p className="font-extralight leading-[30px]">
              Embedded Finance platform and Payroll Management Software{" "}
              Solutions for your organizations and workforce
            </p>
            <span className="flex flex-row space-x-[10px] items-center justify-center">
              <span className="text-[#2b71f0] font-semiBold text-[13px]">
                Learn more
              </span>
              <span className="bg-[#2b71f0] w-[30px] h-[30px] grid place-items-center rounded-full text-white">
                <IoIosArrowRoundForward className="text-[21px]" />
              </span>
            </span>
          </div> */}
          {/* <img src="/computerDashboard.webp" alt="computer" /> */}
          <Carousel slides={slides} />
        </div>
      </section>
    </main>
  );
}
