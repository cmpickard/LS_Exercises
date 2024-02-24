# In the previous exercise, you wrote a number guessing game that determines a 
# secret number between 1 and 100, and gives the user 7 opportunities to guess
#  the number.

# Update your solution to accept a low and high value when you create a 
# GuessingGame object, and use those values to compute a secret number for
#  the game. You should also change the number of guesses allowed so the user 
#  can always win if she uses a good strategy. You can compute the number of 
#  guesses with:

# Math.log2(size_of_range).to_i + 1

class GuessingGame
  attr_accessor :tries, :correct, :guess
  attr_reader :answer, :range 

  def initialize(low, high)
    @range = (low..high)
    @tries = Math.log2(high-low).to_i + 1
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
    range.to_a.sample
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
      puts "#{range.first} and #{range.last}, inclusive"
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

game = GuessingGame.new(100,1000000)
game.play
