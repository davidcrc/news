import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import { getNewsApi } from './src/api/news';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  const [news, setNews] = useState(null);

  const getNews = async () => {
    const response = await getNewsApi();
    console.log('data', response);
  };

  useEffect(() => {
    getNews();
  }, []);

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
  scrollView: {},
});
