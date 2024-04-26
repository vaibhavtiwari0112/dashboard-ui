import React from "react";

const RightSideComponent = () => {
  return (
    <div className="bg-white w-96">
      <h1 className="font-bold text-md mx-3 mt-2">Todays Highlights (14)</h1>
      <p className="text-sm font-light text-gray-400 mx-3">19 Mar 2024</p>
      <div className="flex flex-row">
        <div className="border-gray-300 border-solid border-2 mx-3 h-28 mt-3 w-44">
          <p className="text-sm font-light text-gray-800 mx-3">Income</p>
          <p className="text-green-400 text-xl m-2">10000 CAD</p>
          <p className="font-light text-gray-800 mx-3">2 Payments Received</p>
        </div>
        <div className="border-gray-300 border-solid border-2 mx-3 h-28 mt-3 w-44">
          <p className="text-sm font-light text-gray-800 mx-3">Expenses</p>
          <p className="text-red-400 text-xl m-2">10000 CAD</p>
          <p className="font-light text-gray-800 mx-3">2 Payments Paid</p>
        </div>
      </div>
      <h1 className="font-bold text-md mx-3 mt-8">Completed Activities (14)</h1>
      <div className="border-gray-600 border-solid border-2 mx-3 h-14 p-2 mt-3 w-80">
        <p className="text-sm font-light text-gray-800 mx-3">
          Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325
        </p>
      </div>
      <div className="border-gray-600 border-solid border-2 mx-3 h-14 w-80">
        <p className="text-sm font-light text-gray-800 mx-3">
          Aman (Driver) Picked Up goods at Location_Name for Load No.
          I-I-AAA-1325
        </p>
      </div>
      <div className="border-gray-600 border-solid border-2 mx-3 h-14 w-80">
        <p className="text-sm font-light text-gray-800 mx-3">
          Load No. I-I-AAA-1325 will start added by Gurpreet Singh
        </p>
      </div>
      <h1 className="font-bold text-md mx-3 mt-8">Scheduled Activities (14)</h1>
      <div className="border-gray-600 border-solid border-2 mx-3 h-14 p-2 mt-3 w-80">
        <p className="text-sm font-light text-gray-800 mx-3">
          Gurpreet Singh (Dispatch team) has created Load No. I-I-AAA-1325
        </p>
      </div>
      <div className="border-gray-600 border-solid border-2 mx-3 h-14 w-80">
        <p className="text-sm font-light text-gray-800 mx-3">
          Aman (Driver) Picked Up goods at Location_Name for Load No.
          I-I-AAA-1325
        </p>
      </div>
      <div className="border-gray-600 border-solid border-2 mx-3 h-14 w-80">
        <p className="text-sm font-light text-gray-800 mx-3">
          Load No. I-I-AAA-1325 will start added by Gurpreet Singh
        </p>
      </div>
    </div>
  );
};

export default RightSideComponent;
