import Section from "../templates/Section/Section";
import style from "./infos.module.scss";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import MapStyle from "./MapStyle";

const center = { lat: 49.84640501614155, lng: 3.28532369816711 };
const apiKey =
  process.env.GMAP_API || "AIzaSyDbCf9rd6UXkL_DGwsb-5b_IN7i7Y3bULo";
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};
const options = {
  styles: MapStyle,
};

export default function Infos() {
  const contactRef = useRef();
  const [map, setMap] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const Map = () => {
    if (loadError) return "error";
    if (!isLoaded) return "loading";

    return (
      <div className={style.map}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={15}
          center={center}
          onLoad={onMapLoad}
          options={options}
        >
          <Marker
            position={{ lat: 49.84640501614155, lng: 3.28532369816711 }}
          />
        </GoogleMap>
      </div>
    );
  };

  const Content = () => {
    return (
      <article className={style.content}>
        <h1>Nos informations</h1>
        <ul>
          <li>Adresse</li>
          <li>Ville, Code Postale</li>
          <li>Email</li>
          <li>Téléphone</li>
        </ul>
      </article>
    );
  };

  return (
    <Section>
      <div className={style.wrapper}>
        <Content />
        <Map />
      </div>
    </Section>
  );
}
