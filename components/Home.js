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
import { animePlaylist } from './Anime';
import { kpopPlaylist } from './Kpop';
import { bollywoodPlaylist } from './Bollywood';
import { hollywoodPlaylist } from './Hollywood';
import {legPlaylist} from './Legends';
import {ostPlaylist} from'./OST';

export let audioPlaylist = kpopPlaylist.slice();

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
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

        <View style={styles.body}>
          <TouchableOpacity
            onPress={() => {
              audioPlaylist = animePlaylist.slice();
              this.props.navigation.navigate('Playlist');
            }}
            style={styles.art}
            android_ripple={{ color: 'green', borderless: true }}>
            <Image
              source={{
                uri:
                  'https://static.tvtropes.org/pmwiki/pub/images/rsz_naruto.png',
              }}
              style={styles.image}
            />
            <Text style={styles.textItem}>ANIME</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              audioPlaylist = kpopPlaylist.slice();

              this.props.navigation.navigate('Playlist');
            }}
            style={styles.art}
            android_ripple={{ color: 'green', borderless: true }}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sq95TLSpnJNpnzVOJtg91PX-J8fHJPkg0g&usqp=CAU',
              }}
              style={styles.image}
            />
            <Text style={styles.textItem}>K-POP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { audioPlaylist = bollywoodPlaylist.slice();
              this.props.navigation.navigate('Playlist')}}
            style={styles.art}
            android_ripple={{ color: 'green', borderless: true }}>
            <Image
              source={{
                uri:
                  'https://i.cdn.newsbytesapp.com/images/l37220210424184951.png',
              }}
              style={styles.image}
            />
            <Text style={styles.textItem}>HINDI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { audioPlaylist = hollywoodPlaylist.slice();
              this.props.navigation.navigate('Playlist')}}
            style={styles.art}
            android_ripple={{ color: 'green', borderless: true }}>
            <Image
              source={{
                uri:
                  'https://th.bing.com/th/id/R.303f351b056783142829487e00fc5abf?rik=FY6HUg7U12DXbA&riu=http%3a%2f%2fmedia3.s-nbcnews.com%2fi%2fMSNBC%2fComponents%2fVideo%2f201707%2ftdy_concert_sheeran_galway_170706.jpg&ehk=MnH%2booOkb0kqtjHk4qLY5pDWsDwKlFgYwoGiH2i6X6g%3d&risl=&pid=ImgRaw',
              }}
              style={styles.image}
            />
            <Text style={styles.textItem}>ENGLISH</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { audioPlaylist = ostPlaylist.slice();
              this.props.navigation.navigate('Playlist')}}
            style={styles.art}
            android_ripple={{ color: 'green', borderless: true }}>
            <Image
              source={{
                uri:
                  'https://i.scdn.co/image/ab67616d0000b2735de9fd504506b6729741ae76',
              }}
              style={styles.image}
            />
            <Text style={styles.textItem}>ORIGINAL SOUNDTRACK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { audioPlaylist = legPlaylist.slice();
              this.props.navigation.navigate('Playlist')}}
            style={styles.art}
            android_ripple={{ color: 'green', borderless: true }}>
            <Image
              source={{
                uri:
                  'https://images.bonanzastatic.com/afu/images/1b33/645f/0776_6329749297/KISS_Group_White_Room_w_Logo.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.textItem}>20th CENTURY LEGENDS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    flex: 0.1,
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

  art: {
    marginTop: 20,
    borderWidth: 3,
    height: 180,
    width: '46%',
    borderRadius: 8,
    margin: 5,
    borderColor:'orange'
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    justifyContent: 'center',
  },
  body: {
    flex: 9.9,
    margin: 10,
    flexDirection: 'row',

    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  main: {
    flex: 10,
  },
  textItem: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
