import {useContext} from 'react';
import {Link} from 'react-router-dom';
import Styles from './MainNavigation.module.css';
import FavouritesContext from '../../store/Favourites-context'
import React from 'react';
function MainNavigation(){
    const favouriteCtx = useContext(FavouritesContext)
    return(
        <header className = {Styles.header}>
            <div className = {Styles.logo}>React Meetups</div> 
            <nav>
                <ul>
                    <li>
                        <Link to = '/'> All Meetups</Link>
                    </li>
                    <li>
                        <Link to = '/new-meetup'> New  Meetup</Link>
                    </li>
                    <li>
                        <Link to = '/favourites'>Favourites <span className = {Styles.badge}>{favouriteCtx.totalFavourites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;