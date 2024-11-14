import { Dimensions, StyleSheet } from 'react-native'
import {
  alignment,
  fontStyles,
  colors,
  scale,
  verticalScale
} from '../../utils'
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  safeAreaStyle: {
    backgroundColor: colors.headerbackground
  },
  leftIconPadding: {
    ...alignment.PLsmall,
    ...alignment.PRlarge
  },
  scrollViewStyle: {
    marginTop: verticalScale(20),
    backgroundColor: colors.themeBackground
  },
  grayBackground: {
    backgroundColor: colors.backgroudGray
  },
  caroselContainer: {
    width: '100%',
    height: height * 0.3,
    position: 'relative'
  },
  caroselStyle: {
    width,
    height: height * 0.3
  },
  menuDrawerContainer: {
    position: 'absolute',
    top: '10%',
    left: '2%'
  },
  imgResponsive: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  headingText: {
    fontFamily: fontStyles.PoppinsRegular,
    fontSize: scale(16)
  },
  itemCardContainer: {
    width: scale(180),
    height: scale(230),
    borderRadius: scale(5),
    borderColor: colors.whiteColor,
    borderWidth: scale(2),
    ...alignment.MTsmall,
    ...alignment.MRlarge
  },
  iconContainer: {
    width: scale(60),  // Adjust width as needed
    height: verticalScale(60),  // Adjust height
    marginRight: scale(27),  // Decreased space between containers
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(40),
    overflow: 'hidden',
    backgroundColor: '#E6F7F0',  // Replace this with your desired color code
    marginTop: scale(16)
  },  
  iconImage: {
    width: '100%',  // Image fills the container
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',  // Ensures image covers the circle without distortion
  },
  categoryContainer: {
    marginTop: verticalScale(10),
    paddingHorizontal: scale(10), // Adjust for proper spacing
  },
  titleSpacer: {
    marginLeft: '5%',
    marginTop: scale(35)
  },
  productCard: {
    marginLeft: '5%',
    width: '42%',
    height: scale(235),
    marginTop: scale(10),
    marginBottom: scale(20)
  },
  seeAllTextContainer: {
    flex: 1, // Ensures it takes the remaining space and pushes text to the right
    alignItems: 'flex-end', // Aligns text to the right
    marginTop: scale(9), // If you want a bit of space above
  },
  
  seeAllText: {
    textAlign: 'right', // Align the text itself to the right
    marginRight: '6%',
    marginTop: scale(-25), // Move the "See All" text upwards (negative value to shift it up)
    fontWeight: 'bold',
    color: '#01AC66',
    fontSize: 17,
  },
  
  spacer: {
    ...alignment.MBsmall
  },
})
export default styles
