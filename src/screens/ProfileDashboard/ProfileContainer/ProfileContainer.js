import React, { useContext } from 'react';
import { TouchableOpacity, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import UserContext from '../../../context/User';
import { useNavigation } from '@react-navigation/native';
import { TextDefault, BackHeader } from '../../../components';

// Import your profile image
import profileImage from '../../../assets/profileimage.jpg';
import { colors } from '../../../utils';

function ProfileContainer(props) {
  const navigation = useNavigation();
  const { profile, isLoggedIn } = useContext(UserContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BackHeader
          title={'Profile'}
          backPressed={() => navigation.goBack()}
          
        />

      {/* Profile Picture and Name */}
      <View style={styles.profileSection}>
        <Image
          source={profileImage} // Use the imported image here
          style={styles.profileImage}
        />
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.navigate('EditingProfile')}>
          <Feather 
          name="edit" 
          size={18} 
          color={colors.white} />
        </TouchableOpacity>
        <TextDefault style={styles.profileName} H4>
          {profile?.name || 'User Name'}
        </TextDefault>
      </View>

      {/* Settings Options */}
      <View style={styles.settingsSection} H5>
        {[
  { label: 'Your Profile', icon: 'person-outline', route: 'EditingProfile' },
  { label: 'Delete', icon: 'delete', route: 'DeleteButton' },
  { label: 'Favourites', icon: 'star-outline', route: 'Favourite' },
  { label: 'Settings', icon: 'settings', route: 'Settings' },
  { label: 'Help Center', icon: 'help', route: 'HelpCenter' },  // Changed icon name to 'help'
  { label: 'Privacy Policy', icon: 'lock', route: 'PrivacyPolicy' },  // Changed icon name to 'lock'
]
.map((item, index) => (
          <TouchableOpacity
  key={index}
  style={styles.settingsItem}
  onPress={() => navigation.navigate(item.route)}>
  <View style={styles.settingsItemIcon}>
  <MaterialIcons 
      name={item.icon} 
      size={24} 
      color={colors.greenColor}  // Use the color from utils
    />
  </View>
  <TextDefault style={styles.settingsItemText} H5>
    {item.label}
  </TextDefault>
  <Ionicons 
  name="chevron-forward-outline" 
  size={20} 
  color={colors.greenColor} />
</TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default ProfileContainer;      