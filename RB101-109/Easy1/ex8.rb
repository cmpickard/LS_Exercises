# Write a method that takes a positive integer as an argument and returns that
# number with its digits reversed. Examples:

=begin
reversed_number(12345) == 54321
reversed_number(12213) == 31221
reversed_number(456) == 654
reversed_number(12000) == 21 # No leading zeros in return value!
reversed_number(12003) == 30021
reversed_number(1) == 1
=end
# Don't worry about arguments with leading zeros - Ruby sees those as octal 
# numbers, which will cause confusing results. For similar reasons, the return 
# value for our fourth example doesn't have any leading zeros.

def reversed_number(int)
  str = int.to_s
  str.reverse.to_i
end

puts reversed_number(12345)
puts reversed_number(12213)
puts reversed_number(456)
puts reversed_number(12000)
puts reversed_number(12003)
puts reversed_number(1)