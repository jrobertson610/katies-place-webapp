import React from "react";

import Chinos from "../assets/black-chinos.jpg";
import Polo from "../assets/black-polo.jpg";
import Tanktop from "../assets/black-tank-top.jpg";
import Shorts from "../assets/denim-shorts.jpg";
import Hat from "../assets/white-hat.jpg";
import Shirt from "../assets/white-shirt.jpg";
import Jeans from "../assets/womens-jeans.jpg";
import Flannel from "../assets/yellow-flannel.jpg";

const Inventory = () => {
  return (
    <div
      name="inventory"
      className="w-full h-full bg-[#FAEBAD] flex justify-center items-center p-4 pt-[100px]"
    >
      <div>
        <div className=" max-w-[1200px] mx-auto px-[30px] h-full sm:h-screen">
          <div className="sm:text-center pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#EB4F31]">
              Inventory
            </h1>
            {/* Container */}
            <div className="m-w-[1200px] m-auto flex flex-col justify-center w-full h-full">
              <div className="w-full h-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 bg-[#FAEBAD]">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
                  <img
                    className="pt-12 w-20 mx-auto pb-4"
                    src={Chinos}
                    alt="Mens black chinos"
                  />
                  <p className=" py-[60px] text-l font-medium inline mx-6">
                    Men's Black Chinos
                  </p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
                  <img
                    className="pt-12 w-20 mx-auto pb-4"
                    src={Polo}
                    alt="Mens black Scambia polo shirt"
                  />
                  <p className=" py-[60px] text-l text-center font-medium inline mx-6">
                    Men's Black Polo Shirt
                  </p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
                  <img
                    className="pt-12 w-20 mx-auto pb-4"
                    src={Tanktop}
                    alt="Womens black tank top"
                  />
                  <p className=" py-[60px] text-l text-center font-medium inline mx-6">
                    Women's Tank Top
                  </p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
                  <img
                    className="pt-12 w-20 mx-auto pb-4"
                    src={Shorts}
                    alt="Womens denim shorts"
                  />
                  <p className=" py-[60px] text-l text-center font-medium inline mx-6">
                    Women's Denim Shorts
                  </p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
                  <img
                    className="pt-12 w-20 mx-auto pb-4"
                    src={Hat}
                    alt="White unisex hat with navy blue logo"
                  />
                  <p className=" py-[60px] text-l text-center font-medium inline mx-6">
                    White Hat
                  </p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
                  <img
                    className="pt-12 w-20 mx-auto pb-4"
                    src={Shirt}
                    alt="White Oversized T-Shirt"
                  />
                  <p className=" py-[60px] text-l text-center font-medium inline mx-6">
                    White T-Shirt
                  </p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
                  <img
                    className="pt-12 w-20 mx-auto pb-4"
                    src={Flannel}
                    alt="Mens yellow flannel"
                  />
                  <p className=" py-[60px] text-l text-center font-medium inline mx-6">
                    Men's Yellow Flannel
                  </p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pb-8 bg-white">
                  <img
                    className="pt-12 w-20 mx-auto pb-4"
                    src={Jeans}
                    alt="Womens jeans"
                  />
                  <p className=" py-[60px] text-l text-center font-medium inline mx-6">
                    Women's Jeans
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
