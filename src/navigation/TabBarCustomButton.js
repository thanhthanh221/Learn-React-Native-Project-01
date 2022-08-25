import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Svg, {Path} from 'react-native-svg';

export const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.background}></View>
          <Svg width={70} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={'#ffffff'}
            />
          </Svg>
          <View style={styles.footerBackground}></View>
        </View>

        <TouchableOpacity style={styles.buttonTrue} onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.buttonFalse}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  buttonFalse: {
    flex: 1,
    height: 60,
    backgroundColor: '#FFFFFF',
  },
  buttonTrue: {
    flex: 1,
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flexDirection:'row',
    position: 'absolute',
    top: 0,
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    flex: 1
  },
  footerBackground: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
