import { FC, useState, useEffect } from "react";
import {
   AiFillCaretUp,
   AiFillCaretDown,
   AiFillCaretRight,
   AiFillCaretLeft,
   AiFillPlusCircle,
   AiFillMinusCircle,
} from "react-icons/ai";

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
   }>;
}

interface PkmSpecies {
   flavor_text_entries: Array<{ flavor_text: string }>;
   genera: Array<{ genus: string }>;
}

const Pokedex: FC = (): JSX.Element => {
   const [Pokemon, setPokemon] = useState<PkmProps | null>(null);
   const [PokemonSpecies, setPokemonSpecies] = useState<PkmSpecies | null>(
      null
   );
   const [PkmId, setPkmId] = useState<number>(1);

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
   };

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
            <div className="flex justify-center mt-4 font-pokemon">
               <div className="w-[80rem] h-[55rem] bg-red-800 rounded-xl flex">
                  <div className="w-1/2 h-full border-r-2">
                     <div className="w-100% p-8 border-b-2 flex items-center">
                        <div className="mr-8 rounded-full bg-cyan-500 w-20 h-20 border-white border-4"></div>
                        <div className="rounded-full bg-red-500 w-8 h-8"></div>
                        <div className="rounded-full ml-5 bg-yellow-400 w-8 h-8 "></div>
                        <div className="rounded-full w-[4.5rem] h-[4.5rem]">
                           <img src="../green.gif" alt="" />
                        </div>
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
                        <div className="w-70">
                           <div className="rounded-t-lg bg-red-600 flex gap-3 text-white p-2 border-white border-2">
                              <div className="font-bold">N° {Pokemon?.id}</div>
                              <div className="uppercase">{Pokemon?.name}</div>
                           </div>
                           <div className="rounded-b-lg bg-white p-2">
                              <p>{PokemonSpecies?.genera[7].genus}</p>
                           </div>
                           <div></div>
                        </div>

                        <div className="grid grid-cols-3 grid-rows-3">
                           <div className="col-start-2 col-end-2 bg-black w-full h-full rounded-t-md">
                              <p className="text-neutral-800">
                                 <AiFillCaretUp fontSize="2em" />
                              </p>
                           </div>
                           <div className="row-start-2 col-start-1 col-end-1 bg-black rounded-l-md">
                              <button onClick={() => setPkmId(PkmId - 1)}>
                                 <p className="text-neutral-800">
                                    <AiFillCaretLeft fontSize="2em" />
                                 </p>
                              </button>
                           </div>
                           <div className="row-start-2 col-start-2 col-end-2 bg-black"></div>
                           <div className="row-start-2 col-start-3 col-end-3 bg-black rounded-r-md">
                              <button onClick={() => setPkmId(PkmId + 1)}>
                                 <p className="text-neutral-800">
                                    <AiFillCaretRight fontSize="2em" />
                                 </p>
                              </button>
                           </div>
                           <div className="row-start-3 col-start-2 col-end-2 bg-black rounded-b-lg">
                              <p className="text-neutral-800">
                                 <AiFillCaretDown fontSize="2em" />
                              </p>
                           </div>

                           <div></div>
                        </div>
                     </div>
                  </div>

                  <div className="w-1/2 h-full">
                     <div className="bg-black border-white border-2 text-white m-14 p-4 rounded-lg">
                        {PokemonSpecies?.flavor_text_entries[0].flavor_text}
                     </div>

                     <div className="grid grid-cols-6 grid-rows-2 bg-sky-600 border-black border-2 m-14 rounded-lg">
                        <div className="uppercase font-bold text-xl border border-black p-4">
                           HP
                        </div>
                        <div className="uppercase font-bold text-xl border border-black p-4">
                           ATT
                        </div>
                        <div className="uppercase font-bold text-xl border border-black p-4">
                           DEF
                        </div>
                        <div className="uppercase font-bold text-xl border border-black p-4">
                           SA
                        </div>
                        <div className="uppercase font-bold text-xl border border-black p-4">
                           SD
                        </div>
                        <div className="uppercase font-bold text-xl border border-black p-4">
                           SP
                        </div>

                        <div className="text-xl  border border-black p-4">
                           {Pokemon?.stats[0].base_stat}
                        </div>
                        <div className="text-xl border border-black p-4">
                           {Pokemon?.stats[1].base_stat}
                        </div>
                        <div className="text-xl border border-black p-4">
                           {Pokemon?.stats[2].base_stat}
                        </div>
                        <div className="text-xl border border-black p-4">
                           {Pokemon?.stats[3].base_stat}
                        </div>
                        <div className="text-xl border border-black p-4">
                           {Pokemon?.stats[4].base_stat}
                        </div>
                        <div className="text-xl border border-black p-4">
                           {Pokemon?.stats[5].base_stat}
                        </div>
                     </div>

                     <div>
                        <div className="flex justify-between mx-16 px-4">
                           <div className="flex gap-2 mt-4">
                              <div>
                                 <AiFillPlusCircle fontSize="2em" />
                              </div>
                              <div>
                                 <AiFillMinusCircle fontSize="2em" />
                              </div>
                           </div>
                           <div className="flex gap-4">
                              <div className="h-6 w-32 rounded-full bg-black"></div>
                              <div className="h-6 w-32 rounded-full bg-black"></div>
                           </div>
                        </div>
                        <div className="flex justify-between mx-16 p-4">
                           <div className="bg-slate-500 rounded-xl flex w-fit text-slate-600">
                              <button onClick={() => setPkmId(PkmId - 1)}>
                                 <div className="p-2 border-r-2 border-gray-600">
                                    <AiFillCaretLeft fontSize="2em" />
                                 </div>
                              </button>
                              <button onClick={() => setPkmId(PkmId + 1)}>
                                 <div className="p-2">
                                    <AiFillCaretRight fontSize="2em" />
                                 </div>
                              </button>
                           </div>
                           <div className="rounded-full h-12 w-12 bg-yellow-500 mr-4"></div>
                        </div>
                     </div>

                     <div className="flex gap-4 m-14">
                        <div
                           className="flex justify-center border-black border-4 text-white p-4 rounded-lg w-1/2 uppercase"
                           style={{
                              backgroundColor: typeColor(
                                 Pokemon?.types[0].type.name
                              ),
                           }}
                        >
                           <p className="text-3xl font-extrabold">
                              {Pokemon?.types[0].type.name}
                           </p>
                        </div>
                        {Pokemon?.types[1].type.name ? (
                           <div
                              className="flex justify-center border-black border-4 text-white p-4 rounded-lg w-1/2 uppercase"
                              style={{
                                 backgroundColor: typeColor(
                                    Pokemon?.types[1].type.name
                                 ),
                              }}
                           >
                              <p className="text-3xl font-extrabold">
                                 {Pokemon?.types[1].type.name !== null
                                    ? Pokemon?.types[1].type.name
                                    : null}
                              </p>
                           </div>
                        ) : null}
                     </div>
                  </div>
               </div>
            </div>
         </>
      </>
   );
};
export default Pokedex;
