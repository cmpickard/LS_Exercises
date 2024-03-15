=begin
class RomanNumeral
  # will probably want to store values in a ROMANS hash -- Q is organization
  # maybe 2-d hash, with outer hash keys = digits and inner = place symbols

  ROMS = { 9 => {thousands: '', hundreds: 'CM', tens: 'XC', ones: 'IX'},
           8 => {thousands: '', hundreds: 'DCCC', tens: 'LXXX', ones: 'VIII'},
           7 => {thousands: '', hundreds: 'DCC', tens: 'LXX', ones: 'VII'},
           6 => {thousands: '', hundreds: 'DC', tens: 'LX', ones: 'VI'},
           5 => {thousands: '', hundreds: 'D', tens: 'L', ones: 'V'},
           4 => {thousands: '', hundreds: 'CD', tens: 'XL', ones: 'IV'},
           3 => {thousands: 'MMM', hundreds: 'CCC', tens: 'XXX', ones: 'III'},
           2 => {thousands: 'MM', hundreds: 'CC', tens: 'XX', ones: 'II'},
           1 => {thousands: 'M', hundreds: 'C', tens: 'X', ones: 'I'},
           0 => {thousands: '', hundreds: '', tens: '', ones: ''} }

  # maybe add a PLACE_SYMS array for easier lookup?
  PLACE_SYMS = [:thousands, :hundreds, :tens, :ones]

  def initialize(decimal)
    # accept 1 arg
    # don't need to validate
    # all input will be positive int between 1 and 3000
    # could use helper method to separate digits into places, store as array
    @decimal_arr = decimal_places(decimal)
  end

  def to_roman
    # should return string that corresponds to the roman numeral value of the
    # int saved to @decimal

    decimal_arr.each_with_object('').with_index do |(num, roman_str), idx|
      roman_str << ROMANS[num][PLACE_SYMS[idx]]
    end
  end

  private

  attr_reader :decimal_arr

  def decimal_places(decimal)
    [decimal / 1000, (decimal % 1000) / 100, (decimal % 100) /10, decimal % 10]
  end
end
=end

class RomanNumeral
  ROMS = { 9 => { hundreds: 'CM', tens: 'XC', ones: 'IX' },
           8 => { hundreds: 'DCCC', tens: 'LXXX', ones: 'VIII' },
           7 => { hundreds: 'DCC', tens: 'LXX', ones: 'VII' },
           6 => { hundreds: 'DC', tens: 'LX', ones: 'VI' },
           5 => { hundreds: 'D', tens: 'L', ones: 'V' },
           4 => { hundreds: 'CD', tens: 'XL', ones: 'IV' },
           3 => { thousands: 'MMM', hundreds: 'CCC', tens: 'XXX', ones: 'III' },
           2 => { thousands: 'MM', hundreds: 'CC', tens: 'XX', ones: 'II' },
           1 => { thousands: 'M', hundreds: 'C', tens: 'X', ones: 'I' },
           0 => { thousands: '', hundreds: '', tens: '', ones: '' } }

  PLACE_SYMS = [:thousands, :hundreds, :tens, :ones]

  def initialize(decimal)
    @decimal_arr = decimal_places(decimal)
  end

  def to_roman
    @decimal_arr.each_with_object('').with_index do |(num, roman_str), idx|
      roman_str << ROMS[num][PLACE_SYMS[idx]]
    end
  end

  private

  def decimal_places(decimal)
    [decimal / 1000, (decimal % 1000) / 100, (decimal % 100) / 10, decimal % 10]
  end
end
