import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SubmissionTabs = () => {
  return (
    <div className="px-10 bg-gray-200">
      <Tabs>
        <TabList>
          <Tab>My Queue</Tab>
          <Tab>Archive</Tab>
        </TabList>

        <div className="mt-10 border rounded-md ">
          <TabPanel>
            <h2 className="p-5 bg-white ">Any content 1</h2>
          </TabPanel>
          <TabPanel>
          <h2 className="p-5 bg-white ">Any content 2</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default SubmissionTabs;
