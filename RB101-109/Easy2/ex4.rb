#Build a program that displays when the user will retire and how many years she 
#has to work till retirement.

=begin
Example:
What is your age? 30
At what age would you like to retire? 70

It's 2016. You will retire in 2056.
You have only 40 years of work to go!
=end

require 'date'

puts "What is your age"
age = gets.chomp.to_i
puts "At what age would you like to retire?"
retire = gets.chomp.to_i
year = Date.today.to_s.slice(0,4)
left = retire - age
retire_year = left + year.to_i
puts "It's #{year}. You will retire in #{retire_year}."
puts "You only have #{left} years of work to go!"

