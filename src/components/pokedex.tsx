import { FC, useState, useEffect } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

interface PkmProps {
   types: Array<{ type: { name: string; url: string } }>;
   id: number;
   name: string;
   sprites: {
      other: {
         "official-artwork": {
            front_default: string;
         };
      };
   };
   stats: Array<{
      base_stat: number;
      stat: {
         name: string;
      };
   }>
}

interface PkmSpecies {
   flavor_text_entries: Array<{ flavor_text: string }>;
   genera : Array<{genus : string}>
}

const Pokedex: FC = (): JSX.Element => {
   const [Pokemon, setPokemon] = useState<PkmProps | null>(null);
   const [PokemonSpecies, setPokemonSpecies] = useState<PkmSpecies | null>(null);
   const [PkmId, setPkmId] = useState<number>(6);

   const getPokemon = async (): Promise<void> => {
      const response = await fetch(
         `https://pokeapi.co/api/v2/pokemon/${PkmId}`
      );
      const data = await response.json();
      setPokemon(data);
   };

   const getPokemonSpecies = async (): Promise<void> => {
      const response = await fetch(
         `https://pokeapi.co/api/v2/pokemon-species/${PkmId}/`
      );
      const data = await response.json();
      setPokemonSpecies(data);
   }

   useEffect(() => {
      getPokemon();
      getPokemonSpecies();
   }, []);

   const typeColor = (type: string | undefined) => {
      switch (type) {
         case "fire":
            return "red";
         case "water":
            return "blue";
         case "ice":
            return "teal";
         case "grass":
            return "green";
         case "bug":
            return "green";
         case "flying":
         case "normal":
         case "steel":
            return "grey";
         case "electric":
            return "yellow";
         case "dark":
         case "poison":
         case "ghost":
         case "psychic":
            return "purple";
         case "rock":
         case "fighting":
         case "ground":
            return "orange";
         case "fairy":
         case "dragon":
            return "pink";
      }
   };

   return (
      <>
         <>
            <div className="flex justify-center mt-4">
               <div className="w-[80rem] h-[55rem] bg-red-800 rounded-xl flex">
                  <div className="w-1/2 h-full border-r-2">
                     <div className="w-100% p-8 border-b-2 flex items-center">
                        <div className="mr-8 rounded-full bg-cyan-500 w-20 h-20 border-white border-4"></div>
                        <div className="rounded-full bg-red-500 w-8 h-8"></div>
                        <div className="rounded-full ml-5 bg-yellow-400 w-8 h-8 "></div>
                        <div className="rounded-full w-[4.5rem] h-[4.5rem]"><img src="../public/green.gif" alt="" /></div>
                     </div>
                     <div className="flex justify-center items-center py-12">
                        <div className="w-fit bg-slate-100 rounded-lg">
                           <div className="flex justify-center p-4">
                              <div className="mr-6 rounded-full bg-red-600 w-4 h-4 border-white border-2"></div>
                              <div className="rounded-full bg-red-600 w-4 h-4 border-white border-2"></div>
                           </div>
                           <img
                              className="bg-black mx-12 w-[24rem]"
                              src={
                                 Pokemon?.sprites.other["official-artwork"]
                                    .front_default
                              }
                              width=""
                              alt=""
                           />
                           <div className="p-4">
                              <div className="ml-12 rounded-full bg-red-600 w-4 h-4 border-white border-2"></div>
                           </div>
                        </div>
                     </div>
                     <div className="px-24 flex justify-between">
                        <div className="w-60">
                           <div className="rounded-t-lg bg-red-800 flex gap-3 text-white p-2 border-white border-2">
                              <div className="font-bold">N°{Pokemon?.id}</div>
                              <div className="capitalize">{Pokemon?.name}</div>
                           </div>
                           <div className="rounded-b-lg bg-white p-2">
                              <p>{PokemonSpecies?.genera[7].genus}</p>
                           </div>
                           <div></div>
                        </div>
                        <div className="flex justify-center gap-5 ">
                           <button onClick={() => setPkmId(PkmId - 1)}>
                              <AiFillCaretLeft fontSize="4em" />
                           </button>
                           <button onClick={() => setPkmId(PkmId + 1)}>
                              <AiFillCaretRight fontSize="4em" />
                           </button>
                        </div>
                     </div>
                  </div>

                  <div className="w-1/2 h-full">
                     <div className="bg-black border-white border-2 text-white m-14 p-4 rounded-lg">
                        {PokemonSpecies?.flavor_text_entries[0].flavor_text}
                     </div>

                     <div className="grid grid-cols-6 grid-rows-2 bg-sky-600 border-black border-2 p-4 m-14 rounded-lg">
                        <div className="uppercase font-bold text-xl">HP</div>
                        <div className="uppercase font-bold text-xl">ATT</div>
                        <div className="uppercase font-bold text-xl">DEF</div>
                        <div className="uppercase font-bold text-xl">SA</div>
                        <div className="uppercase font-bold text-xl">SD</div>
                        <div className="uppercase font-bold text-xl">
                           {Pokemon?.stats[5].stat.name}
                        </div>

                        <div className="text-xl">
                           {Pokemon?.stats[0].base_stat}
                        </div>
                        <div className="text-xl">
                           {Pokemon?.stats[1].base_stat}
                        </div>
                        <div className="text-xl">
                           {Pokemon?.stats[2].base_stat}
                        </div>
                        <div className="text-xl">
                           {Pokemon?.stats[3].base_stat}
                        </div>
                        <div className="text-xl">
                           {Pokemon?.stats[4].base_stat}
                        </div>
                        <div className="text-xl">
                           {Pokemon?.stats[5].base_stat}
                        </div>
                     </div>

                     <div className="flex gap-4 m-14">
                        <div className="border-white border-2 text-white p-4 rounded-lg w-1/2 uppercase" style={{ backgroundColor: typeColor(Pokemon?.types[0].type.name) }}>
                           {Pokemon?.types[0].type.name}
                        </div>
                        <div className="border-white border-2 text-white p-4 rounded-lg w-1/2 uppercase" style={{ backgroundColor: typeColor(Pokemon?.types[1].type.name) }}>
                           {Pokemon?.types[1].type.name !== null ? Pokemon?.types[1].type.name : null}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </>
      </>
   );
};
export default Pokedex;
