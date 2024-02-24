# Create an object-oriented number guessing class for numbers in the range 1 to
#  100, with a limit of 7 guesses per game. The game should play like this:

# game = GuessingGame.new
# game.play

# You have 7 guesses remaining.
# Enter a number between 1 and 100: 104
# Invalid guess. Enter a number between 1 and 100: 50
# Your guess is too low.

# You have 6 guesses remaining.
# Enter a number between 1 and 100: 75
# Your guess is too low.

# You have 5 guesses remaining.
# Enter a number between 1 and 100: 85
# Your guess is too high.

# You have 4 guesses remaining.
# Enter a number between 1 and 100: 0
# Invalid guess. Enter a number between 1 and 100: 80

# You have 3 guesses remaining.
# Enter a number between 1 and 100: 81
# That's the number!

# You won!

# game.play

# You have 7 guesses remaining.
# Enter a number between 1 and 100: 50
# Your guess is too high.

# You have 6 guesses remaining.
# Enter a number between 1 and 100: 25
# Your guess is too low.

# You have 5 guesses remaining.
# Enter a number between 1 and 100: 37
# Your guess is too high.

# You have 4 guesses remaining.
# Enter a number between 1 and 100: 31
# Your guess is too low.

# You have 3 guesses remaining.
# Enter a number between 1 and 100: 34
# Your guess is too high.

# You have 2 guesses remaining.
# Enter a number between 1 and 100: 32
# Your guess is too low.

# You have 1 guess remaining.
# Enter a number between 1 and 100: 32
# Your guess is too low.

# You have no more guesses. You lost!

# Note that a game object should start a new game with a new number to guess
#  with each call to #play.

class GuessingGame
  GUESSES = 7
  RANGE = (1..100)

  attr_accessor :tries, :correct, :guess
  attr_reader :answer

  def initialize
    @tries = GUESSES
    @answer = create_secret_answer
    @correct = false
    @guess = nil
  end

  def play
    greeting
    loop do
      display_guesses_remaining
      player_guesses
      check_result
      display_result
      update_tries
      break if tries <= 0 || correct
    end
    goodbye
  end

  private

  def create_secret_answer
    RANGE.to_a.sample
  end

  def greeting
    puts "Welcome to the number guessing game!"
  end

  def display_guesses_remaining
    guess_or_guesses = (tries == 1 ? "guess" : "guesses")
    puts "You have #{tries} #{guess_or_guesses} remaining."
  end

  def player_guesses
    reply = nil
    loop do
      puts "Please guess a number between:"
      puts "#{RANGE.first} and #{RANGE.last}, inclusive"
      reply = gets.chomp.to_i
      break if RANGE.include?(reply)
      puts "Sorry! That is not a valid number!"
    end
    self.guess = reply
  end

  def check_result
    self.correct = true if guess == answer
  end

  def display_result
    if correct
      puts "That's the number!"
    elsif guess > answer
      puts "Too high!"
    else
      puts "Too low!"
    end
    puts
  end

  def update_tries
    self.tries -= 1
  end

  def goodbye
    puts(correct ? "You won!" : "You have no more guesses. You lost!")
  end
end

game = GuessingGame.new
game.play
