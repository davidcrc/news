import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Noticia } from '../api/api';
import urlParse from 'url-parse';
import moment from 'moment';
import 'moment/locale/es';
interface NewProps {
  noticia: Noticia;
}

const New: React.FunctionComponent<NewProps> = props => {
  // console.log('las props', props);
  const { noticia } = props;
  const { title, url, created_at } = noticia;
  return (
    <View style={styles.new}>
      <Text style={styles.url}>{urlParse(url).host}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.created_at}>
        {moment(created_at).locale('es').startOf('hour').fromNow()}
      </Text>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({
  new: {
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  url: {
    paddingBottom: 5,
    color: 'grey',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  created_at: {},
});
