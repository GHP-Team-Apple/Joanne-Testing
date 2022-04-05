// import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import TestCheckbox from "./TestCheckbox";
import { Constants } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const categories = [
  { id: 1, type: "Music", isChecked: false },
  { id: 2, type: "Business", isChecked: false },
  { id: 3, type: "Holiday", isChecked: false },
];

// const FilterTest = () => {
//   const [categoryList, setCategoryList] = useState(categories);
//   //   const [isMusic, setMusic] = useState(false);
//   //   const [isBusiness, setBusiness] = useState(false);
//   //   const [isHoliday, setHoliday] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);

//   const handleCat = (catId) => {
//     for (let i = 0; i < categoryList.length; i++) {
//       if (categoryList[i].id === catId) {
//         const isChecked = categoryList[i].isChecked;
//         categoryList[i].isChecked = !isChecked;
//       }
//     }
//     setCategoryList(categoryList);
//     console.log(categoryList);
//   };

//   const handleNoFilter = () => {
//     for (let i = 0; i < categoryList.length; i++) {
//       categoryList[i].isChecked = false;
//     }
//     setRefreshing(true);
//     setRefreshing(false);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView

//         refreshControl={<RefreshControl refreshing={refreshing} />}
//       >
//         {categoryList.map((category, idx) => {
//           return (
//             <TestCheckbox key={idx} category={category} handleCat={handleCat} />
//           );
//         })}

//       <Pressable style={styles.button} onPress={handleNoFilter}>
//         <Text>No Filter</Text>
//       </Pressable>
//       </ScrollView>
//     </View>
//   );
// };

// export default FilterTest;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "pink",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   section: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   paragraph: {
//     fontSize: 15,
//   },
//   checkbox: {
//     margin: 8,
//   },
//   space: {
//     width: 20, // or whatever size you need
//     height: 20,
//   },
//   button: {
//     backgroundColor: "#0782F9",
//     width: "25%",
//     padding: 10,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
// });


// ---------------------------------------------------------------


// {
//   /* <View style={styles.section}>
//         <Checkbox
//           style={styles.checkbox}
//           value={isMusic}
//           onValueChange={setMusic}
//         //   onChange={handleMusic}
//           color={isMusic ? "#4630EB" : undefined}
//         />
//         <Text style={styles.paragraph}>Music</Text>
//       </View>

//       <View style={styles.section}>
//         <Checkbox
//           style={styles.checkbox}
//           value={isBusiness}
//           onValueChange={setBusiness}
//           color={isBusiness ? "#4630EB" : undefined}
//         />
//         <Text style={styles.paragraph}>Business</Text>
//       </View>

//       <View style={styles.section}>
//         <Checkbox
//           style={styles.checkbox}
//           value={isHoliday}
//           onValueChange={setHoliday}
//           color={isHoliday ? "#4630EB" : undefined}
//         />
//         <Text style={styles.paragraph}>Holiday</Text>
//       </View> */
// }

// ------------------------------------------------------

// const wait = (timeout) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout));
// };

// const FilterTest = () => {
//   const [categoryList, setCategoryList] = useState(categories);
//   const [refreshing, setRefreshing] = React.useState(false);

//   const handleCat = (catId) => {
//     for (let i = 0; i < categoryList.length; i++) {
//       if (categoryList[i].id === catId) {
//         const isChecked = categoryList[i].isChecked;
//         categoryList[i].isChecked = !isChecked;
//       }
//     }
//     setCategoryList(categoryList);
//     console.log(categoryList);
//   };

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(1000).then(() => setRefreshing(false));
//   }, []);

//   const handleNoFilter = () => {
//     for (let i = 0; i < categoryList.length; i++) {
//       categoryList[i].isChecked = false;
//     }
//     onRefresh();
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} />
//         }
//       >
//         {categoryList.map((category, idx) => {
//           return (
//             <TestCheckbox key={idx} category={category} handleCat={handleCat} />
//           );
//         })}
//         <Text>Pull down to see RefreshControl indicator</Text>
//       </ScrollView>
//       <Pressable style={styles.button} onPress={handleNoFilter}>
//         <Text>No Filter</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: "pink",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     backgroundColor: "#0782F9",
//     width: "25%",
//     padding: 10,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
// });



// ---------------------------------------------------------------

const FilterTest = () => {
 
  // const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  // const [sliderOneValue, setSliderOneValue] = React.useState([2]);

  // const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

  // const sliderOneValuesChange = (values) => setSliderOneValue(values);

  // const sliderOneValuesChangeFinish = () => {
  //   setSliderOneChanging(false);
  //   handleMaxDistance(sliderOneValue);
  // };


  return (
    <View style={styles.container}>
      {/* <View style={styles.slideContainer}>
          <Text>Maximum Distance: {sliderOneValue} miles</Text>
          <MultiSlider
            values={sliderOneValue}
            sliderLength={280}
            min={1}
            max={10}
            step={1}
            onValuesChangeStart={sliderOneValuesChangeStart}
            onValuesChange={sliderOneValuesChange}
            onValuesChangeFinish={sliderOneValuesChangeFinish}
            selectedStyle={{
              backgroundColor: "#4630EB",
            }}
            showStepMarkers={true}
          />
        </View> */}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

});



export default FilterTest;
