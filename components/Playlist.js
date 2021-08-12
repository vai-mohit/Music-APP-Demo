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
import { Audio } from 'expo-av';
import {audioPlaylist} from './Home'


export default class Home extends React.Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
  };
  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true,
      });

      this.loadAudio();
    } catch (e) {
      console.log(e);
    }
  }
  async loadAudio() {
    const { currentIndex, isPlaying } = this.state;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: audioPlaylist[currentIndex].uri,
      };

      const status = {
        shouldPlay: isPlaying,
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      await playbackInstance.loadAsync(source, status, false);
      this.setState({ playbackInstance });
    } catch (e) {
      console.log(e);
    }
  }

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;

    await playbackInstance.unloadAsync();
    currentIndex == 0
      ? (currentIndex = audioPlaylist.length - 1)
      : (currentIndex -= 1);
    this.setState({
      currentIndex,
    });
    this.loadAudio();
  };

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;

    await playbackInstance.unloadAsync();
    currentIndex < audioPlaylist.length - 1
      ? (currentIndex += 1)
      : (currentIndex = 0);
    this.setState({
      currentIndex,
    });
    this.loadAudio();
  };

  renderFileInfo() {
    const { playbackInstance, currentIndex } = this.state;
    return (
      <View style={styles.trackInfo}>
        <Text style={[styles.trackInfoText, styles.largeText]}>
          {audioPlaylist[currentIndex].title}
        </Text>
        <Text style={[styles.trackInfoText, styles.smallText]}>
          {audioPlaylist[currentIndex].author}
        </Text>
      </View>
    );
  }

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
        <View style={styles.container}>
          <Image
            style={styles.albumCover}
            source={{
              uri: audioPlaylist[this.state.currentIndex].imageSource,
            }}
          />
          <View>{this.renderFileInfo()}</View>
          <View style={styles.controls}>
            <TouchableOpacity
              style={styles.control}
              onPress={this.handlePreviousTrack}>
              <Ionicons name="ios-chevron-back" size={48} color="orange" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.control}
              onPress={this.handlePlayPause}>
              {this.state.isPlaying ? (
                <Ionicons name="ios-pause" size={70} color="orange" />
              ) : (
                <Ionicons name="ios-play-circle" size={70} color="orange" />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.control}
              onPress={this.handleNextTrack}>
              <Ionicons
                name="ios-chevron-forward"
                size={48}
                color="orange"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 10,
    flex: 0.5,
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
  container: {
    
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 9.5,
  },
  albumCover: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  trackInfo: {
    paddingTop: 40,
  },
  trackInfoText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    color: 'black',
  },
  largeText: {
    fontSize: 22,
    fontWeight: 'Bold',
  },
  smallText: {
    fontSize: 16,
  },
  control: {
    margin: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',

    flex: 10,
    justifyContent: 'center',
  },
});
