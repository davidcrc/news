import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { Noticia } from '../api/api';
import urlParse from 'url-parse';
import moment from 'moment';
import 'moment/locale/es';
import { InAppBrowser } from 'react-native-inappbrowser-reborn';

interface NewProps {
  noticia: Noticia;
}

const New: React.FunctionComponent<NewProps> = props => {
  // console.log('las props', props);
  const { noticia } = props;
  const { title, url, created_at } = noticia;

  const openUrl = async (url: string) => {
    // Abrir en un navegador externo
    // Linking.openURL(url);

    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#000',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalPresentationStyle: 'fullScreen',
          modalTransitionStyle: 'coverVertical',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          toolbarColor: '#000',
          secondaryToolbarColor: 'black',
          navigationBarColor: 'black',
          navigationBarDividerColor: 'white',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right',
          },
          headers: {
            'my-custom-header': 'my custom header value',
          },
        });
        // Alert.alert(JSON.stringify(result));
      } else Linking.openURL(url);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <TouchableOpacity onPress={() => openUrl(url)}>
      <View style={styles.new}>
        <Text style={styles.url}>{urlParse(url).host}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.created_at}>
          {moment(created_at).locale('es').startOf('hour').fromNow()}
        </Text>
      </View>
    </TouchableOpacity>
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
