import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, SafeAreaView, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore'
import airplane from '../assets/icons/airplane100filled.png'
import jettop from '../assets/icons/jettop.png'

import plane from '../assets/icons/tabIcons/plane.png'
const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;

function useWishes() {

    const [wishlist, setWishes] = useState([])

    useEffect(() => {
        
         firestore()
         .collection('Travels')
         .onSnapshot((snapshot) => {
             const newWishes = snapshot.docs.map((doc)=> ({
                 
                 travellerName: doc.travellerName,
                 travellerSurname: doc.travellerSurname,
                 travellingFrom: doc.travellingfrom,
                 travellingTo: doc.travellingto,
                 fromLong: doc.fromLong,
                 toLong: doc.toLong,
                 travelTime: doc.travelTime,
                 
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
      backgroundColor: '#fff',
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      marginVertical: 11,
      marginHorizontal: 20,
      borderRadius: 20,
      minHeight: 230,
      display: 'flex',
      flexDirection: 'column',
      shadowColor: 'rgba(217,217,217,0.5)',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    availableRoute: {
      flexDirection: 'row',
      width: wwidth-40,
      paddingRight: 20,
      paddingLeft: 20,
      marginTop: 11,
      height: 80,
      justifyContent: 'space-between',
      alignItems: 'center',
      
    },
  
    right: {
      fontSize: 22,
      fontWeight: 'bold',
      // color: '#6da0ae',
      color: '#1F386D',
      textAlign: 'right',
      flexDirection: 'column',
      width: 120,
    },
    left: {
      fontSize: 22,
      fontWeight: 'bold',
      // color: '#6da0ae',
      color: '#1F386D',
      textAlign: 'left',
      flexDirection: 'column',
      width: 120,
    },
    longleft: {
      fontSize: 11,
      fontWeight: '300',
      // color: '#6da0ae',
      color: '#1F386D',
      textAlign: 'left',
      flexDirection: 'column',
      width: 120,
    },
    longright: {
      fontSize: 11,
      fontWeight: '300',
      // color: '#6da0ae',
      color: '#1F386D',
      textAlign: 'right',
      flexDirection: 'column',
      width: 120,
    },
    airplane: {
      width: 30,
      height: 30
    },
    lineCover: {
      width: '100%',
      
    },
    line: {
      
      height: 1,
      backgroundColor: '#f1f1f1',
      marginRight: 20,
      marginLeft: 20,
    },
    planeCover:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      

    },
    arrive: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 20,
      paddingLeft: 20,
      marginTop: 25
    },
    dep: {
      fontWeight: '500',
      color: '#9FABC4',
      fontSize: 13,
      textAlign: 'left'
    },
    arr: {
      color: '#9FABC4',
      fontWeight: '500',
      fontSize: 13,
      textAlign: 'right'
    },
    depday: {
      fontSize: 17,
      textAlign: 'left',
      color: '#1F386D',
      fontWeight: '600',

    },
    arrday: {
      fontSize: 17,
      textAlign: 'right',
      color: '#1F386D',
      fontWeight: '600',
    },
  
    jet: {
      width: 18,
      height: 16,
      marginTop: -7,
      marginLeft: 23
      
    },
    orderChat: {
      height: 78,
      display: 'flex',
      alignItems: 'flex-end'
    },
    chatButton: {
      backgroundColor: '#1F386D',
      borderRadius: 25,
      marginTop: 15,
      paddingRight: 20,
      paddingLeft: 20,
      paddingTop: 15,
      paddingBottom: 15,
      marginRight: 20,
    },
    btnText: {
      color: '#fff',
      fontWeight: '800',
      fontSize: 16
    },
    
   
  });

const Item = ({ travellerName, travellerSurname, travellingFrom, travellingTo, fromLong, toLong, travelTime }) => (

    <View style={styles.item}>
      {/* <View style={styles.planeCover}>
        
      </View> */}

        <View style={styles.availableRoute}>
            <View style={styles.col}>
              <Text style={styles.left}>{travellingFrom}</Text>
              <Text style={styles.longleft}>{fromLong}</Text>
            </View>
           
            <Image style={styles.airplane} source={airplane}/>        

            <View style={styles.col}>
              <Text style={styles.right}>{travellingTo}</Text>
              <Text style={styles.longright}>{toLong}</Text>
            </View>
        </View>
        <View style={styles.lineCover}>
          <View style={styles.line}>
            <Image style={styles.jet} source={jettop}/>
          </View>
        </View>
        <View style={styles.arrive}>
          <View>
            <Text style={styles.dep}>DEPARTURE</Text>
            <Text style={styles.depday}>AGU 14</Text>
          </View>
          <View>
            <Text style={styles.arr}>RETURN</Text>
            <Text style={styles.arrday}>SEP 26</Text>
          </View>
        </View>
        <View style={styles.orderChat}>
          <View style={styles.chatButton}>
            <Text style={styles.btnText}>ORDER from UK</Text>
          </View>
        </View>
        
    </View>
  );

const Wishes = () => {

    const wishlist = useWishes();
    const renderItem = ({ item }) => (
        <Item travellingFrom={item.travellingfrom} travellingTo={item.travellingto} toLong={item.toLong} fromLong={item.fromLong} travelTime={item.travelTime} travellerName={item.travellerName} />
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


  

export default Wishes;