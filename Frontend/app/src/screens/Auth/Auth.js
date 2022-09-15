import { View, Text } from 'react-native'
import React from 'react'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  import { styles } from "./styles";
  import { useSelector, useDispatch } from 'react-redux'

export default function Auth() {

    const {container} = styles;
    const state = useSelector((state) => state)

    console.log(state)


    GoogleSignin.configure({
        webClientId:'196301290702-h80qt9mtpeoc1tddqttj83r5725ud27a.apps.googleusercontent.com',
        offlineAccess: true,
    })
    

console.log(container)
    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo)
        } catch (error) {
        console.log(error)
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };



  return (
    <View style={{...container,padding:10}}>
       <GoogleSigninButton
             style={{ width: "100%", height: 60 ,marginTop:10}}
             size={GoogleSigninButton.Size.Wide}
             color={GoogleSigninButton.Color.Light}
            onPress={signIn}
            />
    </View>
  )
}