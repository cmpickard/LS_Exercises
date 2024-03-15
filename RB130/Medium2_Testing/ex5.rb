# Write a test for method CashRegister#give_receipt that ensures 
# it displays a valid receipt.

require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @transaction = Transaction.new(10)
    @register = CashRegister.new(1000)
  end

  def test_give_receipt
    @transaction.amount_paid = 10
    output = "You've paid $10.\n"
    assert_output (output) { @register.give_receipt(@transaction) }
  end
end