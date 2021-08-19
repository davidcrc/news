import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import { getNewsApi } from './src/api/news';
import { map } from 'lodash';
import New from './src/components/New';
import { Noticia } from './src/api/api';

interface AppProps {}

const App: React.FunctionComponent<AppProps> = props => {
  const [news, setNews] = useState<Array<Noticia>>([]);

  const getNews = async () => {
    const response = await getNewsApi();
    console.log('data', response);
    setNews(response);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.title}>Ultimas Noticias</Text>
      <ScrollView style={styles.scrollView}>
        {map(news, (noticia, index) => (
          <New noticia={noticia} />
        ))}
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
