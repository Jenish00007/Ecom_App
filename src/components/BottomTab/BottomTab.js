import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Remove SimpleLineIcons as it's no longer needed for these icons
import styles from './styles';
import UserContext from '../../context/User';
import { scale, colors } from '../../utils';

function BottomTab({ screen }) {
  const navigation = useNavigation();
  const { isLoggedIn, cartCount, orders } = useContext(UserContext);

  const getIconColor = (currentScreen) => {
    return screen === currentScreen ? colors.greenColor : colors.darkGrayText;
  };

  const getTextStyle = (currentScreen) => {
    return screen === currentScreen ? styles.activeText : styles.inactiveText;
  };

  return (
    <View style={styles.footerContainer}>
      {/* Home Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('MainLanding')}
        style={styles.footerBtnContainer}
      >
        <MaterialCommunityIcons
          name="home" // Solid green icon
          size={scale(20)}
          color={getIconColor('HOME')}
        />
        <Text style={getTextStyle('HOME')}>Home</Text>
      </TouchableOpacity>

      {/* Cart Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('ShoppingCart')}
        style={styles.footerBtnContainer}
      >
        <View style={styles.imgContainer}>
          <MaterialCommunityIcons
            name="cart" // Solid green icon
            size={scale(20)}
            color={getIconColor('CART')}
          />
          {cartCount > 0 && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </View>
        <Text style={getTextStyle('CART')}>My Cart</Text>
      </TouchableOpacity>

      {/* Favourites Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Favourite')}
        style={styles.footerBtnContainer}
      >
        <MaterialCommunityIcons
          name="heart"
          size={scale(20)}
          color={getIconColor('FAVOURITES')}
        />
        <Text style={getTextStyle('FAVOURITES')}>Favourite</Text>
      </TouchableOpacity>

      {/* My Orders Icon */}
      <TouchableOpacity
        onPress={() => navigation.navigate('MyActiveOrder')}
        style={styles.footerBtnContainer}
      >
        <MaterialCommunityIcons
          name="clipboard-text"
          size={scale(20)}
          color={getIconColor('ORDERS')}
        />
        <Text style={getTextStyle('ORDERS')}>My Orders</Text>
      </TouchableOpacity>

      {/* Profile Icon */}
      <TouchableOpacity
        onPress={() => {
          if (isLoggedIn) {
            navigation.navigate('ProfileDashboard');
          } else {
            navigation.navigate('SignIn');
          }
        }}
        style={styles.footerBtnContainer}
      >
        <View style={styles.profileContainer}>
          <MaterialCommunityIcons
            name="account-circle" // Solid green icon
            size={scale(20)}
            color={getIconColor('PROFILE')}
          />
          {isLoggedIn &&
            orders &&
            orders.filter((o) =>
              ['PENDING', 'DISPATCHED', 'ACCEPTED'].includes(o.orderStatus)
            ).length > 0 && <View style={styles.profileBadge} />}
        </View>
        <Text style={getTextStyle('PROFILE')}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BottomTab;
