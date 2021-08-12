import React from 'react';
import { Text, View, Image ,StyleSheet } from 'react-native';

export default class Intro extends React.Component {
  
componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Home'), 3000);
  }
  render(){
  return (
    <View style={styles.body}>
      <Image
        source={{uri: "https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6fe747d420a2b53c7cdb8a7f94562ef1"}}
        style={styles.logo}
      />
      <Text style={styles.intro}>Songs That You 🧡 </Text>

    </View>
  );}
}

const styles = StyleSheet.create({
  body:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },

  logo: {
    height:200,
    width:200
  },
  intro: {
    fontSize:30,
    color:'orange'
  },
 
});