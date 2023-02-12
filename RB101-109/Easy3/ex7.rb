# Write a method that returns true if the string passed as an argument is a 
# palindrome, false otherwise. A palindrome reads the same forward and backward.
# For this exercise, case matters as does punctuation and spaces.

=begin
Examples:
palindrome?('madam') == true
palindrome?('Madam') == false          # (case matters)
palindrome?("madam i'm adam") == false # (all characters matter)
palindrome?('356653') == true
=end

def palindrome?(string)
  return true if string.size < 2
  first = string.slice!(0,1)
  last = string.slice!(string.size - 1, 1)
  return false if first != last
  palindrome?(string)
end

def palindrome_collection?(collection)
  collection == collection.reverse
end

puts palindrome?('l')
puts palindrome?("")
puts palindrome?("ll")
puts palindrome?("asd1dsa")
puts palindrome?('madam')
puts palindrome?('Madam')           # (case matters)
puts palindrome?("madam i'm adam")  # (all characters matter)
puts palindrome?('356653')

puts "Bonus method results: "
puts palindrome_collection?("madam")
puts palindrome_collection?([1,2,1])