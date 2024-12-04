import { StyleSheet } from 'react-native';
import { verticalScale, scale } from '../../../utils/scaling';
import { fontStyles } from '../../../utils/fontStyles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: verticalScale(16),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  backButton: {
    marginRight: scale(10),
  },
  headerTitle: {
    fontFamily: fontStyles.PoppinsSemiBold,
    fontSize: verticalScale(18),
    color: '#000',
    marginLeft: 115,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: verticalScale(30),
  },
  profileImage: {
    width: verticalScale(100),
    height: verticalScale(100),
    borderRadius: verticalScale(50),
    borderWidth: 5,
    borderColor: '#01AC66',
  },
  editIcon: {
    position: 'absolute', // Keep it absolute for overlay
    bottom: verticalScale(40), // Align it with the bottom of the profile image
    right: verticalScale(100), // Align it to the right of the profile image
    backgroundColor: '#01AC66',
    borderRadius: verticalScale(20), // Circular shape
    padding: scale(5),
  },
  profileName: {
    fontFamily: fontStyles.PoppinsSemiBold,
    fontSize: verticalScale(20),
    marginTop: verticalScale(10),
    color: '#000',
  },
  settingsSection: {
    marginTop: verticalScale(-2),
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  settingsItemIcon: {
    marginRight: scale(15),
  },
  settingsItemText: {
    flex: 1,
    fontFamily: fontStyles.PoppinsRegular,
    fontSize: verticalScale(16),
    color: '#000',
  },
 
});

export default styles;
