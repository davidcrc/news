import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Noticia } from '../api/api';

interface NewProps {
  noticia: Noticia;
}

const New: React.FunctionComponent<NewProps> = props => {
  // console.log('las props', props);
  const { noticia } = props;
  const { title, url, created_at } = noticia;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default New;

const styles = StyleSheet.create({});
