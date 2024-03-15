# Write a method that returns a list of all of the divisors of the positive 
# integer passed in as an argument. The return value can be in any sequence 
# you wish.

# Examples
# divisors(1) == [1]
# divisors(7) == [1, 7]
# divisors(12) == [1, 2, 3, 4, 6, 12]
# divisors(98) == [1, 2, 7, 14, 49, 98]
# divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute


def divisors(int)
  sqrt = Math.sqrt(int)
  divisors = [1, int]
  (2..sqrt).to_a.each { |div| divisors << div << int/div if int % div == 0 }
  divisors.uniq.sort
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

# How fast can you make your solution go? How big of a number can you quickly 
# duce to its divisors? Can you make divisors(999962000357) return almost 
# instantly? (The divisors are [1, 999979, 999983, 999962000357].) 
# Hint: half of the divisors gives you the other half.

# 36: [1, 2, 3, 4, 6, 9, 12, 18, 36]
# (1, 36), (2, 18), (3, 12), (4, 9) 6
# 40: [1, 2, 4, 5, 8, 10, 20, 40]
# (1, 40), (2, 20), (4, 10), (5, 8)

def divisors2(int)
  # sqrt = Math.sqrt(int).to_i
  # divisors = []
  # 1.upto(sqrt) do |num|
  #   if int % num == 0
  #     divisors << num << (int / num)
  #   end
  # end
  # divisors.sort
end
# p divisors2(99400891) == [1, 9967, 9973, 99400891] # may take a minute
# p divisors2(999962000357) == [1, 999979, 999983, 999962000357]