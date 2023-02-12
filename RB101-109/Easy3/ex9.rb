# Write a method that returns true if its integer argument is palindromic, 
#false otherwise. A palindromic number reads the same forwards and backwards.

=begin
Examples:
palindromic_number?(34543) == true
palindromic_number?(123210) == false
palindromic_number?(22) == true
palindromic_number?(5) == true
=end

def palindromic_number?(int)
  string = int.to_s
  return true if string.size < 2
  first = string.slice!(0,1)
  last = string.slice!(string.size - 1, 1)
  return false if first != last
  palindromic_number?(string)
end

puts palindromic_number?(34543) #== true
puts palindromic_number?(123210) #== false
puts palindromic_number?(22) #== true
puts palindromic_number?(5) #== true
puts palindromic_number?(005) #== false
# ^ that edge case doesn't work, but i'm not sure how to fix it