# Write another method that returns true if the string passed as an argument is 
# a palindrome, false otherwise. This time, however, your method should be 
# case-insensitive, and it should ignore all non-alphanumeric characters. 
# If you wish, you may simplify things by calling the palindrome? method you
# wrote in the previous exercise.

=begin
Examples:
real_palindrome?('madam') == true
real_palindrome?('Madam') == true           # (case does not matter)
real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
real_palindrome?('356653') == true
real_palindrome?('356a653') == true
real_palindrome?('123ab321') == false
=end

ALPHA_NUMS = %w[a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 
                  6 7 8 9]

def string_cleaning(string)
  if string != nil
    string.downcase!
    string.delete!(" ")
  end
  clean_string = ''
  string.each_char do |char|
    if ALPHA_NUMS.include?(char)
      clean_string << char
    end
  end
  return clean_string
end
  
def real_palindrome?(string)
  clean_string = string_cleaning(string)
  palindrome?(clean_string)
end

def palindrome?(string)
  return true if string.size < 2
  first = string.slice!(0,1)
  last = string.slice!(string.size - 1, 1)
  return false if first != last
  palindrome?(string)
end

puts real_palindrome?('madam') #== true
puts real_palindrome?('Madam') #== true           # (case does not matter)
puts real_palindrome?("Madam, I'm Adam") #== true # (only alphanumerics matter)
puts real_palindrome?('356653') #== true
puts real_palindrome?('356a653') #== true
puts real_palindrome?('123ab321') #== false