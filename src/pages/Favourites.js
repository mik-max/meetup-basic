import { useContext } from "react";
import FavouritesContext from '../store/Favourites-context';
import MeetUpList from '../componets/meetups/MeetupList';
import (useContext)
function Favourites(){
    const favouriteCtx = useContext(FavouritesContext);
    let content;
    if(favouriteCtx.totalFavourites === 0){
        content = <p>You have no favourites yet</p>
    }else{
        content = <MeetUpList meetups = {favouriteCtx.favourites} />
    }
    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    )
}
export default Favourites;