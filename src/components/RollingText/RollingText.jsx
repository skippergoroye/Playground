import React from "react";

const RollingText = () => {
  return (
    <section className="bg-red-500 relative w-full max-auto h-[601px] lg:h-[700px] mx-auto sm:px-16 px-6 py-12">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white mt-36">
        <div className="text-center flex flex-col items-center justify-center">

        <div className="flex items-center justify-center">
          <h1 className="text-3xl text-center lg:text-5xl font-bold font-kotori-rose">Simplify your
            <div class="roller">
            <span id="rolltext">tailoring business,<br/>
                payments,<br/>
                measurements,<br/>
              <span id="spare-time">products,</span></span><br/>
              </div>
          </h1>
        </div>


        

        
          

          <h1 className="text-3xl text-center lg:text-5xl font-bold font-kotori-rose mt-2">focus on what matters</h1> 
          <p className="text-white text-sm mt-6 w-[345px] lg:w-[593px] font-avenir">
            With Fitted, any tailor can use our app to manage their business,
            from measurements to customer info and getting new sales
          </p> 
          
          <div className="mt-6">
            <button className="bg-blue-500 w-full p-2 px-20 rounded-lg">Hello</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RollingText;
