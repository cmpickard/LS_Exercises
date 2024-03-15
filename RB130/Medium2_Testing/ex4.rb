# Write a test for the method, CashRegister#change.

require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test

    def setup
      @transaction = Transaction.new(100)
      @register = CashRegister.new(1000)
    end

    def test_change
      @transaction.amount_paid = 110
      assert_equal 10, @register.change(@transaction)
    end
end
