import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

//< FlatList>는 많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할 때 쓰이는 리액트네이티브 컴포넌트이다
//<ScrollView> 는 데이터가 화면에 벗어났을 때 단순히 Scroll을 생성 - 사용자와의 상호작용(swipe)을 통해 벗어난 부분을 볼 수 있게 해주는 데이 목적이 있다
// ScrollView는 출력해야 하는 데이터가 고정적이고 많지 않을 때 간단하게 사용할 수 있는 컴포넌트 */}
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Naver',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Google',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'KaKao',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const LoginWay = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default LoginWay;