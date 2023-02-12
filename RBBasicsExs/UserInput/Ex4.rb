=begin
Modify your program so it prints an error message for any inputs that aren't 
y or n, and then asks you to try again. Keep asking for a response until you 
receive a valid y or n response. In addition, your program should allow both 
Y and N (uppercase) responses; case sensitive input is generally a poor user 
interface choice. Whenever possible, accept both uppercase and lowercase inputs.
=end

valid = false
while valid == false
  puts "Do you want me to print the word 'something?' (y/n)"
  input = gets.chomp
  if input == "y" || input == "Y" || input == "n" || input == "N"
    valid = true 
  else puts "Invalid input!"
  end
end

if input == "y" || input == "Y"
  puts 'something'
end