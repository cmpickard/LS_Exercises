# You may have noticed something when running the test for the previous exercise. 
# And that is that our minitest output wasn't that clean. We have some residual 
# output from the Transaction#prompt_for_payment method.

# Run options: --seed 52842

# # Running:

# You owe $30.
# How much are you paying?
# .

# Finished in 0.001783s, 560.7402 runs/s, 560.7402 assertions/s.

# 1 runs, 1 assertions, 0 failures, 0 errors, 0 skips
# Transaction#prompt_for_payment has a call to Kernel#puts and that output is 
# showing up when we run our test. Your task for this exercise is to make it 
# so that we have "clean" output when running this test. We want to see something 
# like this:

# Run options: --seed 4957

# # Running:

# .

# Finished in 0.000919s, 1087.9984 runs/s, 1087.9984 assertions/s.

# 1 runs, 1 assertions, 0 failures, 0 errors, 0 skips


require 'minitest/autorun'
# require 'minitest/reporters'
# Minitest::Reporters.use!
require 'stringio'

require_relative 'transaction'

class TransactionTest < Minitest::Test

  def setup
    @transaction = Transaction.new(10)
  end

  def test_prompt_for_payment
    strio = StringIO.new("a\n8\n10")
    capture = StringIO.new
    # output = <<~OUTPUT
    # You owe $10.
    # How much are you paying?
    # That is not the correct amount. Please make sure to pay the full cost.
    # You owe $10.
    # How much are you paying?
    # That is not the correct amount. Please make sure to pay the full cost.
    # You owe $10.
    # How much are you paying?
    # OUTPUT
    @transaction.prompt_for_payment(input: strio, output: capture)
    assert_equal 10, @transaction.amount_paid
  end
end