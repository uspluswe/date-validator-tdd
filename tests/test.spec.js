describe('isValidDate', function(){
  describe('hasValidFormat', function(){
    it('should only accept numbers as dates', function(){
      expect(hasValidFormat('f/08/09')).toBe(false); // invalid - has a letter
      expect(hasValidFormat('09----09')).toBe(false); // invalid - has invalid characters
      expect(hasValidFormat('february')).toBe(false); // invalid - is a word
      expect(hasValidFormat('09.08.09')).toBe(true); // valid - has only numbers
      })
    it('should be the correct length', function(){
      expect(hasValidFormat('02/01/19934')).toBe(false); // invalid - too long
      expect(hasValidFormat('02-01-034')).toBe(false); // invalid - too short
      expect(hasValidFormat('12.07.1993')).toBe(true); // valid - 10 characters
      expect(hasValidFormat('07-11-15')).toBe(true); // valid - 8 characters
        })
    it('should have valid month numbers (01-12)', function(){
      expect(hasValidFormat('51/07/1993')).toBe(false); // invalid - invalid month number
      expect(hasValidFormat('12-07-1993')).toBe(true); // valid - valid month number
    })
    it('should have valid days in the month (01-31)', function(){
      expect(hasValidFormat('12-35-1963')).toBe(false); // invalid - invalid day
      expect(hasValidFormat('04-03-02')).toBe(true); // valid - valid day
    })
    it('should only include the last 120 years', function(){
      expect(hasValidFormat('07.04.1776')).toBe(false); // invalid - not within the last 120 years
      expect(hasValidFormat('07-11-2015')).toBe(true); // valid - within the last 120 years
    })
    it('should have valid date separators', function(){
      expect(hasValidFormat('02:19:2000')).toBe(false); // invalid - invalid separators
      expect(hasValidFormat('09/14/1987')).toBe(true); // valid - valid separators
    })
  })

  describe('hasMatchingSeparators', function(){
    it('should only have matching separators', function(){
      expect(hasMatchingSeparators('09.17-2017')).toBe(false); // invalid - mixed separators
      expect(hasMatchingSeparators('11-24-2016')).toBe(true); // valid - matching separators
    })
  })

  describe('hasValidMonthLengths', function(){
    it('should have valid month lengths', function(){
      expect(hasValidMonthLengths('05-36-1962')).toBe(false); // invalid - month too long
      expect(hasValidMonthLengths('06.07.2008')).toBe(true); // valid - valid month length
    })
  })
});