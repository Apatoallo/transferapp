import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, SafeAreaView, FlatList, ScrollView} from 'react-native';
import { Header } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import storage, { firebase } from '@react-native-firebase/storage';
import profile from '../assets/images/profilePhoto.png'

import  aladdinlogo  from '../assets/icons/menuicons/logo.png'
import live from '../assets/icons/menuicons/liveicon.png'
import trending from '../assets/icons/menuicons/trendicon.png'
import categories from '../assets/icons/menuicons/categoriesicon.png'
import  hamburgerIcon  from '../assets/icons/menuicons/hamburgerIcon.png'


import airplane from '../assets/icons/airplane100filled.png'
import product from '../assets/images/product.png'
import jettop from '../assets/icons/jettop.png'

const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;


function useStream() {

  const [streamlist, setStream] = useState([])

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
               imgURL: doc.imgURL,
               travelTime: doc.travelTime,
               prices: doc.price,
               rewards: doc.reward,
               proImg: doc.proImg,
               ...doc.data()
           }))
           setStream(newWishes)
       })
       return;
  }, [])
  return streamlist
  
  
}

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
               proImg: doc.proImg,
               ...doc.data()
           }))
           setWishes(newWishes)
       })
       return;
  }, [])
  return wishlist
  
  // 7AE3F7 green blue
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const Item = ({visible, proImg, w_from_long, w_to_long, name, surname, leftTime, maxCapacity, productName, productPrice, imageName, imagess, spec1, spec2, spec1desc, spec2desc, departureHour, arriveHour }) => (
<>
     
    <View style={styles.item}>
      <View style={styles.pImageContainer}>
        <Image style={styles.pImage} source={{url: proImg}}/>
      </View>
      <View style={styles.availableRoute}>
            <View >
              <Text style={styles.timeleft}>17:00</Text>
              <Text style={styles.longleft}>UK</Text>
            </View>
            <View style={styles.lineCover}>
              <View style={styles.line}>
                  <Image style={styles.jet} source={jettop}/>
                  <Text style={styles.flightDate}>Jun 14</Text>
              </View>
            </View>  
            <View >
              <Text style={styles.timeright}>22:45</Text>
              <Text style={styles.longright}>TR</Text>
            </View>
        </View>
    </View>
  </>
  );
const menuIcon = () => (
  <>
    <View style={styles.menuIcon}>
      <Image style={styles.hamburgerIcon} source={hamburgerIcon}/>
    </View>
  </>
);

const HeaderTitle = () => (
  <>
    <Image style={styles.headerTitle} source={aladdinlogo}/>
    
  </>
);

