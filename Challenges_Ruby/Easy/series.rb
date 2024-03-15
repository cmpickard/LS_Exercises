=begin
class Series
  def initialize(int_str)
    # input will be a str representing the int to be chopped into series.
    # will need to do some validation later for slice requests where the slices
    # are larger than the int_str. But that won't take place here
    @int_str = int_str
  end

  def slices(n)
    # input is an integer representing the number of chars per substring in the
    # arr we're to return
    # the pre-output is an arr of substrings all of length n. Each substr should
    # consist of n consequtive chars from the @int_str, and the arr should
    # include all such substrings
    # that then needs to be converted. each substr should be converted to an
    # arr of chars, and then each char coerced to an int.
    # so the final output is a 2-D array

    # We'll want to compare the length of int_str with n. For two reasons:
    # first, if n is larger, we should raise an ArgumentError.
    # second, (int.size - n) is the number of substrings we need
    # iterate from 0 to (int.size - n). Those will be the starting idxs for
    # our substrs. On each iteration, we'll extract a substr of length n from
    # the @int_str starting from idx, and add it to an output arr

    # That done, we convert the substrs into char arrays, then the chars to ints

    strs = (int_str.size - n)
    raise ArgumentError if strs < 0
    arr = (0..strs).each_with_object([]) { |idx, arr| arr << int_str[idx, n] }
    arr.map { |str| str.chars.map(&:to_i) }
  end

  private

  attr_reader :int_str
end
=end

class Series
  def initialize(int_str)
    @int_str = int_str
  end

  def slices(n)
    strs = (int_str.size - n)
    raise ArgumentError if strs < 0
    arr = (0..strs).each_with_object([]) { |idx, obj| obj << int_str[idx, n] }
    arr.map { |str| str.chars.map(&:to_i) }
  end

  private

  attr_reader :int_str
end
