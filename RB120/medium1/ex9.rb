# Using the Card class from the previous exercise, create a Deck class that 
# contains all of the standard 52 playing cards. Use the following code to 
# start your work:

# class Deck
#   RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
#   SUITS = %w(Hearts Clubs Diamonds Spades).freeze
# end
# The Deck class should provide a #draw method to deal one card. The Deck 
# should be shuffled when it is initialized and, if it runs out of cards, it 
# should reset itself by generating a new set of 52 shuffled cards.

class Card
  include Comparable

  attr_reader :rank, :suit

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
  end

  def to_s
    "#{rank} of #{suit}"
  end

  def <=>(other)
    value <=> other.value
  end

  def value
    a =   case rank
          when "Ace" then 14
          when "King" then 13
          when "Queen" then 12
          when "Jack" then 11
          else rank.to_i
          end
  end
end

class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  attr_accessor :deck

  def initialize
    @deck = create_deck
  end

  def create_deck
    arr = []
    SUITS.each do |suit|
      RANKS.each { |rank| arr << Card.new(rank, suit) }
    end
    arr.shuffle
  end

  def draw
    self.deck = create_deck if deck.empty?
    deck.pop
  end
end

deck = Deck.new
drawn = []
52.times { drawn << deck.draw }
p drawn.count { |card| card.rank == 5 } == 4
p drawn.count { |card| card.suit == 'Hearts' } == 13

drawn2 = []
52.times { drawn2 << deck.draw }
p drawn != drawn2