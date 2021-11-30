import { format as formatFNS, parseISO } from 'date-fns'
import * as locales from 'date-fns/locale';
var validator = require('validator');
var passwordValidator = require('password-validator');

export const formatSeparatorDec = (value: any, decimal?: number) => {
    if (decimal || decimal === 0) value = Number(value).toFixed(decimal)
    return parseFloat((value || 0).toString().replace(/,/g, ''))
      .toLocaleString('en')
      .replace(/,/gi, ',')
  }

export const dateFormat = (
  value: any,
  format?: string,
  locale: string = 'id'
) => {
  const inputFormat = format ? format : 'dd MMM yyyy - HH:mm'
  try {
    if (typeof value === 'string') {
      return formatFNS(parseISO(value), inputFormat, {
        locale: (locales as any)[locale],
      })
    } else {
      return formatFNS(value, inputFormat, {
        locale: (locales as any)[locale],
      })
    }
  } catch (e) {
    return ''
  }
}

const validateEmail = (value) => {
  return validator.isEmail(value);
}

const validatePass = (value) => {
  // Create a schema
  var schema = new passwordValidator();
  schema
    .is().min(8)                                    // Minimum length 8
    .is().max(16)                                  // Maximum length 16
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                            // Must have at least 2 digits
    .has().not().spaces();                           // Should not have spaces

  return schema.validate(value);
}

const _FormData = () => {
  return new FormData();
}

export const globalVar = {
  _FormData, 
  validateEmail,
  validatePass,}
