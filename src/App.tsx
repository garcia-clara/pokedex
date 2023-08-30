import { FC, useContext } from "react";
import {
   AiFillCaretDown,
   AiFillCaretLeft,
   AiFillCaretRight,
   AiFillCaretUp,
   AiFillMinusCircle,
   AiFillPlusCircle,
} from "react-icons/ai";
import PokemonSprites from "./components/pokemon-sprites";
import PokemonStats from "./components/pokemon-stat";
import PokemonTypes from "./components/pokemon-types";
import { PokemonContext } from "./context/PokemonContext";
import PokedexHeaderLayout from "./layouts/pokedex-header-layout";

const App: FC = (): JSX.Element => {
   /* 
      - On peut pas destructurer car data peut être nul
      - C'est préciser dans le createContext ligne 10
      - On met tout à null pour pas avoir de problème
   */
   const data = useContext(PokemonContext);

   // si on a pas de data c'est que ça charge
   if (!data) {
      return <>Loading</>;
   }

   // on destructure tout
   const { pokemon, pokemonSpecies, setPkmId, PkmId } = data;

   return (
      <>
         <div className="flex justify-center mt-4 font-pokemon">
            <div className="w-[80rem] h-[55rem] bg-red-700 rounded-xl flex">
               <div className="w-1/2 h-full border-r-2">
                  <PokedexHeaderLayout />

                  <PokemonSprites
                     sprite={pokemon?.sprites.other["official-artwork"].front_default}
                  />

                  <div className="px-24 flex justify-between">
                     <div className="w-70">
                        <div className="rounded-t-lg bg-red-600 flex gap-3 text-white p-2 border-white border-2">
                           <div className="font-bold">N° {pokemon?.id}</div>
                           <div className="uppercase">{pokemon?.name}</div>
                        </div>
                        <div className="rounded-b-lg bg-white p-2">
                           <p>{pokemonSpecies?.genera[7].genus}</p>
                        </div>
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
                     </div>
                  </div>
               </div>

               <div className="w-1/2 h-full">
                  <div className="bg-black border-white border-2 text-white m-14 p-4 rounded-lg">
                     {pokemonSpecies?.flavor_text_entries[0].flavor_text}
                  </div>

                  <PokemonStats stats={pokemon?.stats} />

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

                  <PokemonTypes types={pokemon?.types} />
               </div>
            </div>
         </div>
      </>
   );
};
export default App;
