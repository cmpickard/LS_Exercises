=begin
In the previous exercise, you wrote a program to solicit a password. 
In this exercise, you should modify the program so it also requires a user name. 
The program should solicit both the user name and the password, then validate
both, and issue a generic error message if one or both are incorrect; 
the error message should not tell the user which item is incorrect.
=end

PASSWORD = "bingle"
USERNAME = "mjohns"

access = false

while access == false
  puts 'To login please give username and password. What is the username?'
  user_try = gets.chomp
  puts "What is the password?"
  password_try = gets.chomp
  if user_try == USERNAME && password_try == PASSWORD
    access = true 
  else 
    puts "There is no matching username/password in our records."
  end
end
puts "YES!!! That's right!!! Here's your welcome message!!!!: "
puts " "
puts 'sup'