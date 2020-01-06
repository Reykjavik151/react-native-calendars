import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.agenda.list';

export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return  StyleSheet.create({
    container: {
      justifyContent: 'center'
    },
    dayNum: {
      fontSize: 28,
      fontWeight: '200',
      fontFamily: appStyle.textDayFontFamily,
      color: appStyle.agendaDayNumColor
    },
    dayText: {
      fontSize: 14,
      fontWeight: appStyle.textDayFontWeight,
      fontFamily: appStyle.textDayFontFamily,
      color: appStyle.agendaDayTextColor,
      backgroundColor: 'rgba(0,0,0,0)',
      marginTop: -5
    },
    day: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10
    },
    today: {
      color: appStyle.agendaTodayColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
