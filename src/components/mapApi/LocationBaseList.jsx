import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import UseCurrentLocation from "../../hooks/UseCurrentLocation";
import { addLocationData, loadingState } from "../../store/locationDataSlice";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10 * 1, // 10 sec (1000 ms * 60 sec * 1 minute = 60 000ms)
};

const LocationBaseList = () => {
  const dispatch = useDispatch();
  const {location, error} = UseCurrentLocation(geolocationOptions);
  const allData = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/locationBasedList?ServiceKey=DBx1v7ble2j4MNFWznYeeM5wQYthH5QTVeMOTXn5H%2FxvLP7Bbaa8IZvKxHq8r0425fyEMXvrs32EFDRIALvz5A%3D%3D&mapX=${location.longitude}&mapY=${location.latitude}&radius=20000&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`
      );
      dispatch(addLocationData(response.data.response.body.items.item));
      dispatch(loadingState(false));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location]);

  useEffect(() => {
    allData();
  }, [allData]);
};
export default LocationBaseList;
