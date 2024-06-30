import DesktopUI from "./_components/DesktopUI";
import MobileUI from "./_components/MobileUI";
import TabletUI from "./_components/TabletUI";

const todaysTopics = [
  {
    label: "limit",
    completed: true,
  },
  {
    label: "continuity",
    completed: false,
  },
  {
    label: "differentiability",
    completed: false,
  },
  {
    label: "electromagnetic induction",
    completed: false,
  },
  {
    label: "chemical bonding",
    completed: false,
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="hidden xl:block h-full">
        <DesktopUI todaysTopics={todaysTopics} />
      </div>

      <div className="h-full hidden md:block xl:hidden md:pb-4">
        <TabletUI todaysTopics={todaysTopics} />
      </div>

      <div className="h-full md:hidden">
        <MobileUI todaysTopics={todaysTopics} />
      </div>
    </>
  );
};

export default Dashboard;
