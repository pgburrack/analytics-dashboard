export function isEmail (str) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
}

export function isAlpha (str) {
  return /^[a-z]+$/i.test(str);
}

export function isInt (str) {
  return typeof str === 'number' && Math.floor(str) === str || typeof str === 'string' && /^(?:[-]?(?:0|[1-9][0-9]*))$/.test(str);
}

export function isNumeric (str) {
  return typeof str === 'number' || typeof str === 'string' && /^[-]?[0-9]+$/.test(str);
}

export function isNegativeZero (str) {
  return typeof str === 'string' && /^-0/.test(str) || typeof str === 'number' && ('' + str) === '-0';
}

export function isPositiveInt (str) {
  return /^(?:(?:0|[1-9][0-9]*))$/.test(str);
}

export function isFloat (str) {
  if (str === '' || str === '.') {
    return false;
  }

  return /^(?:[-]?(?:[0-9]+))(?:\.[0-9]+)?(?:[eE][\+\-]?(?:[0-9]+))?$/.test(str);
}

export function isPositiveFloat (str) {
  if (str === '' || str === '.') {
    return false;
  }
  return /^(?:[0-9]+)?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/.test(str);
}

export function isLength (str, options) {
  options = options || {};
  const min = options.min || 0;

  return str.length >= min && (!options.max || str.length <= options.max);
}

export function isEmpty (str) {
  return !str || (typeof str === 'string' && !str.trim());
}

export function isSpacesExists (str) {
  return typeof str === 'string' && /\s+/.test(str);
}

export function isEqual (str1, str2) {
  return str1 === str2;
}
