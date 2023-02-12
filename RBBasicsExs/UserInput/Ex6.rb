#Write a program that displays a welcome message, but only after the user enters
#the correct password, where the password is a string that is defined as a 
#constant in your program. Keep asking for the password until the user enters 
#the correct password.
PASSWORD = "bingle"

pass = false

while pass == false
  puts 'No welcome message until you say the password! What is the password?'
  ans = gets.chomp
  if ans == PASSWORD
    pass = true 
  else 
    puts "Nope!"
  end
end
puts "YES!!! That's the right password! Here's your welcome message!!!! :"
puts 'hey'