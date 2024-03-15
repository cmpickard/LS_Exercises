=begin

class PerfectNumber
  def self.check_valid(num)
    raise StandardError unless num.class == Integer && num > 0
  end

  def self.classify(num)
    # input should be a positive int but will need to raise StandardError if not
    # call helper method for that?
    # find all divisors including 1 and the num itself. sum them. then compare
    # with num. return string corresponding to result
    # RE: find all divisors
    # iterate from 1 to num / 2. Add el to divisors collection
    check_valid(num)
    divs = (1..num / 2).to_a.each_with_object([]) do |int, divs|
      divs << int if num % int == 0
    end
    return 'perfect' if divs.sum == num
    divs.sum > num ? 'abundant' : 'deficient'
  end
end
=end

class PerfectNumber
  def self.classify(num)
    raise StandardError unless num.instance_of?(Integer) && num.positive?

    sum = (1..num / 2).to_a.inject { |acc, n| (num % n).zero? ? acc + n : acc }
    return 'perfect' if sum == num
    sum > num ? 'abundant' : 'deficient'
  end
end
