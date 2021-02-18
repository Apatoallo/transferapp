import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, SafeAreaView, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore'
import airplane from '../assets/icons/airplane100filled.png'
import product from '../assets/images/product.png'
import profile from '../assets/images/profilePhoto.png'
import plane from '../assets/icons/tabIcons/plane.png'
const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

function useWishes() {

    const [wishlist, setWishes] = useState([])

    useEffect(() => {
        
         firestore()
         .collection('Wishes')
         .onSnapshot((snapshot) => {
             const newWishes = snapshot.docs.map((doc)=> ({
                 name: doc.name,
                 who_wished: doc.who_wished,
                 wished_from: doc.wished_from,
                 wished_to: doc.wished_to,
                 w_from_long: doc.w_from_long,
                 w_to_long: doc.w_to_long,
                 ...doc.data()
             }))
             setWishes(newWishes)
         })
         return;
    }, [])
    return wishlist
    
    // 7AE3F7 green blue
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: wwidth,
      marginTop: StatusBar.currentHeight || 0,

    },
    item: {
      backgroundColor: '#fdfdfd',
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginVertical: 11,
      marginHorizontal: 20,
      borderRadius: 20,
      minHeight: 250,
      display: 'flex',
      shadowColor: 'rgba(217,217,217,0.5)',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      
    },
    profileImage: {
      width: 55,
      height: 55,
      marginTop: 12,
      marginLeft: 25
    },
    itemContainer: {
      alignItems: 'center',
      display: 'flex'
    },
    topInfo: {
      width: wwidth-40,
      height: 80,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    },
    topRight: {
      marginRight: 25,
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'center',
      // borderWidth: 1,
      // borderColor: 'red'
    },
    pcs: {
      color: '#9FABC4'
    },
    pcsNumber : {
      fontWeight: '600',
      color: '#9FABC4'
    },
    travel: {
      textAlign: 'right',
      fontSize: 17,
      fontWeight: '500',
      // color: '#5791C6',
      color: '#1F386D'
    },
    products: {
      display: 'flex',
      width: wwidth-40,
      justifyContent: 'center',
      paddingRight: 20,
      paddingLeft: 20,
    },
    productImage: {
      width: '100%',
      borderRadius: 30,
      marginRight: 20
    },
    bottomInfo: {
      marginTop: 17,
      display: 'flex',
      flexDirection: 'row'
    },
    left: {
      width: '50%',
      backgroundColor: '#fbfbfb',
      height: 70,
      paddingTop: 17,
      paddingRight: 21
      
    },
    right: {
      width: '50%',
      backgroundColor: '#EDF3F7',
      height: 70,
      paddingTop: 17,
      paddingRight: 21
    },
    topTitle: {
      textAlign: 'right',
      color: '#9FABC4',
      fontWeight: '400',
    },
    prices: {
      textAlign: 'right',
      color: '#77D2B3',
      fontWeight: '600',
      fontSize: 24
    },
    orderChat: {
      height: 78,
      display: 'flex',
      alignItems: 'center'
    },
    chatButton: {
      // backgroundColor: '#5791C6',
      backgroundColor: '#1F386D',
      borderRadius: 25,
      marginTop: 15,
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 15,
      paddingBottom: 15
    },
    btnText: {
      color: '#fff',
      fontWeight: '800',
      fontSize: 16
    },
    
  });

const Item = ({ who_wished, title, wished_from, wished_to, w_from_long, w_to_long, travelTime }) => (

    <View style={styles.item}>

        <View style={styles.topInfo}>
          <View>
            <Image style={styles.profileImage} source={profile}/>
          </View>
          <View style={styles.topRight}>
            <Text style={styles.pcs}><Text style={styles.pcsNumber}>2 pcs</Text> Ordered</Text>
            <Text style={styles.travel}>{wished_from} to {wished_to}</Text>
          </View>
        </View>
        <View style={styles.products}>
          <Image style={styles.productImage} source={product}/>

        </View>
        <View style={styles.bottomInfo}>
          <View style={styles.left}>
            <Text style={styles.topTitle}>Products Price</Text>
            <Text style={styles.prices}>$281,26</Text>
          </View>
          <View style={styles.right}>
            <Text style={styles.topTitle}>Delivery Reward</Text>
            <Text style={styles.prices}>$33,75</Text>
          </View>
          
        </View>
        <View style={styles.orderChat}>
          <View style={styles.chatButton}>
            <Text style={styles.btnText}>START CHATTING</Text>
          </View>
        </View>
    </View>
  );

const Orders = () => {

    const wishlist = useWishes();
    const renderItem = ({ item }) => (
        <Item wished_from={item.wished_from} wished_to={item.wished_to} w_to_long={item.w_to_long} w_from_long={item.w_from_long} travelTime={item.travelTime} title={item.name} who_wished={item.who_wished} />
      );
    return(
        <>
        <SafeAreaView style={styles.container}>
            <FlatList
                data={wishlist&&wishlist}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
        </>
    )
    
}


  

export default Orders;