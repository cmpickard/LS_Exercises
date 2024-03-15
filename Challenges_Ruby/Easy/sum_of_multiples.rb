=begin
class SumOfMultiples
  def initialize(*ints)
    # since input is either nothing or an arbitrary list of ints, should use
    # splat to capture them in an arr. for the cases where there are no args
    # passed in, we are supposed to use 3 and 5 as multiples. So check if arr
    # is []: if so, use [3, 5] else use arr
    @multiples = ints == [] ? [3, 5] : ints.sort
  end

  def self.to(num)
    SumOfMultiples.new.to(num)
  end

  def to(num)
    # num is the integer input which is the value that we'll use to set the
    # upper limit on which ints we'll inspect for divisibility into our mults

    # we'll return an int corresponding to sum of mults from those ints

    # iterate from the smallest multiple in @multiples up to one less than the
    # num -- could use a range: (multiples[0]...num)
    # initialize a sum at 0
    # for each number, we check if it is divisible by any of the values in the
    # multiples array. If so, add the number to sum. Else, next.
      # to check for divisibility: iterate through the multiples array and
      # return true if any of them evenly divide into the num.
    # return sum

    (multiples[0]...num).to_a.reduce(0) do |sum, n|
      multiples.any? { |mult| (n % mult).zero? } ? sum + n : sum
    end
  end

  private

  attr_reader :multiples
end
=end

class SumOfMultiples
  def initialize(*ints)
    @multiples = ints == [] ? [3, 5] : ints.sort
  end

  def self.to(num)
    SumOfMultiples.new.to(num)
  end

  def to(num)
    (multiples[0]...num).to_a.reduce(0) do |sum, n|
      multiples.any? { |mult| (n % mult).zero? } ? sum + n : sum
    end
  end

  private

  attr_reader :multiples
end
