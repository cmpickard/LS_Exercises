#Write a loop that prints numbers 1-5 and whether the number is even or odd. 
#Use the code below to get started.

count = 1

loop do
  puts "The number #{count} is #{count.odd? ? "odd" : "even"}."
  count += 1
  break if count > 5
end