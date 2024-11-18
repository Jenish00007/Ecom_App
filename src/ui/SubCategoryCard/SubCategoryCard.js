import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

function SubCategoryCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('ProductListing', { id: props.data._id })
      }
      style={[styles.container, props.style]}
    >
      {/* Image Section */}
      <View style={styles.cardImageContainer}>
        <Image
          source={{ uri: props.data.image }}
          style={styles.productImage}
        />
        <TouchableOpacity style={styles.heartIcon}>
          <Image
            source={require('../../assets/hearticon.png')} // Update path if necessary
            style={styles.heartImage}
          />
        </TouchableOpacity>
      </View>

      {/* Product Information */}
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{props.data.name ?? 'Tomato'}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>
            {props.data.discountedPrice ? `$${props.data.discountedPrice}` : '$10'}
          </Text>
          <Text style={styles.originalPrice}>
            {props.data.originalPrice ? `$${props.data.originalPrice}` : '$12'}
          </Text>
        </View>
        <View style={styles.ratingContainer}>
        <Image
            source={require('../../assets/star.jpg')} // Update path if necessary
            style={styles.starIcon}
          />
          <Text style={styles.ratingText}>
            {props.data.rating ?? '4.5'}
          </Text>
          
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(SubCategoryCard);
