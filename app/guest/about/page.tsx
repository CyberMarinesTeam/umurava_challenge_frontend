import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import React from "react";

const Page = () => {
  return (
    <main>
      <NavBar />
      <main>
        <section className="flex flex-row space-x-[60px] py-[80px] items-center justify-center">
          <div className="flex flex-col space-y-[20px]">
            <h2 className="text-[#2b71f0] text-[32px] font-bold">Our Story</h2>
            <div className="flex flex-col space-y-[20px] w-[529px]">
              <p className="text-[18px] leading-[30px] text-[#2b3338]">
                With 3 years of experience matching African digital talents to
                local and global job markets, we still remain with a big number
                of jobs that remain unfilled due to the lack of experienced
                African Talents.
              </p>
              <p className="text-[18px] leading-[30px] text-[#2b3338]">
                Driven by our mission to place skilled and professional digital
                talent, we created Skills Challenges as a project-based learning
                solution for talents to gain real-world experience, solve
                problems, and build portfolios so that they become ready for
                global job markets.{" "}
              </p>
            </div>
          </div>
          <video className="w-auto h-[390px] rounded-[20px]" autoPlay loop>
            <source src="/umuravaVideo.mp4" type="video/mp4"></source>
          </video>
        </section>
        <section className="flex flex-col pb-[50px] bg-[#F9FAFB] items-center pt-[50px] justify-center">
          <h2 className="text-[#03192E] leading-[48px] text-[40px] w-[700px] text-center font-bold">
            Why we are solving this problem
          </h2>
          <div className="flex  flex-col items-center justify-center w-[1072px]  space-y-[20px]">
            <div className="bg-[#2B71F0] mt-[60px] space-y-[30px] rounded-[10px] w-[1072px] p-[48px] flex flex-col">
              <img
                src="/bagLogo.webp"
                draggable="false"
                className="w-[60px] rounded-[10px] h-auto"
                alt="bag logo"
              />
              <h2 className="font-bold text-white text-[24px]">
                Bridging the Experience Gap
              </h2>
              <p className="text-white text-[16px] w-[829px]">
                Many talents acquired theoretical knowledge and are rejected
                from jobs because they lack work experience and are not able to
                put in actions what they acquired in the schools.
              </p>
            </div>
            <div className="flex flex-row space-x-[20px]">
              <div className="bg-[#2B71F0] space-y-[30px]  rounded-[10px] w-full p-[48px] flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold text-white text-[24px]">
                  Bridging Education and Employment
                </h2>
                <p className="text-white text-[16px] w-[400px]">
                  Traditional education doesn’t always prepare talents for the
                  demands of the tech and digital economy and we are providing
                  in-demand skills through Skills Challenges.
                </p>
              </div>
              <div className="bg-[#2B71F0]  space-y-[30px] rounded-[10px] w-full p-[48px] flex flex-col">
                <img
                  src="/bagLogo.webp"
                  draggable="false"
                  className="w-[60px] rounded-[10px] h-auto"
                  alt="bag logo"
                />
                <h2 className="font-bold text-white text-[24px]">
                  Preparing Talents for Global Job Markets
                </h2>
                <p className="text-white text-[16px]">
                  We are ensuring that African talents shine globally, and
                  that’s why we are equipping them with global technical
                  experience and standout globally.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-row space-x-[60px] py-[80px] items-center justify-center">
          <div className="flex flex-col space-y-[20px]">
            <h2 className="text-[#041738] w-[586px] leading-[38.4px] text-[32px] font-bold">
              Skills Challenges Program is built on the Umurava Talent
              Marketplace Platform
            </h2>
            <div className="flex flex-col space-y-[20px] w-[529px]">
              <p className="text-[18px] leading-[30px] text-[#2b3338]">
                A Project-based Learning Solution aimed at providing young and
                senior talents with an opportunity to showcase their skills to
                real-world projects and challenges from our partner companies
                and organizations.
              </p>
              <p className="text-[18px] leading-[30px] text-[#2b3338]">
                Umurava Skills Challenges enable young talents to build a
                portfolio and experience that increases their readiness to
                access job opportunities and projects.
              </p>
            </div>
            <button className="bg-[#2B71f0] mt-[40px] w-[171px] h-[46px]  text-[16px] rounded-[5px] font-semibold text-white">
              Get Started
            </button>
          </div>
          <img
            src="/cardPhoto4.webp"
            alt="photo"
            className="h-[456px] w-auto"
          />
        </section>
      </main>
      <Footer />
    </main>
  );
};

export default Page;
