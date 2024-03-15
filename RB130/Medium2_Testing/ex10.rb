# Recall that in the last exercise we only had to test one method of our Text 
# class. One of the useful facets of the setup and teardown methods is that
# they are automatically run before and after each test respectively. To show 
# this we'll be adding one more method to our Text class, word_count.
# Write a test for this new method. Make sure to utilize the setup and 
# teardown methods for any file related operations.

require 'minitest/autorun'
require 'minitest/reporters'

Minitest::Reporters.use!

require_relative 'text'

class TextTest < Minitest::Test

  def setup
    @file = File.open('sample_text.txt')
    file_text = @file.read
    @text = Text.new(file_text)
  end

  def test_swap
    expected = <<~SWAPPED
    Lorem ipsum dolor sit emet, consectetur edipiscing elit. Cres sed vulputete ipsum.
    Suspendisse commodo sem ercu. Donec e nisi elit. Nullem eget nisi commodo, volutpet
    quem e, viverre meuris. Nunc viverre sed messe e condimentum. Suspendisse ornere justo
    nulle, sit emet mollis eros sollicitudin et. Etiem meximus molestie eros, sit emet dictum
    dolor ornere bibendum. Morbi ut messe nec lorem tincidunt elementum vitee id megne. Cres
    et verius meuris, et pheretre mi.
    SWAPPED
    assert_equal(expected.chomp, @text.swap('a', 'e'))
  end

  def test_word_count
    assert_equal(72, @text.word_count)
  end

  def test_error
    # assert(Text.new == ArgumentError)
  end

  def test_refute
    assert(@file.class == 'Filf')
  end

  def teardown
    @file.close
  end

end