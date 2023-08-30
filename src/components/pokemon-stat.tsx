import { FC } from "react";

interface IPokemonStatsProps {
   stats:
      | Array<{
           base_stat: number;
        }>
      | undefined;
}

const PokemonStats: FC<IPokemonStatsProps> = ({ stats }): JSX.Element => {
   return (
      <div className="grid grid-cols-6 grid-rows-2 bg-sky-600 border-black border-2 m-14 rounded-lg">
         <div className="uppercase font-bold text-xl border border-black p-4">HP</div>
         <div className="uppercase font-bold text-xl border border-black p-4">ATT</div>
         <div className="uppercase font-bold text-xl border border-black p-4">DEF</div>
         <div className="uppercase font-bold text-xl border border-black p-4">SA</div>
         <div className="uppercase font-bold text-xl border border-black p-4">SD</div>
         <div className="uppercase font-bold text-xl border border-black p-4">SP</div>

         {/* On vérifie si stats n'est pas undefined */}
         {stats &&
            stats.map((s, i) => (
               <div className="text-xl  border border-black p-4" key={i}>
                  {s.base_stat}
               </div>
            ))}
      </div>
   );
};

export default PokemonStats;
