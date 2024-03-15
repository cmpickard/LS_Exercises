# We now have the foundation of our CashRegister test class set up. Let's start
#  testing! We'll start with the CashRegister#accept_money method. Write a test
#   for the #accept_money method.

require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def test_accept_money
    transaction = Transaction.new(100)
    register = CashRegister.new(1000)
    transaction.amount_paid = 100
    register.accept_money(transaction)
    assert_equal 1100, register.total_money
  end
end