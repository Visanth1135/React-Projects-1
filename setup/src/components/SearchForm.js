import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useGlobalContext()
  
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <h3>Search Results for {searchTerm}...</h3>
        </div>
      </form>
    </section>
  )
}