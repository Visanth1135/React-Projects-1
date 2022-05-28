import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({items}) => {
  return (
   <div>
   {items.map((item)=>{
       const {id, tfirst, tlast} = item;
       return(
       <article>
       <p>{id + ':' + tfirst + ''+ tlast}</p>
       </article>
   )})}
   </div>
    
  );
};

export default List;