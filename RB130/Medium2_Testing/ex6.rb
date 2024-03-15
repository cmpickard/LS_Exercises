# Write a test that verifies that Transaction#prompt_for_payment sets the 
# amount_paid correctly. We've changed the transaction class a bit to make
#  testing this a bit easier. The Transaction#prompt_for_payment now reads as:

# def prompt_for_payment(input: $stdin)
#   loop do
#     puts "You owe $#{item_cost}.\nHow much are you paying?"
#     @amount_paid = input.gets.chomp.to_f # notice that we call gets on that parameter
#     break if valid_payment? && sufficient_payment?
#     puts 'That is not the correct amount. ' \
#          'Please make sure to pay the full cost.'
#   end
# end

# We've added an input keyword parameter that lets the caller provide a different 
# source of input. The default value for the parameter is $stdin; if we don't 
# provide the input parameter, Ruby will use $stdin as its value.

# What is $stdin? It represents the standard input stream, which is usually the 
# keyboard. Specifically, $stdin is a global variable that Ruby uses to represent 
# the default source of input. Thus, when we write code such as str = gets.chomp, 
# it's equivalent to str = $stdin.gets.chomp.

# If we don't need to specify $stdin, then why do we need to use it with this 
#   ethod? Couldn't we just call gets.chomp.to_f on line 4 above? We could, if 
#   we always wanted to get input from the keyboard. However, sometimes we need 
#   to get input from elsewhere. In particular, when testing interactive programs,
#    you don't want to sit at the keyboard and provide the same inputs over and 
#    over. It would be nice if we could "mock" the keyboard input - that is, 
#    send input to the program in such a way that it can read it without changing 
#    any code. That's where code like this comes into play. We can call 
#    prompt_for_payment with an argument that provides the input in a way that 
#    is indistinguishable from keyboard input.

# In this exercise, we'll need to simulate -- mock -- the user input. Our tests 
# need to be automated, so we can't prompt the user with Kernel#gets. One way to 
# do that is to pass a "string stream" to the method as the input parameter. 
# Ruby provides a string stream class called StringIO. To use it, all you need 
# to do is create a StringIO object that contains all of your simulated keyboard 
#   inputs, then pass it to prompt_for_payment. For instance:


# input = StringIO.new("30\n")
# transaction.prompt_for_payment(input: input)
# The object assigned to input here is a StringIO object that simulates the 
# keyboard by acting like the user typed the number 30, then pressed the Return 
# key (\n). Check out how this works with gets:

# input = StringIO.new("30\n")
# number = input.gets.chomp
# puts "The number was #{number}!"   # prints "The number was 30!"

# With this technique, running tests for keyboard entry is a breeze. Just sit 
# back and watch things run. Writing the tests is a little harder. Once you 
# understand how a StringIO object works, though, and you modify your code for 
# the additional flexibility, it's not too hard.

# The key to solving this exercise lies with this technique. We'll be testing a 
# method defined in the Transaction class. It may be best to include this test 
# in a new test file related to the Transaction class.

require 'minitest/autorun'
# require 'minitest/reporters'
# Minitest::Reporters.use!

require_relative 'transaction'
require 'stringio'

class TransactionTest < Minitest::Test
  def setup
    @transaction = Transaction.new(10)
  end

  def test_prompt_for_payment
    strio = StringIO.new("a\n8\n10")
    output = <<~OUTPUT
    You owe $10.
    How much are you paying?
    That is not the correct amount. Please make sure to pay the full cost.
    You owe $10.
    How much are you paying?
    That is not the correct amount. Please make sure to pay the full cost.
    You owe $10.
    How much are you paying?
    OUTPUT
    assert_output(output) { @transaction.prompt_for_payment(input: strio) }
    assert_equal 10, @transaction.amount_paid
  end
end