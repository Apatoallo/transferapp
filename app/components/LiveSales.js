import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar, Image, SafeAreaView, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage, { firebase } from '@react-native-firebase/storage';

import CountDown from 'react-native-countdown-component';
import airplane from '../assets/icons/airplane100filled.png'
import product from '../assets/images/product.png'
import plane from '../assets/icons/tabIcons/plane.png'
import jettop from '../assets/icons/jettop.png'

import profile from '../assets/images/profilePhoto.png'


const wwidth = Dimensions.get('window').width;
const wheight = Dimensions.get('window').height;


function useWishes() {

    const [wishlist, setWishes] = useState([])
    
    // console.log(img)
    const [img, setImages] = useState([])
    const [imgName, setImageName] = useState([])

    


      const getImgs = storage().ref('products/sennheisers.jpg').getDownloadURL().then((imageURLs) => {
        
        
      })



    

    useEffect(() => {
        
         firestore()
         .collection('LiveSell')
         .onSnapshot((snapshot) => {
        
             const newWishes = snapshot.docs.map((doc)=> ({

                 name: doc.name,
                 surname: doc.surname,
                 departureHour: doc.departureHour,
                 arriveHour: doc.arriveHour,
                 leftTime: doc.leftTime,
                 maxCapacity: doc.maxCapacity,
                 productName: doc.productName,
                 productPrice: doc.productPrice,
                 w_from_long: doc.w_from_long,
                 w_to_long: doc.w_to_long,
                 imageName: doc.imageName,
                 imageURL: doc.imageURL&&doc.imageURL,
                 spec1: doc.spec1,
                 spec2: doc.spec2,
                 spec1desc: doc.spec1desc,
                 spec1desc: doc.spec1desc,
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
function month(i) {
  if(i === 1) {
    return 'Jan'
  } else if (i === 2) {
    return 'Feb'
  } else if (i === 3) {
    return 'Mar'
  } else if (i === 4) {
    return 'Apr'
  } else if (i === 5) {
    return 'May'
  } else if (i === 6) {
    return 'Jun'
  } else if (i === 7) {
    return 'Jul'
  } else if (i === 8) {
    return 'Agu'
  } else if (i === 9) {
    return 'Oct'
  } else if (i === 10) {
    return 'Sep'
  } else if (i === 11) {
    return 'Nov'
  } else if (i === 12) {
    return 'Dec'
  }
}

const Item = ({visible, w_from_long, w_to_long, proImg, name, surname, leftTime, maxCapacity, productName, productPrice, imageName, imagess, spec1, spec2, spec1desc, spec2desc, departureHour, arriveHour }) => (
<>
      {/* <ImageView
        images={imag}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      /> */}
      
    <View style={styles.item}>

        <View style={styles.topInfo}>
          
          <View>
            <Image style={styles.profileImage} source={{url: proImg}}/>
          </View>

          <View style={styles.topRight}>
            <Text style={styles.pcs}><Text style={styles.pcsNumber}>{maxCapacity} pcs</Text> <Text style={styles.in}>in</Text> <Text style={styles.Stock}>Stock</Text></Text>
            {/* <Text style={styles.travel}>{wished_from} to {wished_to}</Text> */}
          </View>
        </View>

        <View style={styles.availableRoute}>
            <View style={styles.colleft}>
              <Text style={styles.timeleft}>{addZero(new Date(departureHour.toDate()).getHours())}:{addZero(new Date(departureHour.toDate()).getMinutes())}</Text>
              <Text style={styles.longleft}>{w_from_long}</Text>
            </View>
            <View style={styles.lineCover}>
              <View style={styles.line}>
                  <Image style={styles.jet} source={jettop}/>
                  <Text style={styles.flightDate}>{addZero(departureHour.toDate().getDate())}&nbsp;{month(new Date(departureHour.toDate()).getMonth())}</Text>
              </View>
            </View>  
            <View style={styles.colright}>
              <Text style={styles.timeright}>{addZero(new Date(arriveHour.toDate()).getHours())}:{addZero(new Date(arriveHour.toDate()).getMinutes())}</Text>
              <Text style={styles.longright}>{w_to_long}</Text>
            </View>
        </View>

        <View style={styles.products}>
          <Image style={styles.productImage} source={{url: imagess&&imagess}}/>
          {/* <Text>{imagess&&imagess}</Text> */}
          <View>
            <Text style={styles.pName}>{productName}</Text>
            <Text style={styles.specline1}>{spec1}: {spec1desc}</Text>
            <Text style={styles.specline2}>{spec2}: {spec2desc}</Text>
          </View>
        </View>
        <View style={styles.bottomInfo}>
          <View style={styles.left}>
            <Text style={styles.topTitle}>Total Price:</Text>
            <Text style={styles.topTitle}>(Taxes included)</Text>
            
          </View>
          <View style={styles.right}>
            
            <Text style={styles.prices}>${productPrice},00</Text>
          </View>
          
        </View>
        <View style={styles.timeLeft}>
          <CountDown
            until={39000}
            // onFinish={() => alert('finished')}
            // onPress={() => alert('hello')}
            digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#A90216', opacity: 0.65, paddingBottom: 13 }}
            digitTxtStyle={{color: '#A90216', opacity: 0.65}}
            timeLabelStyle={{color: '#A90216', fontWeight: 'bold', opacity: 0.60, marginTop: -26, fontSize: 11}}
            separatorStyle={{color: '#A90216', opacity: 0.65, fontSize: 18,}}
            timeToShow={['D', 'H', 'M', 'S']}
            timeLabels={{d: 'DAYS', h: 'HOUR', m: 'MINS', s: 'SEC'}}
            size={26}
            showSeparator
          />
          {/* <View style={styles.timeContainer}>
            <View>
              <Text style={styles.day}>17</Text>
              <Text style={styles.dayText}>DAYS</Text>
            </View>
            <View style={styles.dots}>
              <Text style={styles.dotsText}>:</Text>
            </View>
            <View>
              <Text style={styles.hour}>09</Text>
              <Text style={styles.hourText}>HOURS</Text>
            </View>
            <View style={styles.dots}>
              <Text style={styles.dotsTextRight}>:</Text>
            </View>
            <View>
              <Text style={styles.min}>50</Text>
              <Text style={styles.minText}>MINS</Text>
            </View>
          </View> */}

        </View>
        <View style={styles.orderChat}>
          <View style={styles.chatButton}>
            <Text style={styles.btnText}>Request a STOCK</Text>
          </View>
        </View>
    </View>
  </>
  );

const LiveSales = () => {
  // const ref = firebase.storage().ref('products/71gj+H8jjUL._AC_SL1100_.jpg');
  // const url = ref.getDownloadURL();
  // console.log(url)
    const wishlist = useWishes();
    

    const renderItem = ({ item }) => (
        <Item proImg={item.proImg} imagess={item.imageURL} departureHour={item.departureHour} arriveHour={item.arriveHour} w_from_long={item.w_from_long} w_to_long={item.w_to_long} name={item.name} surname={item.surname} leftTime={item.leftTime} maxCapacity={item.maxCapacity} productName={item.productName} productPrice={item.productPrice} imageName={item.imageName} spec1={item.spec1} spec2={item.spec2} spec1desc={item.spec1desc} spec2desc={item.spec2desc} />
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


const styles = StyleSheet.create({
  pName: {
    color: '#798294',
    fontSize: 18,
    marginTop: 10
  },
  specline1: {
    color: '#798294',
    fontSize: 14,
    marginTop: 8
  },
  specline2: {
    color: '#798294',
    fontSize: 14,
    marginTop: 2  
  },
  dots: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  dotsText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#A90216',
    marginTop: -12,
    marginRight: 5,
    marginLeft: 6
  },
  dotsTextRight: {
    fontWeight: '600',
    fontSize: 18,
    color: '#A90216',
    marginTop: -12,
    marginRight: 7,
    marginLeft: 3
  },
  timeContainer: {
    flexDirection: 'row',
    
  },
  timeLeft: {
    display: 'flex',
    height: 90,
    paddingTop: 10,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  day: {
    fontSize: 28,
    color: '#A90216',
    opacity: 0.65,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hour: {
    fontSize: 28,
    color: '#A90216',
    fontWeight: 'bold',
    opacity: 0.65,
    textAlign: 'center',
  },
  min: {
    fontSize: 28,
    color: '#A90216',
    fontWeight: 'bold',
    opacity: 0.65,
    textAlign: 'center',
  },
  dayText: {
    fontSize: 12,
    color: '#9FABC4',
    opacity: 0.65,
    fontWeight: '600',
    textAlign: 'center',
  },
  hourText: {
    fontSize: 12,
    color: '#9FABC4',
    opacity: 0.65,
    fontWeight: '600',
    textAlign: 'center',
  },
  minText: {
    fontSize: 12,
    color: '#9FABC4',
    opacity: 0.65,
    fontWeight: '600',
    textAlign: 'center',
  },
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
    fontSize: 16,
    fontWeight: '300',
    // color: '#6da0ae',
    color: '#1F386D',
    textAlign: 'left',
    flexDirection: 'column',
    minWidth: 35,
  },
  longright: {
    fontSize: 16,
    fontWeight: '300',
    // color: '#6da0ae',
    color: '#1F386D',
    textAlign: 'right',
    flexDirection: 'column',
    minWidth: 35,
  },
  timeright: {
    fontSize: 22,
    fontWeight: 'bold',
    // color: '#6da0ae',
    color: '#1F386D',
    textAlign: 'right',
    flexDirection: 'column',
    width: 65,
  },
  timeleft: {
    fontSize: 22,
    fontWeight: 'bold',
    // color: '#6da0ae',
    color: '#1F386D',
    textAlign: 'left',
    flexDirection: 'column',
    width: 65,
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
    
  },
  pcs: {
    color: '#9FABC4'
  },
  pcsNumber : {
    fontWeight: '600',
    color: '#9FABC4',
    fontSize: 15
  },
  in : {
    fontWeight: '400',
    color: '#9FABC4',
    fontSize: 12
  },
  Stock : {
    fontWeight: '600',
    color: '#77D2B3',
    fontSize: 15
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
    height: 250,
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
    textAlign: 'left',
    color: '#9FABC4',
    fontWeight: '400',
    paddingLeft: 20,
  },
  prices: {
    textAlign: 'right',
    color: '#D0021B',
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
  colleft: {
    
  },
  colright: {

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
    marginLeft: 23
    
  },
  flightDate: {
    width: '100%',
    height: 16,
    marginTop: -17,
    textAlign: 'center',
    fontSize: 13,
    color: '#9FABC4'
  }
});


export default LiveSales;