import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

interface MainProps {
}

const Main: React.FC<MainProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/routing">
            <IonLabel>Routing</IonLabel>
          </IonItem>
          <IonItem routerLink="/dynamic-routes">
            <IonLabel>Dynamic Routes</IonLabel>
          </IonItem>
          <IonItem routerLink="/multiple-tabs">
            <IonLabel>Multiple Tabs</IonLabel>
          </IonItem>
          <IonItem routerLink="/dynamic-tabs">
            <IonLabel>Dynamic Tabs</IonLabel>
          </IonItem>
          <IonItem routerLink="/nested-outlet">
            <IonLabel>Nested Outlet</IonLabel>
          </IonItem>
          <IonItem routerLink="/nested-outlet2">
            <IonLabel>Nested Outlet 2</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Main;