import { StyleSheet, Dimensions } from 'react-native';
import { colors, scale } from '../../utils';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayLinesColor,
    borderRadius: scale(5),
    padding: scale(10),
    margin: width * 0.025,
    marginBottom: scale(20), // Space between cards
    width: width * 0.45, // Adjusted for two columns
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingBottom: scale(15), // Additional space for text
  },
  cardImageContainer: {
    position: 'relative',
    width: '100%',
    height: scale(120), // Adjusted for better image display
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  heartIcon: {
    position: 'absolute',
    top: scale(0), // Position at the very top
    right: scale(0), // Position at the very right
    padding: scale(5),
    
  },
  
  heartImage: {
    width: scale(15),
    height: scale(15),
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: scale(8), // Adjusted for better spacing
    alignItems: 'flex-start',
    width: '100%',
    paddingBottom: scale(10), // Space below text section
  },
  productName: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: scale(1),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(4),
  },
  discountedPrice: {
    fontSize: scale(14),
    fontWeight: 'bold',
    color:'#228B22',
  },
  originalPrice: {
    fontSize: scale(12),
    textDecorationLine: 'line-through',
    color: colors.darkGrayText,
    marginLeft: scale(5),
  },
  ratingContainer: {
    position: 'absolute', // Make the container position absolute
    bottom: scale(29), // Align it to the bottom with some padding
    right: scale(-20), // Align it to the right with some padding
    flexDirection: 'row', // Keep items in a row
    alignItems: 'center',
  },
  ratingText: {
    fontSize: scale(12),
    color: colors.fontSecondColor,
    marginRight: scale(5),
    padding: 5
  },
  starIcon: {
    width: scale(14),
    height: scale(14),
    resizeMode: 'contain',
  },
});

export default styles;
