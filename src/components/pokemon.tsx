import { FC, useState, useEffect } from 'react'


const Pokemon: FC = (): JSX.Element => {
    
    const [Pokemon, setPokemon] = useState<Array<any>>([])

    const getPokemon = async (): Promise<void> => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=252&limit=272')
        const data: {results: Array<any>} = await response.json()

        data.results.forEach(async (poke: {name: string, url: string}): Promise<void> => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}/`)
            const data = await response.json()
            setPokemon((curr: any) => [...curr, data])
        })
    }

      useEffect(() => {
        getPokemon()
      }, [])

      // ici
      console.log(Pokemon);
      
    
    return (
    <>
          <div className='flex gap-4 flex-wrap'>
            {Pokemon.map((onePkm)=> (
                <div>
                    <div><img src={onePkm.sprites['front_default']} alt="ok" /></div>
                    <div>Name : {onePkm.name}</div>
                    <div>ID : {onePkm.id}</div>
                </div>
            ))}
        </div>
    </>
    )
}

export default Pokemon