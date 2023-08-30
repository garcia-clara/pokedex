import { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import { PkmProps, PkmSpecies } from "../types/interface";
import { useFetch } from "../hook/useFetch";

interface PokemonContextProps {
   pokemon: PkmProps | null | undefined;
   pokemonSpecies: PkmSpecies | null | undefined;
   setPkmId: Dispatch<SetStateAction<number>>;
   PkmId: number;
}

export const PokemonContext = createContext<PokemonContextProps>({
   // @ts-ignore
   pokemon: {},
   // @ts-ignore
   pokemonSpecies: {},
   setPkmId: () => {},
   pkmId: 1,
});

interface ContextPokemonProps {
   children: ReactNode;
}

export const ContextPokemon: FC<ContextPokemonProps> = ({ children }) => {
   const [pokemon, setPokemon] = useState<PkmProps | null>();
   const [PkmId, setPkmId] = useState<number>(1);
   const [pokemonSpecies, setPokemonSpecies] = useState<PkmSpecies>();

   const getPokemon = async (): Promise<void> => {
      const data: PkmProps = await useFetch(`https://pokeapi.co/api/v2/pokemon/${PkmId}`);
      setPokemon(data);
   };

   const getPokemonSpecies = async (): Promise<void> => {
      const data: PkmSpecies = await useFetch(
         `https://pokeapi.co/api/v2/pokemon-species/${PkmId}/`
      );
      setPokemonSpecies(data);
   };

   /* 
      - PkmId dans le tableau de dépendance
      - Pour relancer les fonctions quand on change de pokemon
   */
   useEffect(() => {
      getPokemon();
      getPokemonSpecies();
   }, [PkmId]);

   return (
      <PokemonContext.Provider value={{ pokemon, pokemonSpecies, setPkmId, PkmId }}>
         {children}
      </PokemonContext.Provider>
   );
};
