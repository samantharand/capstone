import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { mapOutline, mapSharp, bookmarkOutline, heartOutline, heartSharp, paperPlaneOutline, paperPlaneSharp, homeSharp, homeOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Map',
    url: '/map',
    iosIcon: mapOutline,
    mdIcon: paperPlaneSharp
  },
  // {
  //   title: 'Favorites',
  //   url: '/page/Favorites',
  //   iosIcon: heartOutline,
  //   mdIcon: heartSharp
  // }
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

// <IonList id="labels-list">
//           <IonListHeader>Labels</IonListHeader>
//           {labels.map((label, index) => (
//             <IonItem lines="none" key={index}>
//               <IonIcon slot="start" icon={bookmarkOutline} />
//               <IonLabel>{label}</IonLabel>
//             </IonItem>
//           ))}
// </IonList>

const authPages: AppPage[] = [
  {
    title: 'Login',
    url: '/login',
    iosIcon: homeOutline,
    mdIcon: mapSharp
  },
  {
    title: 'Register',
    url: '/register',
    iosIcon: mapOutline,
    mdIcon: paperPlaneSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>APP NAME</IonListHeader>
          <IonNote>tagline baybeeee</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        

        <IonList id="auth-list">
          {authPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
