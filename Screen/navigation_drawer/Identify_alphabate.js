import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';


// class  Idalpha extends React.Component {
//   render (){
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text> Identify Alphabate</Text>
//         </View>
//     );
//   }
// }
// export default Idalpha; 
export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'A', code: '#1abc9c' },
    { name: 'B', code: '#2ecc71' },
    { name: 'C', code: '#3498db' },
    { name: 'D', code: '#9b59b6' },
    { name: 'E', code: '#34495e' },
    { name: 'F', code: '#16a085' },
    { name: 'G', code: '#27ae60' },
    { name: 'H', code: '#2980b9' },
    { name: 'I', code: '#8e44ad' },
    { name: 'J', code: '#2c3e50' },
    { name: 'K', code: '#f1c40f' },
    { name: 'L', code: '#e67e22' },
    { name: 'M', code: '#e74c3c' },
    { name: 'N', code: '#1abc9c' },
    { name: 'O', code: '#95a5a6' },
    { name: 'P', code: '#f39c12' },
    { name: 'Q', code: '#d35400' },
    { name: 'R', code: '#c0392b' },
    { name: 'S', code: '#bdc3c7' },
    { name: 'T', code: '#7f8c8d' },
    { name: 'U', code: '#16a085' },
    { name: 'V', code: '#34495e' },
    { name: 'W', code: '#2980b9' },
    { name: 'X', code: '#7f8c8d' },
    { name: 'Y', code: '#16a085' },
    { name: 'Z', code: '#f1c40f' },


  ]);
 
  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          {/* <Text style={styles.itemCode}>{item.code}</Text> */}
        </View>
      )}
    />
  );
}
 
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})