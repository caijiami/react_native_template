import React from 'react'
import { PixelRatio, Dimensions, } from 'react-native'
import axios from 'axios';

module.exports = {
    size:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width
    },
    pixel:1 / PixelRatio.get(),
    //Fetch
    get: (url,successCallback,failCallback) =>{
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                successCallback(responseJson)
            })
            .catch((error) => {
                failCallback(error)
            })
    },
    post:(url,data,successCallback,failCallback)=> {
        let sendData=JSON.stringify(data);
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
                //'Access-Control-Expose-Headers': 'FooBar'
                'Access-Control-Allow-Credentials': 'true',
            },
            body: sendData
        })
            .then((response) => response.json() )
            .then(successCallback)
            .catch(failCallback);
    },
    getAxios:( url, data, successCallback, failCallback) => {
        axios.get(url,{
            params:data
        })
        .then(successCallback)
        .catch(failCallback);
    },
    postAxios:
        ( url, data, successCallback, failCallback) => {
            axios.post(url,data)
                .then(successCallback)
                .catch(failCallback);
        },
};