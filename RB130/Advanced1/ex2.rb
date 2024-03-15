# For this exercise, we'll be learning and practicing our knowledge of the arity 
# of lambdas, procs, and implicit blocks. Two groups of code also deal with the
#  definition of a Proc and a Lambda, and the differences between the two. Run 
#  each group of code below: For your answer to this exercise, write down your 
#  observations for each group of code. After writing out those observations,
#   write one final analysis that explains the differences between procs, blocks,
#    and lambdas.


# Group 1
# my_proc = proc { |thing| puts "This is a #{thing}." }
# puts my_proc
# puts my_proc.class
# my_proc.call
# my_proc.call('cat')

# This seems to demonstrate that procs have lenient arity. The first call fails
# to pass in an argument, and so the thing var is assigned to nil but no errors
# are otherwise thrown.

# Group 2
# my_lambda = lambda { |thing| puts "This is a #{thing}." }
# my_second_lambda = -> (thing) { puts "This is a #{thing}." }
# puts my_lambda
# puts my_second_lambda
# puts my_lambda.class
# my_lambda.call('dog')
# # my_lambda.call
# my_third_lambda = Lambda.new { |thing| puts "This is a #{thing}." }

# This demonstrates a few things. (i) Lambdas are not objects of a diff class; 
# they are simply a specialized kind of Proc object. (ii) Lambdas have strict
# arity. That's why we get an ArgumentError message. (iii) There are two diff
# special syntaxes we can use to create lambdas, but given (i) above, we cannot
# create them by calling Lambda::new b/c there is no such class.

# # Group 3
# def block_method_1(animal)
#   yield
# end

# block_method_1('seal') { |seal| puts "This is a #{seal}."}
# block_method_1('seal')

# This demonstrates two things about blocks/yielding. The first is that blocks
# have lenient arity. We can see this in the first method call where we don't
# pass an argument into the block but the block executes without error. The
# second thing is that we *do* get an error if we attempt to yield to a block
# inside a method but failed to pass a block to the method when invoking it.

# # Group 4
def block_method_2(animal)
  yield(animal)
end

block_method_2('turtle') { |turtle| puts "This is a #{turtle}."}
block_method_2('turtle') do |turtle, seal|
  puts "This is a #{turtle} and a #{seal}."
end
block_method_2('turtle') { puts "This is a #{animal}."}

#The second method call demonstrates again that block have lenient arity. The 
#first method call demonstrates that we can pass arguments into blocks. The final
#method call demonstrates that we can run into a NameError if we try to refer
#to a local variable inside a block but haven't initialized one of the givenname.


# In sum: procs and blocks have lenient arity -- they can be passed any number of
# args and won't throw and error, while lambdas (a specialized kind of proc) have
# strict arity and will throw an error if passed the wrong number of args.