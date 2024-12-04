import React, { useContext } from 'react';
import { TouchableOpacity, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import UserContext from '../../../context/User';
import { useNavigation } from '@react-navigation/native';
import { TextDefault } from '../../../components';

// Import your profile image
import profileImage from '../../../assets/profileimage.jpg';

function ProfileContainer(props) {
  const navigation = useNavigation();
  const { profile, isLoggedIn } = useContext(UserContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <TextDefault style={styles.headerTitle} H4>
          Profile
        </TextDefault>
      </View>

      {/* Profile Picture and Name */}
      <View style={styles.profileSection}>
        <Image
          source={profileImage} // Use the imported image here
          style={styles.profileImage}
        />
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.navigate('EditingProfile')}>
          <Feather name="edit" size={18} color="#fff" />
        </TouchableOpacity>
        <TextDefault style={styles.profileName} H4>
          {profile?.name || 'User Name'}
        </TextDefault>
      </View>

      {/* Settings Options */}
      <View style={styles.settingsSection}>
        {[
          { label: 'Your Profile', icon: 'person-outline', route: 'UserProfile' },
          { label: 'Manage Address', icon: 'location-on', route: 'AddressList' },
          // { label: 'Payment Methods', icon: 'credit-card', route: 'PaymentMethods' },
          // { label: 'My Wallet', icon: 'wallet-outline', route: 'Wallet' },
          // { label: 'My Coupons', icon: 'tag', route: 'Coupons' },
          { label: 'My Active Orders', icon: 'list', route: 'ActiveOrders' }, // New Label
          { label: 'Previous Orders', icon: 'history', route: 'PreviousOrders' }, // New Label
          { label: 'Delete', icon: 'delete', route: 'DeleteButton' }, // New Label
          { label: 'Favourites', icon: 'star-outline', route: 'Favourite' }, // New Label
          { label: 'Settings', icon: 'settings', route: 'Settings' },
          { label: 'Help Center', icon: 'help-circle-outline', route: 'HelpCenter' },
          { label: 'Privacy Policy', icon: 'lock-closed-outline', route: 'PrivacyPolicy' },
        ].map((item, index) => (
          <TouchableOpacity
  key={index}
  style={styles.settingsItem}
  onPress={() => navigation.navigate(item.route)}>
  <View style={styles.settingsItemIcon}>
    <MaterialIcons name={item.icon} size={24} color="#01AC66" />
  </View>
  <TextDefault style={styles.settingsItemText} H5>
    {item.label}
  </TextDefault>
  <Ionicons name="chevron-forward-outline" size={20} color="#01AC66" />
</TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default ProfileContainer;      