import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { Text } from '.'
import moment from 'moment'

// Icon from library react-native-vector-icon
import AntDesign from 'react-native-vector-icons/AntDesign'

const BubbleChatLeft = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avaUser}>
        <Text color='#075E54' type='bold' size={12}>{props.data?.username?.substring(0,1)}</Text>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.piBuble}>
          <View style={styles.bubleChat}>
            <View>
              <Text style={{marginRight: 35}} size={12} type='medium'>{props.data?.message}</Text>
            </View>
          </View>
          <Text style={{position: 'absolute', bottom: 5, right: 10}} size={10}>{moment(props.data?.date).format('HH:mm')}</Text>
        </View>
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
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },
  bubleChat: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075E54',
    padding: 10,
    alignSelf: 'flex-start',
  },
  avaUser: {
    borderRadius: 100,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#075E54',
    borderWidth: 1,
    marginRight: 10,
    alignSelf: 'flex-start'
  }
})

export default BubbleChatLeft;