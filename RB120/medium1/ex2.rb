# A fixed-length array is an array that always has a fixed number of elements.
# Write a class that implements a fixed-length array, and provides the necessary
#  methods to support the following code:

# fixed_array = FixedArray.new(5)
# puts fixed_array[3] == nil
# puts fixed_array.to_a == [nil] * 5

# fixed_array[3] = 'a'
# puts fixed_array[3] == 'a'
# puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

# fixed_array[1] = 'b'
# puts fixed_array[1] == 'b'
# puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

# fixed_array[1] = 'c'
# puts fixed_array[1] == 'c'
# puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

# fixed_array[4] = 'd'
# puts fixed_array[4] == 'd'
# puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
# puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

# puts fixed_array[-1] == 'd'
# puts fixed_array[-4] == 'c'

# begin
#   fixed_array[6]
#   puts false
# rescue IndexError
#   puts true
# end

# begin
#   fixed_array[-7] = 3
#   puts false
# rescue IndexError
#   puts true
# end

# begin
#   fixed_array[7] = 3
#   puts false
# rescue IndexError
#   puts true
# end
# The above code should output true 16 times.

require 'pry'

class FixedArray
  attr_accessor :array
  attr_reader :size

  def initialize(size)
    @array = Array.new(size, nil)
    @size = size
  end

  def out_of_bounds?(index)
    !((0...size).include?(index) || (-size..-1).include?(index))
  end

  def []=(index, element)
    raise IndexError.new if out_of_bounds?(index)
    array[index] = element
  end

  def [](index)
    raise IndexError.new if out_of_bounds?(index)
    array[index]
  end

  def to_a
    array
  end

  def to_s
    map = array.map { |el| el == nil ? "nil" : '"' + el.to_s + '"' }
    '[' + map.join(", ") + ']'
  end
end

fixed_array = FixedArray.new(5)
puts fixed_array[3] == nil
puts fixed_array.to_a == [nil] * 5

fixed_array[3] = 'a'
puts fixed_array[3] == 'a'
puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

fixed_array[1] = 'b'
puts fixed_array[1] == 'b'
puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

fixed_array[1] = 'c'
puts fixed_array[1] == 'c'
puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

fixed_array[4] = 'd'
puts fixed_array[4] == 'd'
puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

puts fixed_array[-1] == 'd'
puts fixed_array[-4] == 'c'

begin
    fixed_array[6]
    puts false
  rescue IndexError
    puts true
end
  
begin
  fixed_array[-7] = 3
  puts false
rescue IndexError
  puts true
end
  
begin
  fixed_array[7] = 3
  puts false
rescue IndexError
  puts true
end