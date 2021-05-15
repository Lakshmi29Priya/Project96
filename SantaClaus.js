import React from 'react'
import LottieView from 'lottie-react-native'
import {Image} from 'react-native';
export default class SantaAnimation extends React.Component{
  render(){
    return(
      
<Image style={{
    width:50,
    height:50,
    marginLeft:40
  }}
source={require('../assets/Santa.jpg')}/>

      
    )
  }
}