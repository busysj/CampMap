import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBasedData } from "../../store/basedDataSlice";

const BasedList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios(
      "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=DBx1v7ble2j4MNFWznYeeM5wQYthH5QTVeMOTXn5H%2FxvLP7Bbaa8IZvKxHq8r0425fyEMXvrs32EFDRIALvz5A%3D%3D&numOfRows=4000&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json"
    )
      .then((response) => {
        dispatch(addBasedData(response.data.response.body.items.item));
        console.log(response.data.response.body.items.item);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
};
export default BasedList;
