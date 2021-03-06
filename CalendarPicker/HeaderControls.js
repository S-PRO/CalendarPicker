import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';

export default function HeaderControls(props) {
  const {
    onHeaderDatePress,
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    nextTitle,
    textStyle,
    previousComponent,
    nextComponent
  } = props;
  const MONTHS = months? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : 'Previous';
  const next = nextTitle ? nextTitle : 'Next';
  const month = MONTHS[currentMonth];
  const year = currentYear;

  return (
    <View style={styles.headerWrapper}>
      <Controls
        component={previousComponent}
        label={previous}
        onPressControl={onPressPrevious}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
      />
      <TouchableOpacity onPress={onHeaderDatePress}>
        <Text allowFontScaling={false} style={[styles.monthLabel, textStyle]}>
           { month } { year }
        </Text>
      </TouchableOpacity>
      <Controls
        component={nextComponent}
        label={next}
        onPressControl={onPressNext}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
      />
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};
