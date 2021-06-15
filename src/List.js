import React from 'react';

const List = ({people}) => {
  return (
    <>
     {
       people.map((person) => {
         const {id, name, age, image, city, country } = person;
         return (
           <article key = {id} className ="person">
             <img src ={image} alt = {name}/>
             <div>
               <h4> {name} </h4>
               <p> {age} years  from {city}, {country}</p>
             </div>

           </article>
         );

       } )
     }
    </>
  );
};

export default List;
