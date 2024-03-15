=begin
class Anagram
  def initialize(word)
    # assign the input str to an instance var
    # downcase the word since matches are case insensitive
    @word = word.downcase
  end

  def match(word_arr)
    # takes an arr of strings as input
    # should return arr of anagram strs as ouput -- output should be subset of
    # input. Input might be empty arr. Output can also thus be empty
    # matchign rules: case insensitive. identical words don't match --
    # identical includes case-variants.
    # do a #select on the input arr. block should test whether the downcased,
    # sorted chars are the same as the ones in the @word
    # then delete identicals

    word_arr.select { |word2| word2.downcase.chars.sort == word.chars.sort }
            .delete_if { |word2| word2.downcase == word }
  end

  private

  attr_reader :word
end
=end

class Anagram
  def initialize(word)
    @word = word.downcase
  end

  def match(word_arr)
    word_arr.select { |word2| word2.downcase.chars.sort == word.chars.sort }
            .delete_if { |word2| word2.downcase == word }
  end

  private

  attr_reader :word
end
