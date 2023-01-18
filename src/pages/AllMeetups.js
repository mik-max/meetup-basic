import { useState, useEffect } from "react";
import MeetupList from "../componets/meetups/MeetupList";
function AllMeetupsPage(){
    const [isLoading, setIsLoading] = useState(true)
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://first-react-app-bb5b8-default-rtdb.firebaseio.com/meetups.json').then(response => {
            return response.json();
        }).then(data => {

            const meetups = [];
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
                  
            }
            setIsLoading(false);
            setLoadedMeetups(meetups)
        });
    }, []);
   
    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups = {loadedMeetups} />
        </section>
    );
}
export default AllMeetupsPage;

/* The data returned does not give us array of objects but nested objects and we expect an array, so we created a meetups array and pushed all the objects into it with the help of the javascript spreed operator. Also, we use the useEffects hook so as to break out of an infinite loop. the array pararmeter in the useEffect hook is a "DEPENDANCY" it helps specify conditios for the function parameter to run*/