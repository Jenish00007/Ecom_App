import { StyleSheet } from 'react-native'
import { colors, alignment, scale } from '../../utils'

const styles = StyleSheet.create({
  
  cardImageContainer: {
    width: '105%',
    height: '105%',
    position: 'relative',
    backgroundColor: colors.backgroudGray,
    borderRadius: scale(5 )
    
  },
  imgResponsive: {
    flex: 1,
    justifyContent: 'center',
    width: undefined,
    height: undefined
  },
  cardText: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
})
export default styles
