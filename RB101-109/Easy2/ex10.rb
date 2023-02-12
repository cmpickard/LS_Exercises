# Write a method that takes a number as an argument. If the argument is a 
# positive number, return the negative of that number. 
# If the number is 0 or negative, return the original number.

=begin
Examples:
negative(5) == -5
negative(-3) == -3
negative(0) == 0      # There's no such thing as -0 in ruby
=end

def negativizer(int)
  int > 0 ? int*-1 : int
end

puts negativizer(5) == -5
puts negativizer(-3) == -3
puts negativizer(0) == 0  
