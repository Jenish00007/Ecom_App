import React from 'react'
import { TouchableOpacity, View, ImageBackground } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { TextDefault } from '../../components'
import { colors, alignment } from '../../utils'

function SubCategoryCard(props) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate('ProductListing', { id: props.data._id })
      }
      style={[styles.container, props.style]}>
      <View style={styles.cardImageContainer}>
        
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(SubCategoryCard)