const mainStream = StyleSheet.create({
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
    marginLeft: 25,
    borderRadius: 100,
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
    width: 300,
    height: 300,
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

const Items = ({ who_wished, title, wished_from, imgURL, prices, proImg, rewards, wished_to, w_from_long, w_to_long, travelTime }) => (
    
  <View style={mainStream.item}>

      <View style={mainStream.topInfo}>
        <View>
          <Image style={mainStream.profileImage} source={{url: proImg}}/>
          <Text style={{top: -46, left: 90, color: '#9FABC4', fontWeight: 'bold'}}>{who_wished}</Text>
        </View>
        <View style={mainStream.topRight}>
          <Text style={mainStream.pcs}><Text style={mainStream.pcsNumber}>2 pcs</Text> Ordered</Text>
          <Text style={mainStream.travel}>{wished_from} to {wished_to}</Text>
        </View>
      </View>
      <View style={mainStream.products}>
        <Image style={mainStream.productImage} source={{url: imgURL}}/>

      </View>
      <View style={mainStream.bottomInfo}>
        <View style={mainStream.left}>
          <Text style={mainStream.topTitle}>Products Price</Text>
          <Text style={mainStream.prices}>${prices}</Text>
        </View>
        <View style={mainStream.right}>
          <Text style={mainStream.topTitle}>Delivery Reward</Text>
          <Text style={mainStream.prices}>${rewards}</Text>
        </View>
        
      </View>
      <View style={mainStream.orderChat}>
        <View style={mainStream.chatButton}>
          <Text style={mainStream.btnText}>START CHATTING</Text>
        </View>
      </View>
  </View>
);



const MainScreen = () => {
    const wishlist = useWishes();
    
    const streamlist = useStream();

    const renderStream = ({ item }) => (
        <Items wished_from={item.wished_from} wished_to={item.wished_to} proImg={item.proImg} w_to_long={item.w_to_long} w_from_long={item.w_from_long} travelTime={item.travelTime} title={item.name} imgURL={item.imgURL} prices={item.price} rewards={item.reward} who_wished={item.who_wished} />
      );
    const renderItem = ({ item }) => (
        <Item travellingFrom={item.travellingfrom} proImg={item.proImg} travellingTo={item.travellingto} toLong={item.toLong} fromLong={item.fromLong} travelTime={item.travelTime} travellerName={item.travellerName} />
      );
    return(
        <>
        <SafeAreaView style={{backgroundColor: '#2258CE'}} >
          <Header
            containerStyle={styles.header}
            backgroundColor={'#2258CE'}
            leftComponent={menuIcon}
            centerComponent={ HeaderTitle }
          />
          </SafeAreaView>
          <ScrollView style={{marginTop: -1}}>
          <View style={styles.headerTop}>
            <View style={styles.makeurwish}>
              <Text style={styles.muwText}>
                Make your wish right now!
              </Text>
            </View>
            <View>
              <Text style={styles.travelsTitle}>Travels</Text>
            </View>
            <View style={styles.travelsContainer}>
              <FlatList
              
                  horizontal
                  data={wishlist&&wishlist}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
              />
            </View>
          </View>
            <View style={styles.viewAll}>
              <Text style={styles.viewAllText}>View All Travels</Text>
            </View>
            <View style={styles.fastMenuContainer}>
              <View style={styles.fastMenu}>
                <Image style={styles.live} source={live}/>
                <Text style={styles.liveText}>Live Sales</Text>
              </View>
              <View style={styles.fastMenu}>
                <Image style={styles.trending} source={trending}/>
                <Text style={styles.trendText}>Trend Orders</Text>
              </View>
              <View style={styles.fastMenu}>
                <Image style={styles.categories} source={categories}/>
                <Text style={styles.categoriesText}>Categories</Text>
              </View>
            </View>
            <View style={styles.actuals}>
              <Text style={styles.actualsTitle}>Actual Orders</Text>
              {/* <Text>filter</Text> */}
            </View>
            <View style={{marginTop: 10,}}>
            <FlatList
              data={streamlist&&streamlist}
              renderItem={renderStream}
              keyExtractor={item => item.id}
          />
            </View>


          
          
          </ScrollView>
        
        </>
    )
    
}


const styles = StyleSheet.create({
  actualsTitle: {
    fontSize: 24, color: '#9FABC4', fontWeight: '600', 
  },  
  actuals: {
    display: 'flex', marginTop: 40, width: wwidth - 42,marginLeft: 21, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  pImageContainer: {
    display:'flex',
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
  },
  
  pImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  item: {
    height: 120,
    marginLeft: 15,
    marginRight: 11,
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: 'rgba(217,217,217,0.5)',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  live: {
    width: 40,
    height: 40,
    marginTop: 0,
  },
  trending: {
    width: 28,
    height: 28,
    marginTop: 3,
  },
  categories: {
    width: 30,
    height: 30,
    marginTop: 2,
  },
  liveText: {
    color: '#fff',
    marginTop: 4,
    fontSize: 10,
  },
  trendText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 10,
  },
  categoriesText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 10,
  },
  fastMenuContainer: {
    marginLeft: 15,
    marginTop: 28,
    flexDirection: 'row',
  },
  fastMenu: {
    backgroundColor: '#012471',
    height: 90, width: 90,
    marginRight: 14,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewAll: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllText: {
    marginTop: 50,
    fontSize: 13,
    color: '#9FABC4'
  },
  travelsContainer: {
    
    marginTop: 28,
    
  },

  travelsTitle: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 20,
    marginTop: 45,
  },

  header: {
    height: 58,
    
    
  },
  menuIcon: {

  },
  headerTitle: {
    color: '#fff',
    marginTop: -38,
    
  },
  hamburgerIcon: {
    marginTop: 4,
    marginLeft: 13,
    marginTop: -35,
  },
  headerTop: {
    height: 308,
    backgroundColor: '#2258CE',
    marginTop: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  makeurwish: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b6ad3',
    height: 50,
    borderRadius: 16,
    width: wwidth - 140,
    marginLeft: 70,
    marginTop: 60,

  },
  muwText: {
    color: '#fff',
    fontSize: 16
  },


  availableRoute: {
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 0,
    height: 65,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    fontSize: 14,
    fontWeight: 'bold',
    // color: '#6da0ae',
    color: '#1F386D',
    textAlign: 'left',
    flexDirection: 'column',
    width: 120,
  },
  longleft: {
    fontSize: 20,
    fontWeight: '700',
    // color: '#6da0ae',
    color: '#9FABC4',
    textAlign: 'right',
    flexDirection: 'column',
    minWidth: 35,
    marginRight: 27
  },
  longright: {
    fontSize: 20,
    fontWeight: '700',
    // color: '#6da0ae',
    color: '#9FABC4',
    textAlign: 'left',
    flexDirection: 'column',
    minWidth: 35,
    marginLeft: 25,
  },
  timeright: {
    fontSize: 14,
    fontWeight: 'bold',
    // color: '#6da0ae',
    color: '#1F386D',
    textAlign: 'right',
    flexDirection: 'column',
    width: 65,
  },
  timeleft: {
    fontSize: 14,
    fontWeight: 'bold',
    // color: '#6da0ae',
    color: '#1F386D',
    textAlign: 'left',
    flexDirection: 'column',
    width: 65,
  },
  
  lineCover: {
    width: '50%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  line: {
    height: 1,
    backgroundColor: '#f1f1f1',
    marginRight: 0,
    marginLeft: 0,
    width: '100%',
  },
  jet: {
    width: 18,
    height: 16,
    marginTop: -7,
    marginLeft: 16 
  },
  flightDate: {
    width: '100%',
    height: 16,
    marginTop: -16,
    textAlign: 'center',
    fontSize: 12,
    color: '#9FABC4'
  }

});


export default MainScreen;