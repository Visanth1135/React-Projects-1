import React from 'react'
import  {CartState}  from '../FilterSection/context';

const Filter = () => {
    const {filterstate, filterdispatch}=CartState();
    console.log(filterstate)
  return (
    <div className='filter-box'>
    <h3>Filters</h3>
    <button onClick={()=>filterdispatch({type:'BRAND',payload:'Nike'})} disabled={filterstate.filter.includes('Sketchers')}>Nike</button>
    <button onClick={()=>filterdispatch({type:'BRAND',payload:'Sketchers'})} disabled={filterstate.filter.includes('Nike')}>Sketchers</button>
    <button onClick={()=>filterdispatch({type:'COLOUR',payload:'black'})} disabled={filterstate.filter.includes('white') || filterstate.filter.includes('violet')}>Black</button>
    <button onClick={()=>filterdispatch({type:'COLOUR',payload:'white'})} disabled={filterstate.filter.includes('black') || filterstate.filter.includes('violet')}>White</button>
    <button onClick={()=>filterdispatch({type:'COLOUR',payload:'violet'})} disabled={filterstate.filter.includes('white') || filterstate.filter.includes('black')}>Violet</button>
    <button onClick={()=>filterdispatch({type:'SIZE',payload:'S'})} disabled={filterstate.filter.includes('M') || filterstate.filter.includes('L')}>Small</button>
    <button onClick={()=>filterdispatch({type:'SIZE',payload:'M'})} disabled={filterstate.filter.includes('S') || filterstate.filter.includes('L')}>Medium</button>
    <button onClick={()=>filterdispatch({type:'SIZE',payload:'L'})} disabled={filterstate.filter.includes('S') || filterstate.filter.includes('M')}>Large</button>
    
    </div>
  )
}

export default Filter