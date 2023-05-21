import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const CustomerReview = () => {
  return (
    <div className="px-2">
      <div>
        <h1 className="text-center text-2xl md:text-4xl font-semibold my-10">
          Our Happy Client
        </h1>
      </div>
      <Marquee>
        <div className="mb-5">
          I recently purchased a robot from this website and I am extremely
          satisfied with my purchase. The ordering process was smooth, and the
          robot was delivered promptly. I highly recommend this website for
          anyone looking to buy a robot.
        </div>
      </Marquee>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          className="text-center border rounded-xl p-7"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl">Harrison Lorenza</h4>
            <p>
              <small>CALIFORNIA</small>{" "}
            </p>
            <div className="flex justify-center gap-1 text-yellow-600 my-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              I recently purchased a robot from this website and I am extremely
              satisfied with my purchase. The ordering process was smooth, and
              the robot was delivered promptly. I highly recommend this website
              for anyone looking to buy a robot.
            </p>
          </div>
        </div>
        <div
          className="text-center border rounded-xl p-7"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://hips.hearstapps.com/hmg-prod/images/spider-man-no-way-home-tom-holland-1-1629769756.jpg?resize=980:*" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl">Mark Josef</h4>
            <p>
              <small>Australia</small>{" "}
            </p>
            <div className="flex justify-center gap-1 text-yellow-600 my-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              I recently purchased a robot from this website and I am extremely
              satisfied with my purchase. The ordering process was smooth, and
              the robot was delivered promptly. I highly recommend this website
              for anyone looking to buy a robot.
            </p>
          </div>
        </div>
        <div
          className="text-center border rounded-xl p-7"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl">Liya Rahana</h4>
            <p>
              <small>INDIA</small>{" "}
            </p>
            <div className="flex justify-center gap-1 text-yellow-600 my-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              I recently purchased a robot from this website and I am extremely
              satisfied with my purchase. The ordering process was smooth, and
              the robot was delivered promptly. I highly recommend this website
              for anyone looking to buy a robot.
            </p>
          </div>
        </div>
        <div
          className="text-center border rounded-xl p-7"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://wallpapercave.com/wp/wp5711043.jpg" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl">Hasan Sofiya</h4>
            <p>
              <small>Bangladesh</small>{" "}
            </p>
            <div className="flex justify-center gap-1 text-yellow-600 my-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>
              I recently purchased a robot from this website and I am extremely
              satisfied with my purchase. The ordering process was smooth, and
              the robot was delivered promptly. I highly recommend this website
              for anyone looking to buy a robot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
