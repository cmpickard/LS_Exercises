# Using the multiply method from the "Multiplying Two Numbers" problem, write a 
# method that computes the square of its argument (the square is the result of 
# multiplying a number by itself).

# Example:
# square(5) == 25
# square(-8) == 64

def square(int)
  multiply(int,int)
end

def power_to_the_n(int, exponent)
  total = 1
  exponent.times{ |n| total = multiply(total,int) }
  return total
end
  
def multiply(int1, int2)
  int1 * int2
end

puts square(5) == 25
puts square(-8) == 64
puts power_to_the_n(2,4)
puts power_to_the_n(3,3)
puts power_to_the_n(1, 100)
puts power_to_the_n(10, 0)
puts power_to_the_n(0, 10)