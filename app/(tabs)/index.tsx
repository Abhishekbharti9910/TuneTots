import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ContentButtonProps {
  label: string;
  color: string;
  onPress: () => void;
}

const ContentButton: React.FC<ContentButtonProps> = ({ label, color, onPress }) => (
  <TouchableOpacity
    style={[styles.circle, { backgroundColor: color }]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const ContentSelectionScreen: React.FC = () => {
  const handlePress = (type: string) => {
    console.log(`Selected ${type}`);
    // Add your navigation or action logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
            {/* Content Area */}
            <View style={styles.content}>
        {/* Decorative elements */}
        <ImageBackground source={{uri: 'https://plus.unsplash.com/premium_vector-1727309324656-aa0fe44b941d?w=356&dpr=2&q=80&h=540&auto=format&fit=crop&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzF8fGNvbmZldHRpfGVufDB8fHx8MTczMjA2NjE4MHwx&ixlib=rb-4.0.3'}}   
      resizeMode="cover" style={styles.confetti}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>What are you up to today</Text>
      </View>

  
      

        {/* Content Buttons */}
        <View style={styles.containerOuter}>
        <View style={styles.innerContainer}>
        <ContentButton
          label="Music"
          color="#FF9838"
          onPress={() => handlePress('music')}
        />
        <ContentButton
          label="Video"
          color="#4B9AFB"
          onPress={() => handlePress('video')}
        />
        <ContentButton
          label="Podcast"
          color="#4CD964"
          onPress={() => handlePress('podcast')}
        />
        </View>
        <View style={styles.innerContainer}>
        <ContentButton
          label="Meme"
          color="#FF3B30"
          onPress={() => handlePress('meme')}
        />
        <ContentButton
          label="Comic"
          color="#FFD60A"
          onPress={() => handlePress('comic')}
        />
        </View>

        </View>
       
          {/* Add random confetti elements here */}

          </ImageBackground>
      </View>
      

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.profilePic} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerOuter: {
    flexDirection: 'row',
    alignItems: 'center',
   justifyContent: "center"
  
  },
  innerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // paddingHorizontal: 16,
    // paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 8,
    
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  confetti: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    width: 140,
    height: 140,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 2, // Sets the thickness of the border
    borderColor: 'black', 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 6,
    borderTopColor: '#ECECEC',

    borderTopLeftRadius: 50, // Rounded top-left corner
    borderTopRightRadius: 50,
  },
  navItem: {
    padding: 10,
  },
  activeNavItem: {
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
  },
  profilePic: {
    width: 24,
    height: 24,
    backgroundColor: '#DDD',
    borderRadius: 12,
  },
});

export default ContentSelectionScreen;