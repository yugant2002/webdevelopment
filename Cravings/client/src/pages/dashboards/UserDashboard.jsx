import React, { useState } from "react";
import SideBar from "../../components/userDashboard/SideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrder from "../../components/userDashboard/UserOrders";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex w-full h-[88vh]">
        <div
          className={`bg-(--color-background) duration-400  ${show ? "w-[20%]" : "w-[6%]"}`}
        >
          <SideBar
            active={active}
            setActive={setActive}
            isCollapsed={show}
            setIsCollapsed={setShow} 
          />
        </div>
        <div className="border border-amber-700 duration-400 grow">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "order" && <UserOrder />}
          {active === "transaction" && <UserTransaction />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;