function SearchBar({handleSubmit, setName, name}) {
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input onChange={(event) => setName((event.target.value).toLowerCase())} value={name} type="text" className='text-center text-lg py-4 px-4 border-solid border-2 border-rose-400 rounded-md outline-none' placeholder='Search by name' />
        <button className='bg-rose-400 hover:bg-rose-500 px-8 py-4 mt-5 text-md rounded-full text-white uppercase font-bold'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar