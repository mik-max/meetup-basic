import Styles from './Card.module.css';
function Card (props){
    return <div className = {Styles.card}>{props.children}</div>
}
export default Card;
/*  The children prop helps hold the content passed between the opening and closing component eg Card component */