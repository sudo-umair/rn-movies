import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Pill from './pill';
import { randomBGColorGenerator } from '../../helpers';
import { PillContainerProps } from '../../interfaces/components';

const PillContainer = ({ data, section }: PillContainerProps) => {
  const values = data?.length > 0 ? data : ['N/A'];
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{section}</Text>
      <View style={styles.pillContainer}>
        {values.map((item, index) => (
          <Pill
            key={index}
            style={{ backgroundColor: randomBGColorGenerator(item) }}
            title={item}
          />
        ))}
      </View>
    </View>
  );
};

export default PillContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  pillContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
