function isValidDate(date){
  return hasValidFormat(date);
  return hasMatchingSeparators(date);
}

function hasValidFormat(date){
  var dateReg = /^([0][1-9]|[1][0-2])[./-]([0][1-9]|[1]\d{1}|[2]\d{1}|[3][0-1])[./-](\d{2}$|[1][8-9]\d{2}|[2][0][0-1][0-7])$/;
  return dateReg.test(date);
}

function hasMatchingSeparators(date){
  return date.charAt(2) === date.charAt(5);
}

function hasValidMonthLengths(date){
  var monthStr = date.substr(0,2);
  var monthNum = Number(monthStr);
  var dayStr = date.substr(3,4);
  var dayNum = Number(dayStr);
  if (monthNum === 1 && dayNum < 32) {
    return true;
  } else if (monthNum === 2){
      if (leapYear(date) === true && dayNum < 30) {
        return true;
      } else if (leapYear(date) === false && dayNum < 29) {
        return true
      }
  } else if (monthNum === 3  && dayNum < 32){
    return true;
  } else if (monthNum === 4  && dayNum < 31){
    return true;
  } else if (monthNum === 5 && dayNum < 32){
    return true;
  } else if (monthNum === 6 && dayNum < 31){
    return true;
  } else if (monthNum === 7 && dayNum < 32){
    return true;
  } else if (monthNum === 8 && dayNum < 32){
    return true;
  } else if (monthNum === 9 && dayNum < 31){
    return true;
  } else if (monthNum === 10 && dayNum < 32){
    return true;
  } else if (monthNum === 11 && dayNum < 31){
    return true;
  } else if (monthNum === 12 && dayNum < 32){
    return true;
  } else {
    return false;
  }
}

function leapYear(date)
{
  var yearStr = date.substr(6);
  var year = Number(yearStr);
  return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0);
}
