import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Ultimas Noticias</Text>
      <ScrollView style={styles.scrollView}>
        <Text>Lista de noticias</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingVertical: 10,
  },
  scrollView: {

  }
});
