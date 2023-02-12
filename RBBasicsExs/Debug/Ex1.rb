#You come across the following code. 
#What errors does it raise for the given examples and 
#what exactly do the error messages mean?

def find_first_nonzero_among(numbers)
  numbers.each do |n|
    return n if n.nonzero?
  end
end

# Examples

find_first_nonzero_among(0, 0, 1, 0, 2, 0)
#this one is going to throw a "wrong number of arguments" error

find_first_nonzero_among(1)
#this one raises a "No such method" error because there's no .each method for
#integers (and the variable numbers is just the integer 1.)
