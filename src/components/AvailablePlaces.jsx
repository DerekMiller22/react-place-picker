import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setPlaces(resData.places);
    }
    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={places}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
