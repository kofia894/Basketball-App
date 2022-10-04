import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const LargeCard = () => {
     return ( 
          <>
               <div className="flex space-x-14 overflow-hidden shrink-0 p-10 h-64 bg-gradient-to-tr from-[#f09376] to-[#ed3248] w-9/12 md:w-2/5 rounded-xl ">
                    <div className=" text-center  md:text-3xl text-lg font-bold space-y-24 md:space-y-360">
                         
                         <p className="">PG13 TO STAY</p>

                         <div className="flex md:space-x-4">
                              <p className="text-sm font-light">Read </p>
                              <HiOutlineArrowNarrowRight className="md:text-xl  font-light" />
                         </div>

                    </div>

                    <div className="shrink-0  h-64 -mt-10 w-36 lg:w-56  grayscale  overflow-hidden">
                          <img className="object-contain h-full w-full " src="/img/pg13trans2.png" /> 
                    </div>
               </div>
          </>
      );
}
 
export default LargeCard;