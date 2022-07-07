import React from "react";
import { useSelector } from "react-redux";
import MapPage from "./MapPage";
import Spinner from "../components/tools/Spinner";

const MapPage2 = () => {
  const campData = useSelector((state) => state.basedDataSlice.basedData);

  return <>{campData.length === 0 ? <Spinner /> : <MapPage />}</>;
};

export default MapPage2;
