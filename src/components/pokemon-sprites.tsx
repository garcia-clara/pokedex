import { FC } from "react";

interface IPokemonSpritesProps {
   sprite: string | undefined;
}

const PokemonSprites: FC<IPokemonSpritesProps> = ({ sprite }): JSX.Element => {
   return (
      <div className="flex justify-center items-center py-12">
         <div className="w-fit bg-slate-100 rounded-lg">
            <div className="flex justify-center p-4">
               <div className="mr-6 rounded-full bg-red-600 w-4 h-4 border-white border-2"></div>
               <div className="rounded-full bg-red-600 w-4 h-4 border-white border-2"></div>
            </div>
            <img className="bg-black mx-12 w-[24rem]" src={sprite} width="" alt="" />
            <div className="p-4">
               <div className="ml-12 rounded-full bg-red-600 w-4 h-4 border-white border-2"></div>
            </div>
         </div>
      </div>
   );
};

export default PokemonSprites;
