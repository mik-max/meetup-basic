import {Route, Switch} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import Favourites from './pages/Favourites';
import NewMeetups from './pages/NewMeetups';
import Layout from './componets/Layout/Layout';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path = '/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path = '/new-meetup'>
          <NewMeetups />
        </Route>
        <Route path = '/favourites'>
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
