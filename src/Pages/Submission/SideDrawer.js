import React from "react";

const SideDrawer = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-gradient-to-tr  from-[#03045e] to-[#d9ef81]" >
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <img className="w-60" src="https://i.ibb.co/zNfXcSZ/Platform-workflow-by-OJSPKP.png" alt="" />
      </div>
    </div>
  );
};

export default SideDrawer;
