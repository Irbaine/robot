import React from 'react';
import App from './App';

const CardList = ({data}) => { // data or props both working // data is already called on <Cardlist data/> 
    // if(true){
    //     throw new Error ('Noooo');
    // }  
    
    return (
        <div>
            { // use this instead of {cardComponent} and storing the data on const

        data.map((user, i) => {
        return (
        <App 
        key={i} 
        //id={data[i].id} 
        id= {data[i].id}
        //name={data[i].name} 
        name= {data[i].volumeInfo.title}
        //username={data[i].username}
        username= {data[i].volumeInfo.publishedDate}
        //email={data[i].email} 
        email= {data[i].volumeInfo.publishedDate}
        pages= {data[i].volumeInfo.pageCount}
        language= {data[i].volumeInfo.language}

        />

        )}
            )}

        </div>
    ) 
        }

export default CardList;