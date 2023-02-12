=begin
Write a program that asks the user to enter two integers, then prints the 
results of dividing the first by the second. The second number must not be 0. 
Since this is user input, there's a good chance that the user won't enter a 
valid integer. Therefore, you must validate the input to be sure it is an 
integer. You can use the following code to determine whether the input is an 
integer:

def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

It returns true if the input string can be converted to an integer and back to 
a string without loss of information, false otherwise. It's not a perfect 
solution in that some inputs that are otherwise valid (such as 003) will fail, 
but it is sufficient for this exercise.
=end

def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

int1 = ""
int2 = ""

loop do
  puts "Gimme two ints and I'll divide em! First, what's the numerator?"
  int1 = gets.chomp
  break if valid_number?(int1)
  puts "not a valid input."
end

loop do
  puts "What's the denominator?"
  int2 = gets.chomp
  break if valid_number?(int2)
  puts "not a valid input."
end

int1 = int1.to_i
int2 = int2.to_i

if int2 == 0 
  puts "Divide by zero error!"
else
  puts "Your division result is: #{int1 / int2}"
end
