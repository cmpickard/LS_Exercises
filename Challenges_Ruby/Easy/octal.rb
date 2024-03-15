=begin
class Octal
  def initialize(octal)
    # input is a string repr of an octal num. Should return 0 if invalid input
    # otherwise return decimal equiv
    # assign to instance var
    @octal = octal
  end

  def to_decimal
    # first validate string and return 0 if invalid
    #   could use regex group [^0-7] and return 0 if that matches anything

    # convert octal str to decimal int:
    # use counter to keep track of exponent -- start at -1, if using reduce
    # otherwise, could use index?

    # convert octal str to char array and reverse the order so that the ones
    # place is first and the exponent can increase by 1 as we go along the arr
    # if inject: start acc at 0 -- and add the current int (convert from str) *
    # 8 ** (exponent)

    return 0 if @octal =~ /[^0-7]/
    counter = -1
    @octal.chars.reverse.inject(0) do |acc, int_str|
      counter +=1
      acc + (int_str.to_i * (8 ** counter))
    end
  end
end
=end

class Octal
  def initialize(octal)
    @octal = octal =~ /[^0-7]/ ? 0 : octal.to_i
  end

  def to_decimal
    @octal.digits.map.with_index { |int, exp| (int.to_i * (8**exp)) }.sum
  end
end
