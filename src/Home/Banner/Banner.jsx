import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/dk4KzwR/banner1.png"
          className="w-full md:rounded-xl"
        />
        <div className="absolute flex md:rounded-xl items-center h-full left-0 right-0 bg-gradient-to-r from-[#0000006c] to-[#0000006c]">
          <div className="text-center mx-auto w-2/3 text-white">
            <h1 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:text-xl py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-sm btn-outline btn-warning">
            <FaArrowLeft />
          </a>
          <a href="#slide2" className="btn btn-circle btn-sm btn-outline btn-warning">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/GW4J2Vf/banner2.png"
          className="w-full md:rounded-xl"
        />
        <div className="absolute flex md:rounded-xl items-center h-full left-0 right-0 bg-gradient-to-r from-[#0000006c] to-[#0000006c]">
          <div className="text-center mx-auto w-2/3 text-white">
            <h1 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:text-xl py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-sm btn-outline btn-warning">
            <FaArrowLeft />
          </a>
          <a href="#slide3" className="btn btn-circle btn-sm btn-outline btn-warning">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/ZR95R2T/banner3.png"
          className="w-full md:rounded-xl"
        />
        <div className="absolute flex md:rounded-xl items-center h-full left-0 right-0 bg-gradient-to-r from-[#0000006c] to-[#0000006c]">
          <div className="text-center mx-auto w-2/3 text-white">
            <h1 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:text-xl py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-sm btn-outline btn-warning">
            <FaArrowLeft />
          </a>
          <a href="#slide4" className="btn btn-circle btn-sm btn-outline btn-warning">
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/r5m9qDK/banner4.png"
          className="w-full md:rounded-xl"
        />
        <div className="absolute flex md:rounded-xl items-center h-full left-0 right-0 bg-gradient-to-r from-[#0000006c] to-[#0000006c]">
          <div className="text-center mx-auto w-2/3 text-white">
            <h1 className="text-3xl md:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="md:text-xl py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-sm btn-outline btn-warning">
            <FaArrowLeft />
          </a>
          <a href="#slide1" className="btn btn-circle btn-sm btn-outline btn-warning">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
