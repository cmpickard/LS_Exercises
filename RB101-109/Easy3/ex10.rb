#Write a method that takes a string argument, and returns true if all of the 
#alphabetic characters inside the string are uppercase, false otherwise. 
#Characters that are not alphabetic should be ignored.

=begin
Examples:
uppercase?('t') == false
uppercase?('T') == true
uppercase?('Four Score') == false
uppercase?('FOUR SCORE') == true
uppercase?('4SCORE!') == true
uppercase?('') == true
=end

LOWER_CASE_LETTERS = %w[a b c d e f g h i j k l m n o p q r s t u v w x y z]

def uppercase?(string)
  string.each_char { |char| return false if LOWER_CASE_LETTERS.include?(char) }
  return true
end

puts uppercase?('t') #== false
puts uppercase?('T') #== true
puts uppercase?('Four Score') #== false
puts uppercase?('FOUR SCORE') #== true
puts uppercase?('4SCORE!') #== true
puts uppercase?('') #== true