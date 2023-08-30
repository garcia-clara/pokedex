import { FC } from "react";
import { useTypeColor } from "../hook/useTypeColor";

interface IPokemonTypesProps {
   types:
      | Array<{
           type: {
              name: string;
           };
        }>
      | undefined;
}

const PokemonTypes: FC<IPokemonTypesProps> = ({ types }): JSX.Element => {
   return (
      <div className="flex gap-4 m-14">
         {/* Oon vérifie si types n'est pas undefined */}
         {types &&
            types.map(({ type }, index) => (
               <div
                  key={index}
                  className="flex justify-center border-black border-4 text-white p-4 rounded-lg w-1/2 uppercase"
                  style={{
                     backgroundColor: useTypeColor(type.name),
                  }}
               >
                  <p className="text-3xl font-extrabold">{type.name}</p>
               </div>
            ))}
      </div>
   );
};

export default PokemonTypes;
