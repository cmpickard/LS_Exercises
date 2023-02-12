#Create a simple tip calculator. The program should prompt for a bill amount 
#and a tip rate. The program must compute the tip and then display both the 
#tip and the total amount of the bill.

=begin
Example:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.0
The total is $230.0
=end

puts "What is the bill?"
bill = gets.chomp.to_f
puts "What is the tip percentage?"
tip_percent = gets.chomp.to_f
tip = (bill * (tip_percent/100)).round(2)
total = tip + bill

puts "The tip is $#{sprintf("%.2f", tip) }."
puts "The total is $#{sprintf("%.2f", total) }."
