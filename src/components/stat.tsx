import { FC } from "react";

interface IStatPokemonProps {
   stats: Array<{
      base_stat: number;
      stat: { name: string };
   }>;
}

const Stats: FC<IStatPokemonProps> = ({ stats }): JSX.Element => {
   return (
      <div className="grid grid-cols-6 grid-rows-2 bg-sky-600 border-black border-2 m-14 rounded-lg">
         <div className="uppercase font-bold text-xl border border-black p-4">HP</div>
         <div className="uppercase font-bold text-xl border border-black p-4">ATT</div>
         <div className="uppercase font-bold text-xl border border-black p-4">DEF</div>
         <div className="uppercase font-bold text-xl border border-black p-4">SA</div>
         <div className="uppercase font-bold text-xl border border-black p-4">SD</div>
         <div className="uppercase font-bold text-xl border border-black p-4">SP</div>

         {stats.map(({ base_stat }, i) => (
            <div className="text-xl  border border-black p-4" key={i}>
               {base_stat}
            </div>
         ))}
      </div>
   );
};

export default Stats;
