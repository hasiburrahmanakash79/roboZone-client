
const About = () => {

  return (
    <div className="md:flex justify-between items-center p-5 gap-10">
      <div className="md:w-1/2 mb-3">
        <img src="https://i.ibb.co/6gYhYsf/gold-robot-logo.png" className="w-32" alt="" />
        <h1 className="text-3xl border-l-8 border-x-red-500 px-3 mb-4">About us</h1>
        <p>
          Welcome to RobotWorld website! We are a leading robotics company
          dedicated to revolutionizing industries through the development of
          state-of-the-art robotic systems and solutions. With a team of highly
          skilled engineers, researchers, and innovators, we are committed to
          pushing the boundaries of what is possible in the field of robotics. <br />
          Our goal is to harness the power of cutting-edge technologies, such as
          artificial intelligence, machine learning, and advanced sensors, to
          create robots that are intelligent, versatile, and adaptable.
        </p>
        
      </div>
      <div className="md:w-1/2">
        <img
          className="rounded-md shadow-xl"
          src="https://i.ibb.co/NNQJ9fH/clebquyte000alb08snq2m2my-2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
