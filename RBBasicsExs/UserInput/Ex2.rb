#Write a program that asks the user for their age in years, 
#and then converts that age to months.

puts '>> How old are you, in years?'
years = gets.chomp.to_i
months = 12*years
puts "You are at least #{months} months old!"