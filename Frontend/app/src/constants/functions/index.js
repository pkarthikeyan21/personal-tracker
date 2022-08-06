import {  ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
//export const url ='http://192.168.3.147:5000/api';
// export const url ='http://192.168.43.168:5000/api';

export const url = '';

export const localStorageSetItem = async(label,value)=>{
    await AsyncStorage.setItem(label,value);
}


export const localStorageGetItem = async(label)=>{
    const data = await AsyncStorage.getItem(label);
    return await data;
}

export const localStorageRemoveItem = async(label)=>{
    await AsyncStorage.removeItem(label);
}


export function showToast(data) {
    ToastAndroid.show(data, ToastAndroid.SHORT);
}

export const errorResponseMessage = (err) =>{
        if(err.response){
            if(err.response.data && err.response.data.success == false){
            showToast(err.response.data.error)
            }
        }else if(err.request){
            showToast('No Internet')
        }else{
            showToast('Something Went Wrong'+err)
        }
}

export const postBodyRequestwithBTN = async(url,route,data,token) =>{
    const res =  await axios.post(url+route,data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        }
      });
        if(res.status == 200 && res.status <= 499){
         return await res.data;
        }else{
            let errResponse = await res.json()
            throw new Error(errResponse.error);
        }
}

export const getBodyRequestwithoutTN = async(url,route,data) =>{
    const res =  await axios.get(url+route,data)
        if(res.status >= 200 && res.status <= 499){
         return await res.data;
        }else{
            let errResponse = await res.json()
            throw new Error(errResponse.error);
        }
}

export const postBodyRequestwithoutTN = async(url,route,data) =>{
    const res =  await axios.post(url+route,data)
        if(res.status >= 200 && res.status <= 499){
         return await res.data;
        }else{
            let errResponse = await res.json()
            throw new Error(errResponse.error);
        }
}

export const displaySuccessResponseMsg = (res) =>{
    if(res && res.success && res.message){
        showToast(res.message);
    }
}

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const token = localStorageGetItem('token');