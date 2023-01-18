import Styles from './Layout.module.css';
import MainNavigation from './MainNavigation';
function Layout(props){
    return(
        <div>
            <MainNavigation />
            <main className = {Styles.main}>{props.children}</main>
        </div>
    )
}
export default Layout;