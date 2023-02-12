#Write a program that asks the user whether they want the program to print 
#"something", then print it if the user enters y. Otherwise, print nothing.

puts "Do you want to print the word 'something'? Say 'y' if so."
ans = gets.chomp
puts "something" if ans == "y" || ans == "Y"
