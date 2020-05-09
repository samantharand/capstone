import Menu from './components/Menu';
import StreetArtMap from './streetart/StreetArtMap'
import Home from './home'
import React, { useState, useEffect } from 'react';
import Login from './loginregister/Login'
import Register from './loginregister/Register'
import { IonApp, IonRouterOutlet, IonSplitPane, IonHeader } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')




  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet>
            <Redirect from="/" to="/home" exact />
            <Route path="/home" component={Home} exact />
            <Route path="/map" component={StreetArtMap} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
