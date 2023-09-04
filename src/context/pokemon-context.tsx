import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { PkmProps, PkmSpecies } from "../types/interface";

interface PokemonContextProps {
   pkmId: number;
   setPkmId: Dispatch<SetStateAction<number>>;
   pokemon: PkmProps | undefined;
   pokemonSpecies: PkmSpecies | undefined;
}

export const PokemonContext = createContext<PokemonContextProps>({
   pkmId: 1,
   pokemon: undefined,
   pokemonSpecies: undefined,
   setPkmId: () => {},
});

interface ContextPokemonProviderProps {
   children: ReactNode;
}

export const ContextPokemonProvider: FC<ContextPokemonProviderProps> = ({ children }) => {
   const [pkmId, setPkmId] = useState<number>(1);
   const [pokemon, setPokemon] = useState<PkmProps>();
   const [pokemonSpecies, setPokemonSpecies] = useState<PkmSpecies>();

   const getPokemon = async (): Promise<void> => {
      setPokemon(await useFetch(`https://pokeapi.co/api/v2/pokemon/${pkmId}`));
   };

   const getPokemonSpecies = async (): Promise<void> => {
      setPokemonSpecies(await useFetch(`https://pokeapi.co/api/v2/pokemon-species/${pkmId}/`));
   };

   useEffect(() => {
      getPokemon();
      getPokemonSpecies();
   }, [pkmId]);

   return (
      <PokemonContext.Provider value={{ pkmId, setPkmId, pokemon, pokemonSpecies }}>
         {children}
      </PokemonContext.Provider>
   );
};

export default ContextPokemonProvider;
