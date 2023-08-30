import { FC } from "react";

const PokedexHeaderLayout: FC = (): JSX.Element => {
   return (
      <div className="w-100% p-8 border-b-2 flex items-center">
         <div className="mr-8 rounded-full bg-cyan-500 w-20 h-20 border-white border-4"></div>
         <div className="rounded-full bg-red-500 w-8 h-8"></div>
         <div className="rounded-full ml-5 bg-yellow-400 w-8 h-8 "></div>
         <div className="rounded-full w-[4.5rem] h-[4.5rem]">
            <img src="../green.gif" alt="" />
         </div>
      </div>
   );
};

export default PokedexHeaderLayout;
