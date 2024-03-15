# For this exercise you'll be given a sample text file and a starter class. The 
# sample text's contents will be saved as a String to an instance variable in the
#  starter class.

# The Text class includes a #swap method that can be used to replace all 
# occurrences of one letter in the text with another letter. And for this 
# exercise we will swap all occurrences of 'a' with 'e'.

# Your task is to write a test suite for class Text. In that test suite write a
# test for the Text method swap. For this exercise, you are required to use the
# minitest methods #setup and #teardown. The #setup method contains code that 
# will be executed before each test; #teardown contains code that will be 
# executed after each test.

require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'text'

class TextTest < Minitest::Test
  def setup
    @file = File.new('sample_text.txt')
    @text = Text.new(@file.read)
  end

  def test_swap
    output = <<~OUTPUT.chomp
    Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.
    Suspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet
    quem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo
    nulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum
    dolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres
    et verius meuris, et pheretre mi.
    OUTPUT
    assert_equal output, @text.swap('a', 'e')
  end

  def test_word_count
    assert_equal 72, @text.word_count
  end

  def teardown
    @file.close
  end
end
