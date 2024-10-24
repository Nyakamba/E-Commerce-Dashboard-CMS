import React from "react";
import BillboardClient from "./components/client";

const BillboradsPage = () => {
  return (
    <div className=" flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboradsPage;
