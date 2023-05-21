const Seller = () => {
  return (
    <div className="p-2">
      <div className="text-center my-10">
        <h1 className="text-3xl font-semibold">Top Rated seller</h1>
        <p className="my-4 w-3/4 md:w-1/2 mx-auto">
          These sellers prioritize customer satisfaction and go the extra mile
          to ensure a positive buying experience. They are responsive to
          inquiries, address concerns promptly, and provide helpful and accurate
          information.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="p-5 border text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" />
            </div>
          </div>
            <h1 className="font-semibold text-2xl">Hasan Masud</h1>
            <p>Top rated seller</p>
        </div>
        <div className="p-5 border text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.mensxp.com/media/content/2018/Mar/life-skills-men-in-their-twenties-must-have1400-1520605506.jpg?w=820&h=540&cc=1" />
            </div>
          </div>
            <h1 className="font-semibold text-2xl">Rashid Anuwer</h1>
            <p>Top rated seller</p>
        </div>
        <div className="p-5 border text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2015/03/10-mens-medium-blonde-hairstyle.jpg?resize=500%2C568&ssl=1" />
            </div>
          </div>
            <h1 className="font-semibold text-2xl">Mohtasim hasan</h1>
            <p>Top rated seller</p>
        </div>
        <div className="p-5 border text-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://s.abcnews.com/images/GMA/chris-evans-gty-ml-230407_1680872228286_mn_4x3_608.jpg" />
            </div>
          </div>
            <h1 className="font-semibold text-2xl">Hisbulla Khan</h1>
            <p>Top rated seller</p>
        </div>
      </div>
    </div>
  );
};

export default Seller;
