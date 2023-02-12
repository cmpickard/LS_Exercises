=begin
Modify stringy so it takes an additional optional argument that defaults to 1. 
If the method is called with this argument set to 0, the method should return a
String of alternating 0s and 1s, but starting with 0 instead of 1.
=end

def stringy(int1, int2 = 1)
  string = ''
  count = 0
  if int2 == 0
    string << '0'
    int1 -= 1
  end
  until count == int1.abs do
    if count.even?
      string << '1'
    else 
      string << '0'
    end
    count += 1
  end
  return string
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'
# new tests
puts stringy(5,0) == '01010'
puts stringy(1,0) == '0'
puts stringy(7,0) == '0101010'
