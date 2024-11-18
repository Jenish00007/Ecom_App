import { Dimensions, StyleSheet } from 'react-native'
import { alignment, colors, scale } from '../../utils'
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeAreaStyle: {
    backgroundColor: colors.headerbackground,
  },
  grayBackground: {
    backgroundColor: colors.white,
  },
  headerText: {
    height: scale(80),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightHorizontalLine,
  },
  categoryContainer: {
    flexGrow: 1, // Allows FlatList to grow and adapt its content
    flexDirection: 'row', // Ensures items align in rows
    flexWrap: 'wrap', // Wraps items to the next row
    justifyContent: 'space-between', // Adds space between items
    paddingHorizontal: scale(10), // Adjusts horizontal padding for better alignment
    paddingBottom: scale(20),    // Ensures space at the bottom of the list
    ...alignment.MTlarge,
  },
  cardStyle: {
    marginBottom: scale(30), // Adds space below each card
    width: width * 0.42, // Adjusts width for two columns with spacing
    height: scale(130), // Keeps height consistent
    borderRadius: scale(4),
    backgroundColor: colors.grayLinesColor,
    elevation: 2, // Adds subtle shadow for cards
    marginTop: scale(20), // Space above the 2nd row
  },
  subContainerImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...alignment.MBlarge,
  },
  image: {
    width: scale(130),
    height: scale(130),
  },
  descriptionEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    ...alignment.Plarge,
  },
  emptyButton: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
})

export default styles
