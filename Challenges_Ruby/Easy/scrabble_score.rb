=begin
A, E, I, O, U, L, N, R, S, T	1
D, G	2
B, C, M, P	3
F, H, V, W, Y	4
K	5
J, X	8
Q, Z	10

class Scrabble
  # probably want to hardcode the vals into a hash
  # use zip on an array of letters + an array of values?
  # can take advantage of the fact that indexical lookup of non-existent keys
  # returns nil to avoid having to do any regexing on the input str
  
  POINT_ORDER = %w(1 3 3 2 1 4 2 4 1 8 5 1 3 1 1 3 10 1 1 1 1 4 4 8 4 10)
  POINTS = ('A'..'Z').to_a.zip(POINT_ORDER.map(&:to_i)).to_h

  def initialize(string)
    # assign input string to instace var
    # str may be empty and may contain non-alphabetic chars or nil
    # i'll go ahead and handle nil here w/ a ternary + upcase the word
    @word = string ? string.upcase : ''
  end

  def score
    word.chars.reduce(0) { |acc, ltr| POINTS[ltr] ? acc + POINTS[ltr] : acc }
  end

  def self.score(word)
    # duplicate #score as ::score.
    # probably just instantiate a new Scrabble object and call #score on it
    Scrabble.new(word).score
  end

  private

  attr_reader :word
end
=end

class Scrabble
  POINT_ORDER = %w(1 3 3 2 1 4 2 4 1 8 5 1 3 1 1 3 10 1 1 1 1 4 4 8 4 10)
  POINTS = ('A'..'Z').to_a.zip(POINT_ORDER.map(&:to_i)).to_h

  def initialize(string)
    @word = string ? string.upcase : ''
  end

  def score
    word.chars.reduce(0) { |acc, ltr| POINTS[ltr] ? acc + POINTS[ltr] : acc }
  end

  def self.score(word)
    Scrabble.new(word).score
  end

  private

  attr_reader :word
end
