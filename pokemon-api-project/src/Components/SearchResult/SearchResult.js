function SearchResult({data, error,}) {
  return (
    <div>
        {error ? (
            <div>
            <p className="my-8 uppercase font-bold text-gray-400">no data was found! please try again</p>
            <img src="https://c.tenor.com/FGfzL8KmagIAAAAM/pokemon-squrtle.gif" alt="pokemon-crying" />
            </div>
        ) : (
            <>
                <img className='my-4 mb-6 w-50 h-50 shadow-lg mx-auto' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`} alt={`${data.name}`}/>
                <h1 className='text-3xl uppercase font-bold'>{data.name}</h1>
                <h1 className='text-lg text-gray-500 uppercase font-medium'>{`weight: ${data.weight/10} kg`}</h1>
            </>
        )}
    </div>
  )
}

export default SearchResult