import { View, StyleSheet } from 'react-native';

function Card({ children}) {
  return <View style={[styles.card]}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent:'center',
        alignItems:'center',
        padding:30,
        marginTop: 40,
        backgroundColor: '#70083cff',
        marginHorizontal:24,
        borderRadius:8,
        elevation:4,
        },
  
});
