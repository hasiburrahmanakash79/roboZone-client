import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  return (
    <div className="my-8 px-2">
      <div
        className="text-center mb-5"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text-2xl md:text-4xl my-2 font-semibold">Category of Items</h1>
        <p>
          Here is an overview of some types of <br /> robots that every
          manufacturer should know.
        </p>
      </div>
      <Tabs>
        <TabList>
          <Tab>Industrial</Tab>
          <Tab>Remote Control</Tab>
          <Tab>AI Robot</Tab>
          <Tab>Robotic Car</Tab>
        </TabList>

        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
