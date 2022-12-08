import {View,StyleSheet} from 'react-native'
import Colors from '../../constants/Color'
function Card({children}){
  return (<View style={styles.card}>{children}</View>)
}
export default Card

const styles = StyleSheet.create({
    card:{
        alignItems:"center",
        marginTop:36,
        marginHorizontal:16,
        padding:16,
        backgroundColor:Colors.primary800,
        borderRadius:8,
        elevation:4,//android
        shadowColor:'black',
        shadowOffset:{width:0,height:2}
       },
})