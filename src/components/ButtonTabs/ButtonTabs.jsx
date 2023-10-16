import React, { useState } from "react";
import { ManualMeasurement, AutoMeasurement } from "../../assets";

const ButtonTabs = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const handleTabOne = (e) => {
    e.preventDefault();
    setCurrentTab(1);
  };

  const handleTabTwo = (e) => {
    e.preventDefault();
    setCurrentTab(2);
  };

  console.log(currentTab);

  return (
    <section className="bg-slate-100 sm:px-16 px-8 sm:py-24 py-12">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-lime-500 p-1 px-3 rounded-full">
          <button
            className={`rounded-full p-1 px-3 ${
              currentTab === 1 ? "bg-blue-800 text-white" : "text-red-500"
            }`}
            onClick={handleTabOne}
          >
            Custom clothing
          </button>
          <button
            className={`rounded-full p-1 px-4 ${
              currentTab === 2 ? "bg-blue-800 text-white" : "text-red-500"
            }`}
            onClick={handleTabTwo}
          >
            Ready to wear
          </button>
        </div>

        <div className="flex flex-row items-center justify-center mt-5 gap-10">
            <div className={`${currentTab === 1 ? "block" : "hidden"} relative`}>
                <img src={AutoMeasurement} alt="auto" width="500px" height="40px" />

                <div className="absolute w-[412px] top-56 right-10 text-white">
                    <h2 className="font-kotori-rose font-bold text-xl text-center">Auto size Engine</h2>
                    <p className="font-avenir text-base font-normal text-center">Use body data like (height and weight) to predict your customers’ measurements. Highly accurate and tested with over 15k people</p>
                </div>
            </div>
 

            <div className={`${currentTab === 1 ? "block" : "hidden"} relative`}>
                <img
                    src={ManualMeasurement}
                    alt="auto"
                    width="500px"
                    height="40px"
                />
                <div className="absolute w-[412px] top-56 right-10 text-white">
                    <h2 className="font-kotori-rose font-bold text-xl text-center">Auto size Engine</h2>
                    <p className="font-avenir text-base font-normal text-center">Use body data like (height and weight) to predict your customers’ measurements. Highly accurate and tested with over 15k people</p>
                </div>
            </div>


            <div className={`${currentTab === 2 ? "block" : "hidden"} relative`}>
                <img
                    src={ManualMeasurement}
                    alt="auto"
                    width="500px"
                    height="40px"
                />
                <div className="absolute w-[412px] top-56 right-10 text-white">
                    <h2 className="font-kotori-rose font-bold text-xl text-center">Auto size Engine</h2>
                    <p className="font-avenir text-base font-normal text-center">Use body data like (height and weight) to predict your customers’ measurements. Highly accurate and tested with over 15k people</p>
                </div>
            </div>
        </div>


      </div>
    </section>
  );
};

export default ButtonTabs;
