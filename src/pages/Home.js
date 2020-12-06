import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../components/Header/SmallHeader";
import ProductList from "../components/Product/ProductList";
import LargeHeader from "../components/Header/LargeHeader";

const Home = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Hunt" />
      <IonContent color="medium" fullscreen>
        <LargeHeader title="Hunt" />
        <br></br>
        <ProductList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
