import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubCategory from "./SubCategory";

const Category = () => {
  const [allData, setAllData] = useState([]);

  const [industrial, setIndustrial] = useState(true);
  const [remote, setRemote] = useState(false);
  const [ai, setAi] = useState(false);
  const [car, setCar] = useState(false);

  const url = "https://robot-world-server.vercel.app/allToys";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, []);

  const filterData = allData.filter((item) => {
    if (industrial) {
      return item.category === "Industrial";
    }
    if (remote) {
      return item.category === "Remote control";
    }
    if (ai) {
      return item.category === "AI Robot";
    }
    if (car) {
      return item.category === "Robotic Car";
    }
  });
  const categoryData = filterData.slice(0, 4);

  return (
    <div className="my-8 px-2">
      <div
        className="text-center mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text-2xl md:text-4xl my-2 font-semibold">
          Category of Items
        </h1>
        <p>
          Here is an overview of some types of <br /> robots that every
          manufacturer should know.
        </p>
      </div>
      <Tabs
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <TabList className="text-center">
          <Tab
            onClick={() => {
              setIndustrial(true);
              setRemote(false);
              setCar(false);
              setAi(false);
            }}
          >
            Industrial
          </Tab>
          <Tab
            onClick={() => {
              setIndustrial(false);
              setRemote(true);
              setCar(false);
              setAi(false);
            }}
          >
            Remote Control
          </Tab>
          <Tab
            onClick={() => {
              setIndustrial(false);
              setRemote(false);
              setCar(false);
              setAi(true);
            }}
          >
            AI Robot
          </Tab>
          <Tab
            onClick={() => {
              setIndustrial(false);
              setRemote(false);
              setCar(true);
              setAi(false);
            }}
          >
            Robotic Car
          </Tab>
        </TabList>
        <hr />
        {/* Category items  */}
        <TabPanel>
          <div className="grid lg:grid-cols-4 gap-5 p-3 rounded-2xl">
            {categoryData.map((robots) => (
              <SubCategory key={robots._id} robots={robots}></SubCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-4 gap-5 p-3 rounded-2xl">
            {categoryData.map((robots) => (
              <SubCategory key={robots._id} robots={robots}></SubCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-4 gap-5 p-3 rounded-2xl">
            {categoryData.map((robots) => (
              <SubCategory key={robots._id} robots={robots}></SubCategory>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-4 gap-5 p-3 rounded-2xl">
            {categoryData.map((robots) => (
              <SubCategory key={robots._id} robots={robots}></SubCategory>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
