# Write a method that takes an optional block. If the block is specified, the
#  method should execute it, and return the value returned by the block.
#  If no block is specified, the method should simply return the
#   String 'Does not compute.'.

# Examples:
# compute { 5 + 3 } == 8
# compute { 'a' + 'b' } == 'ab'
# compute == 'Does not compute.'

def compute
  block_given? ? yield : 'Does not compute.'
end

# Further Exploration
# Modify the compute method so it takes a single argument and yields that
#  argument to the block. Provide at least 3 examples of calling this new 
#  version of compute, including a no-block call.

def compute2(arg)
  block_given? ? yield(arg) : 'Does not compute'
end

compute2(1) { |num| puts num }
compute2(2)
compute2(3) { |_| 'hi' }
