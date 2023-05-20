import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/dk4KzwR/banner1.png"
          className="w-full md:rounded-xl"
        />
        <div className="absolute flex md:rounded-xl items-center h-full left-0 right-0 bg-gradient-to-r from-[#00000091] to-[#00000091]">
          <div className="text-center mx-auto w-2/3 text-white" data-aos="zoom-in">
            <h1 className="text-2xl md:text-6xl font-bold">Industrial Robot</h1>
            <p className="md:text-xl py-5">
              An industrial robot is one that has developed to automate{" "}
              <br /> intensive production tasks such as those required assembly line.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1">
          <a
            href="#slide4"
            className="btn btn-circle btn-sm btn-outline btn-warning"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide2"
            className="btn btn-circle btn-sm btn-outline btn-warning"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/GW4J2Vf/banner2.png"
          className="w-full md:rounded-xl"
        />
        <div className="absolute flex md:rounded-xl items-center h-full left-0 right-0 bg-gradient-to-r from-[#00000091] to-[#00000091]">
          <div className="text-center mx-auto w-2/3 text-white">
            <h1 className="text-2xl md:text-6xl font-bold">
              AI Robot
            </h1>
            <p className="md:text-xl py-5">
            Robotics is a branch of AI, Mechanical Engineering, <br /> and Computer Science for designing and application robots.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1">
          <a
            href="#slide1"
            className="btn btn-circle btn-sm btn-outline btn-warning"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide3"
            className="btn btn-circle btn-sm btn-outline btn-warning"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/ZR95R2T/banner3.png"
          className="w-full md:rounded-xl"
        />
        <div className="absolute flex md:rounded-xl items-center h-full left-0 right-0 bg-gradient-to-r from-[#00000091] to-[#00000091]">
          <div className="text-center mx-auto w-2/3 text-white" data-aos="zoom-in">
            <h1 className="text-2xl md:text-6xl font-bold">
              Remote control
            </h1>
            <p className="md:text-xl py-5">
            A robot that is teleoperated <br /> by any transmitting device, which in most cases is a remote.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1">
          <a
            href="#slide2"
            className="btn btn-circle btn-sm btn-outline btn-warning"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide4"
            className="btn btn-circle btn-sm btn-outline btn-warning"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/r5m9qDK/banner4.png"
          className="w-full md:rounded-xl"
        />
        <div className="absolute flex md:rounded-xl items-center h-full left-0 right-0 bg-gradient-to-r from-[#00000096] to-[#00000096]" >
          <div className="text-center mx-auto w-2/3 text-white" data-aos="zoom-in">
            <h1 className="text-2xl md:text-6xl font-bold">Robotic car</h1>
            <p className="md:text-xl py-5">
            an automobile that is a computer we a need for <br /> human control for driving situations and conditions.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1">
          <a
            href="#slide3"
            className="btn btn-circle btn-sm btn-outline btn-warning"
          >
            <FaArrowLeft />
          </a>
          <a
            href="#slide1"
            className="btn btn-circle btn-sm btn-outline btn-warning"
          >
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
