import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import SmallHeader from '../../components/Header/SmallHeader';
import LargeHeader from '../../components/Header/LargeHeader';

const News = () => {
    return (
        <IonPage>
            <SmallHeader title="Newsy"/>
            <IonContent fullscreen>
                <LargeHeader title="Newsy"/>
            </IonContent>
        </IonPage>
    )
}

export default News;