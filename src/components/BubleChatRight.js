import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { Text } from '.'
import moment from 'moment'

// Icon from library react-native-vector-icon
import AntDesign from 'react-native-vector-icons/AntDesign'

const BubbleChatRight = (props) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.piBuble}>
          <View style={styles.bubleChat}>
            <Text size={12} style={{marginRight: 35}} type='medium' color='#FFF'>{props.data?.message}</Text>
          </View>
          <Text style={{position: 'absolute', bottom: 5, right: 10, marginLeft: 30}} size={10} color='#FFF'>{moment(props.data?.date).format('HH:mm')}</Text>
        </View>
      </View>
      <View style={styles.avaUser}>
        <Text color='#FFF' type='bold'>{props.data?.username?.substring(0,1)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  piBuble: {
    borderRadius: 3,
    alignSelf: 'flex-end',
  },
  bubleChat: {
    borderRadius: 8,
    borderColor: '#075E54',
    padding: 10,
    backgroundColor: '#075E54',
    alignItems: 'flex-end'
  },
  avaUser: {
    borderRadius: 100,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#075E54',
    marginLeft: 10,
    alignSelf: 'flex-start'
  }
})

export default BubbleChatRight;