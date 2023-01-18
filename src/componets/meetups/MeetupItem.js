import {useContext} from 'react';
import Card from '../ui/Card';
import Styles from './MeetupItem.module.css';
import FavouritesContext from '../../store/Favourites-context'
function MeetupItem(props){
  const favouriteCtx = useContext(FavouritesContext);
  const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);
    function toggleFavouritesstatusHandler(){
        if(itemIsFavourite){
            favouriteCtx.removeFavourite(props.id);
        }else{
            favouriteCtx.addFavourite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }
    return(
        <li className = {Styles.item}>
            <Card>
                <div>
                    <img src = {props.image} alt = {props.title} className = {Styles.image} />
                </div>
                <div className = {Styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className = {Styles.actions}>
                    <button onClick = {toggleFavouritesstatusHandler}>{itemIsFavourite? 'Remove from Favourites' : 'Add to Favourites'}</button>
                </div>
            </Card>
        </li>
    );
}
export default MeetupItem;
