 import { useRef } from 'react';
import Card from '../ui/Card';
import Styles from './NewMeetupForm.module.css'; 
function NewMeetupForm(props){
  const titleInputRef =  useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const entereDescription = descriptionInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description: entereDescription
        };
        props.onAddMeetup(meetupData);
        console.log(meetupData);
    }
    return (
        <Card>
            <form className = {Styles.form} onSubmit = {submitHandler}>
                <div className = {Styles.control}>
                    <label htmlFor = "title">Meetup Title</label>
                    <input type = "text" required id = "title" ref= {titleInputRef} />
                </div>
                <div className = {Styles.control}>
                    <label htmlFor = "image">Meetup Image</label>
                    <input type = "url" required id = "image" ref = {imageInputRef} />
                </div>
                <div className = {Styles.control}>
                    <label htmlFor = "address">Meetup Address</label>
                    <input type = "text" required id = "address" ref= {addressInputRef} />
                </div>
                <div className = {Styles.control}>
                    <label htmlFor = "address">Description</label>
                   <textarea id = "description" required rows = '5' ref = {descriptionInputRef}></textarea>
                </div>
                <div className ={Styles.actions} >
                  <button>Add Meetup</button>  
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;
/* useRefs are used for reading what value the user passes into the form. The '.current.value' of a ref variable e.g titleInputRef.current.value; holds the current value of what is passed in*/