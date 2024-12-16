// Updated styles.js
import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { alignment } from '../../utils';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  grayContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    width: '48%',
    backgroundColor: colors.white,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'flex-start', // Aligns the title to the left
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    alignSelf: 'flex-start', // Aligns the subtitle container to the left
  },
  cardSubtitle: {
    fontSize: 14,
    color: colors.fontThirdColor,
    marginLeft: 5, // Adds space between icon and text
  },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  tripButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightpink,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
  },
  tripButtonText: {
    fontSize: 13,
    color: colors.fontMainColor,
    marginRight: 5, // Adds space between text and icon
    fontWeight: 'bold'
  },
  title: {
    ...alignment.PxSmall,
    ...alignment.PLxSmall,
    fontWeight: 'bold',
    fontSize: 17, // Ensure the font size is visible enough
    color: colors.black, // Add color for better visibility if needed
},

});

export default styles;
