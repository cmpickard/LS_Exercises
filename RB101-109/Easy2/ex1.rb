# Build a program that randomly generates and prints Teddy's age. 
# To get the age, you should generate a random number between 20 and 200.

# Example Output
# Teddy is 69 years old!

age = Random.new
name = 'Teddy'

loop do
  puts "Would you like to enter a name? (y/n)"
  ans = gets.chomp.downcase
  if ans.start_with?('y')
    puts "What is your name?"
    name = gets.chomp
    break
  else 
    break
  end
end
  
puts "#{name} is #{age.rand(20..200)} years old!"