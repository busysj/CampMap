import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBasedData } from '../../store/basedDataSlice';

const BasedList = () => {
  const dispatch = useDispatch();
  const allData = useCallback(async() => {
    try{
      const response = await axios.get(
        "http://api.visitkorea.or.kr/openapi/service/rest/GoCamping/basedList?ServiceKey=DBx1v7ble2j4MNFWznYeeM5wQYthH5QTVeMOTXn5H%2FxvLP7Bbaa8IZvKxHq8r0425fyEMXvrs32EFDRIALvz5A%3D%3D&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json"
      );
        dispatch(addBasedData(response.data.response.body.items.item));
    }
    catch(error){
      console.log(error);
    }
  },[dispatch]);

  useEffect(() => {
    allData();
  },[allData]);
};
export default BasedList;
