# Write a program that asks the user to enter an integer greater than 0, then 
# asks if the user wants to determine the sum or product of all numbers between
# 1 and the entered integer.

=begin
Examples:
>> Please enter an integer greater than 0:
5
>> Enter 's' to compute the sum, 'p' to compute the product.
s
The sum of the integers between 1 and 5 is 15.


>> Please enter an integer greater than 0:
6
>> Enter 's' to compute the sum, 'p' to compute the product.
p
The product of the integers between 1 and 6 is 720.
=end

def sum(int)
  sum = 1
  while int > 1
    sum += int
    int -= 1
  end
  return sum
end

def product(int)
  product = 1
  while int > 1
    product *= int
    int -= 1
  end
  return product
end

puts '>> Please enter an integer greater than 0:'
int = gets.chomp.to_i

loop do
  puts 'Enter \'s\' to compute the sum \'p\' to compute the product of all integers'
  puts "between #{int} and 1"
  selection = gets.chomp
  
  if selection == 's'
    sum = sum(int)
    puts "The sum of the integers between 1 and #{int} is #{sum}."
    break
  elsif selection == 'p'
    product = product(int)
    puts "The product of the integers between 1 and #{int} is #{product}."
    break
  else
    puts "Invalid input."
  end
end