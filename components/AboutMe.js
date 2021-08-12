import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Ionicons name="ios-albums-outline" size={24} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon2}
            onPress={() => this.props.navigation.navigate('Playlist')}>
            <MaterialCommunityIcons
              name="playlist-music"
              size={24}
              color="orange"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon3}
            onPress={() => this.props.navigation.navigate('AboutMe')}>
            <Ionicons name="person" size={24} color="orange" />
          </TouchableOpacity>
        </View>
        <View style={styles.data}>
          <Image
            source={{
              uri:
                'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/6fe747d420a2b53c7cdb8a7f94562ef1',
            }}
            style={styles.logo}
          />
          
          <Text style={styles.member1}>
            DEVELOPERS
          </Text>
          <Text style={styles.member2}>
            {'\n'}
            Mohit Vaishnav {'\n'}
            Ayush K Saxena{'\n'}
            Kritarth Singh {'\n'}
            Nishchay Singh {'\n'}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    justifyContent:'center',
    flex:10
  },
  header: {
    flexDirection: 'row',
    margin: 10,
    flex: 2,
  },
  logo: {
    width: 100,
    height: 100,
    marginHorizontal: 120,
    marginVertical: 50,
  },
  
  member1: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 24,
  },
  icon: {
    flex: 3.4,
    alignItems: 'center',
  },
  icon2: {
    flex: 3.4,
    alignItems: 'center',
  },
  icon3: {
    flex: 3.4,
    alignItems: 'center',
  },
  member2: {
    color: 'black',
    fontSize: 15,
  },
  data: {
    
    alignItems: 'center',
    flex:8
  },
});
