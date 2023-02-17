import React from 'react';
//import { data } from './data';

// const state = {
//   data : data,
//   searchfield: '',
// }

// old src `https://robohash.org/${id}?200x200`//`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72y9i7dVgSRTjwICYMBmvE1zwJwYVPkarGCWJpaJgWVOspVpocueXAmwd9Z4LuV4A1wTNvLqX9dcqhWVt7gisZzzUYWO-dmsF9E_JiUqUMAMygaf7EiPF60_xU6rl0A_TjbQeci&source=gbs_api`

const App = ({email, id, name, pages, author, language}) =>{
  return(
    <div className="bg-light-gray tc dib br3 ma3 pa2 grow bw2 shodow-5">
      <img alt='robots' src={`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72y9i7dVgSRTjwICYMBmvE1zwJwYVPkarGCWJpaJgWVOspVpocueXAmwd9Z4LuV4A1wTNvLqX9dcqhWVt7gisZzzUYWO-dmsF9E_JiUqUMAMygaf7EiPF60_xU6rl0A_TjbQeci&source=gbs_api`}></img>

      <div>
        <h1>{name}</h1>
        <h2>{language}</h2>
        <h2>{pages} Page</h2>
      </div>
    </div>
  );
}

export default App;


// video 13 must be repeated

// oreview 
//https://books.google.com/books/content?id={id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72y9i7dVgSRTjwICYMBmvE1zwJwYVPkarGCWJpaJgWVOspVpocueXAmwd9Z4LuV4A1wTNvLqX9dcqhWVt7gisZzzUYWO-dmsF9E_JiUqUMAMygaf7EiPF60_xU6rl0A_TjbQeci&source=gbs_api