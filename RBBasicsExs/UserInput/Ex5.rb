#Write a program that prints 'Launch School is the best!' repeatedly until a 
#certain number of lines have been printed. The program should obtain the 
#number of lines from the user, and should insist that 
#at least 3 lines are printed.
#For now, just use #to_i to convert the input value to an Integer, and check 
#that result instead of trying to insist on a valid number; validation of 
#numeric input is a topic with a fair number of edge conditions that are 
#beyond the scope of this exercise.
string = 'Launch School is the best!'
puts "How many times (3? more? at least 3) should I say #{string} ?"
ans = gets.chomp.to_i
if ans > 3
  ans.times{puts string}
else
  3.times {puts string}
end