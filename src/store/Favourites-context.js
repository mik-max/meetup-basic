import {createContext, useState} from 'react';

const FavouritesContext = createContext({
     favourites : [],
     totalFavourites : 0,
     addFavourite :(favouritesMeetup) => {},
     removeFavourite: (meetupId) => {} ,
     itemIsFavourite : (meetupId) => {}
});

export function FavouritesContextProvider(props){
     const [userFavourites,  setUserFavourites] = useState([])
     function addFavouritesHandler(favouriteMeetup){
          setUserFavourites((prevUserFavourite) => {
               return prevUserFavourite.concat(favouriteMeetup)
          });
     }
     function removeFavouritesHandler(meetupId){
          setUserFavourites((prevUserFavourite => {
               return prevUserFavourite.filter(meetup => meetup.id !== meetupId);
          })); 
     }
     function isFavouriteHandler(meetupId){
          return userFavourites.some(meetup => meetup.id === meetupId)
     }
     const context = {
          favourites : userFavourites,
          totalFavourites : userFavourites.length,
          addFavourite : addFavouritesHandler,
          removeFavourite : removeFavouritesHandler,
          itemIsFavourite : isFavouriteHandler
     };
     return <FavouritesContext.Provider value = {context}>
          {props.children}
     </FavouritesContext.Provider>
}
export default FavouritesContext;