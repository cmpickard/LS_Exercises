# Print all odd numbers from 1 to 99, inclusive, to the console, with each 
# number on a separate line.

# Solution 1
for i in 1..99 do
  if i%2 != 0
    puts i
  end
end


# Solution 2
num = 1
loop do
  break if num > 100 
  puts num
  num += 2
end