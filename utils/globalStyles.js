import { StyleSheet } from 'react-native'
import { purple, textColor, textRed, white } from './colors'
import { vietnamMedium, vietnamRegular } from './fonts'

const globalStyles = StyleSheet.create({
  viewContainer: {
    marginLeft: 16,
    marginRight: 16
  },
  title: {
    marginTop: 16,
    fontSize: 40,
    fontFamily: vietnamMedium,
    color: textColor
  },
  btnPrimary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderRadius: 10,
    backgroundColor: purple
  },
  btnSecondary: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    height: 50,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 10
  },
  btnPrimaryText: {
    color: white,
    fontSize: 14,
    fontFamily: vietnamMedium,
    textTransform: 'uppercase'
  },
  btnSecondaryText: {
    color: purple,
    fontSize: 12,
    fontFamily: vietnamMedium,
    textTransform: 'uppercase'
  },
  textInput: {
    height: 50,
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
    fontFamily: vietnamRegular,
  },
  inputErrorText: {
    marginTop: 4,
    marginBottom: 4,
    color: textRed,
    fontSize: 14,
    fontFamily: vietnamMedium,
  }
});

export default globalStyles;