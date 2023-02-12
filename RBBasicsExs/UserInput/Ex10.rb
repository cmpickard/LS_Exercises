=begin
Write a program that requests two integers from the user, adds them together, 
and then displays the result. Furthermore, insist that one of the integers be 
positive, and one negative; however, the order in which the two integers are 
entered does not matter.

Do not check for the positive/negative requirement until both integers are 
entered, and start over if the requirement is not met.

You may use the following method to validate input integers:

def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

=end

def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

input1 = ""
input2 = ""
int1 = nil
int2 = nil

loop do
  loop do
    puts "Give me one positive int and one negative int, in either order."
    puts "Integer number one is..."
    input1 = gets.chomp
    break if valid_number?(input1)
    puts "Invalid input! Must be positive or negative integer (and not zero!)"
  end
  puts "your first integer is: #{input1}"
  
  loop do
    puts "Great. Now give me your other integer."
    input2 = gets.chomp
    break if valid_number?(input2)
    "Invalid input! Must be positive or negative integer (and not zero!)"
  end
  puts "your second integer is: #{input2}"
  
  #check one is pos the other neg
  int1 = input1.to_i
  int2 = input2.to_i
  break if (int1 > 0 && int2 < 0) || (int1 < 0 && int2 > 0)
  puts "Start over! One int must be positive and the other negative!"
  
end

puts "The sum of your two integers is #{int1 + int2}."