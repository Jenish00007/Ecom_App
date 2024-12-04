import React from 'react';
import { View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import styles from './styles';
import CategoryCard from '../../ui/CategoryCard/CategoryCard';
import { BottomTab, TextDefault, TextError, Spinner } from '../../components';
import { verticalScale, scale, colors, alignment } from '../../utils';
import ProductCard from '../../ui/ProductCard/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBackButton } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { gql, useQuery } from '@apollo/client';
import { categories, produccts } from '../../apollo/server';
import { TextInput } from 'react-native'; // Add this to your imports

const caroselImage = [
  require('../../assets/images/MainLanding/slide1.jpg'),
  require('../../assets/images/MainLanding/slide2.jpg'),
  require('../../assets/images/MainLanding/slide3.jpg'),
  require('../../assets/images/MainLanding/slide4.jpg'),
  require('../../assets/images/MainLanding/slide5.jpg'),
  require('../../assets/images/MainLanding/slide6.jpg')
];

const CATEGORIES = gql`
  ${categories}
`;
const PRODUCTS_DATA = gql`
  ${produccts}
`;

function MainLanding(props) {
  const navigation = useNavigation();
  const { data: categoryData } = useQuery(CATEGORIES);
  const { data: productsData, loading, error, refetch, networkStatus } = useQuery(PRODUCTS_DATA);

  const Featured = productsData?.products ? productsData.products.filter(item => item.featured) : [];

  function renderCarosel() {
    console.log(caroselImage); // Add this line to check the array content
    return (
      <View style={styles.caroselContainer}>
        <SwiperFlatList
          data={caroselImage}
          index={0}
          showPagination
          autoplay
          autoplayDelay={3}
          autoplayLoop={true}
          paginationActiveColor={colors.greenColor}
          paginationDefaultColor={colors.grayLinesColor} // Non-active dot color
          paginationStyle={{ marginBottom: '1%' }}
          paginationStyleItem={{
            height: verticalScale(8),
            width: verticalScale(8),
            marginLeft: 0
          }}
          renderItem={({ item }) => (
            <ImageBackground source={item} style={styles.caroselStyle} />
          )}
        />
        {/* <View style={styles.menuDrawerContainer}>
          <HeaderBackButton
            labelVisible={false}
            backImage={() => (
              <MaterialIcons
                name="menu"
                size={scale(30)}
                style={styles.leftIconPadding}
                color={colors.fontSecondColor}
              />
            )}
            onPress={() => navigation.toggleDrawer()}
          />
        </View> */}
      </View>
    );
  }

  function renderHeader() {
    return (
      <>
      {/* Location and Notifications Row */}
      <View style={styles.headerContainer}>
        {/* Column Layout for Location */}
        <View style={styles.locationWrapper}>
          {/* Add "Location" Text Above */}
          <TextDefault style={styles.locationLabel}>Location</TextDefault>

          {/* Location Row */}
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={24} color="#01AC66" />
            <TextDefault style={styles.locationText}>New York, USA</TextDefault>
            <TouchableOpacity>
              <MaterialIcons name="keyboard-arrow-down" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Notifications Icon */}
        <TouchableOpacity
          onPress={() => alert('Notifications clicked')}
          style={styles.notificationIconWrapper}
        >
          <MaterialIcons
            name="notifications-none"
            size={28}
            color="#000"
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

{/* Search Bar */}
<TouchableOpacity 
  style={styles.searchContainer} 
  onPress={() => navigation.navigate('SearchResult')} // Navigate to SearchResult
  activeOpacity={0.7} // Optional: Add a slight opacity effect on press
>
  <MaterialIcons name="search" size={24} color="#A0A0A0" />
  <TextInput
    style={styles.searchInput}
    placeholder="Search Food, Drinks, etc"
    placeholderTextColor="#A0A0A0"
    editable={false} // Disable editing as the entire container is clickable
    pointerEvents="none" // Ensure TextInput doesn't intercept the touch event
  />
  <TouchableOpacity>
    <MaterialIcons name="tune" size={24} color="#008000" />
  </TouchableOpacity>
</TouchableOpacity>





        {renderCarosel()}
        {/* Scrollable Category Row */}
        <View style={styles.titleSpacer}>
  <TextDefault textColor={colors.fontMainColor} H4 bold >
    {'Category'}
  </TextDefault>
  <View style={styles.seeAllTextContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('Category')}>
      <TextDefault textColor={colors.greenColor}H4 bold style={styles.seeAllText}>See All</TextDefault>
    </TouchableOpacity>
  </View>

  {/* Horizontal Scrollable FlatList for Icon Containers */}
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item, index) => index.toString()}
    data={categoryData?.categories?.slice(0, 8) || []} // Ensure you limit to 8 categories
    renderItem={({ item }) => (
      <CategoryCard
        id={item._id}
        icon={require('../../assets/dummy-image.png')} // Replace with dynamic icon if available
        cardLabel={item.title} // Pass the category name as `cardLabel`
        style={styles.categoryWrapper}
      />
    )}
  />
</View>


        {Featured.length > 0 && (
          <View style={styles.titleSpacer}>
            <TextDefault textColor={colors.fontMainColor} H4>
              {'Featured'}
            </TextDefault>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item._id}
              data={Featured}
              renderItem={({ item, index }) => {
                return (
                  <ProductCard styles={styles.itemCardContainer} {...item} />
                );
              }}
            />
          </View>
        )}
        <View style={styles.titleSpacer}>
          <TextDefault textColor={colors.fontMainColor} H4>
            {'All Items'}
          </TextDefault>
        </View>
      </>
    );
  }

  return (
    <SafeAreaView style={[styles.flex, styles.safeAreaStyle]}>
      <View style={[styles.grayBackground, styles.flex]}>
        {error ? (
          <TextError text={error.message} />
        ) : (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            refreshing={networkStatus === 4}
            onRefresh={() => refetch()}
            ListFooterComponent={loading && <Spinner />}
            ListHeaderComponent={renderHeader}
            data={productsData ? productsData.products : []}
            renderItem={({ item }) => (
              <ProductCard styles={styles.productCard} {...item} />
            )}
          />
        )}
        <BottomTab screen="HOME" />
      </View>
    </SafeAreaView>
  );
}
export default MainLanding;
