# Write a method that takes a sorted array of integers as an argument, and
#  returns an array that includes all of the missing integers (in order) 
#  between the first and last elements of the argument.

# Examples:

# missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
# missing([1, 2, 3, 4]) == []
# missing([1, 5]) == [2, 3, 4]
# missing([6]) == []

def missing(ints)
  (ints.first...ints.last).reject { |int| ints.include?(int) }
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []

# Further Exploration
# Can you find other ways to solve this problem? What methods might prove useful?
#  Can you find a way to solve this without using a method that requires a block?

def missing2(ints)
  full_arr = (ints.first...ints.last).to_a
  counter = full_arr.first

  until full_arr.last == nil || counter > full_arr.last
    full_arr.delete(counter) if ints.include?(counter)
    counter += 1
  end
  full_arr
end

p missing2([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing2([1, 2, 3, 4]) == []
p missing2([1, 5]) == [2, 3, 4]
p missing2([6]) == []