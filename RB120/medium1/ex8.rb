# Update this class so you can use it to determine the lowest ranking and highest
#  ranking cards in an Array of Card objects:

# Copy Code
# class Card
#   attr_reader :rank, :suit

#   def initialize(rank, suit)
#     @rank = rank
#     @suit = suit
#   end
# end
# For this exercise, numeric cards are low cards, ordered from 2 through 10. 
# Jacks are higher than 10s, Queens are higher than Jacks, Kings are higher than
#  Queens, and Aces are higher than Kings. The suit plays no part in the 
#  relative ranking of cards.

# If you have two or more cards of the same rank in your list, your min and max 
# methods should return one of the matching cards; it doesn't matter which one.

# Besides any methods needed to determine the lowest and highest cards, create 
# a #to_s method that returns a String representation of the card, e.g., 
# "Jack of Diamonds", "4 of Clubs", etc.

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
    a +=  case suit
          when "Spades" then 0.8
          when "Hearts" then 0.6
          when "Clubs" then 0.4
          when "Diamonds" then 0.2
          end
  end
end

cards = [Card.new(2, 'Hearts'),
         Card.new(10, 'Diamonds'),
         Card.new('Ace', 'Clubs')]
puts cards
puts cards.min == Card.new(2, 'Hearts')
puts cards.max == Card.new('Ace', 'Clubs')

cards = [Card.new(5, 'Hearts')]
puts cards.min == Card.new(5, 'Hearts')
puts cards.max == Card.new(5, 'Hearts')

cards = [Card.new(4, 'Hearts'),
         Card.new(4, 'Diamonds'),
         Card.new(10, 'Clubs')]
puts cards.min.rank == 4
puts cards.max == Card.new(10, 'Clubs')

cards = [Card.new(7, 'Diamonds'),
         Card.new('Jack', 'Diamonds'),
         Card.new('Jack', 'Spades')]
puts cards.min == Card.new(7, 'Diamonds')
puts cards.max.rank == 'Jack'

cards = [Card.new(8, 'Diamonds'),
         Card.new(8, 'Clubs'),
         Card.new(8, 'Spades')]
puts cards.min.rank == 8
puts cards.max.rank == 8

cards = [Card.new(8, 'Diamonds'),
         Card.new(8, 'Clubs'),
         Card.new(8, 'Spades'),
         Card.new(8, 'Hearts')]
puts cards.min
puts cards.max