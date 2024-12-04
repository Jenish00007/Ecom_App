import { StyleSheet, Dimensions } from 'react-native';
import { colors, scale } from '../../utils';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: scale(70),
  },
  headerSubtitle: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
    marginTop: scale(0),
  },
  profileImageContainer: {
    marginBottom: 30,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, // Set fixed width and height for the circle
    height: 100,
    borderRadius: 50, // Makes it circular
    backgroundColor: '#f0f0f0', // Light gray background
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow blur
    elevation: 5, // Adds shadow for Android
  },
  
  profileImage: {
    fontSize: 64, // Font size for the icon
    color: colors.darkGrayText, // Gray color for the user icon
  },
  
  editIcon: {
    position: 'absolute',
    bottom: -5,
    right: -7,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 5,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 8,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    height: scale(40),
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    height: scale(40),
  },
  countryCode: {
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    fontSize: 14,
    color: '#777',
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#000',
  },
  dropdownText: {
    fontSize: 14,
    color: '#777',
  },
  mainButton: {
    backgroundColor: '#01AC66', // Customize the button color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: scale(45),
    width: '100%',
  },
  mainButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#fff',
    marginTop: 5,
    position: 'absolute',
    width: '100%',
    zIndex: 10, // To ensure it appears above other content
    elevation: 5, // For Android shadow effect
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#00000',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    height: scale(40),
  },
  
  
  
});
