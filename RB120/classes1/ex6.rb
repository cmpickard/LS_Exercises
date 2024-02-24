# Using the code from the previous exercise, move the greeting from the
#  #initialize method to an instance method named #greet that prints a
#   greeting when invoked.

# Code:

# Copy Code
# class Cat
#   def initialize(name)
#     @name = name
#     puts "Hello! My name is #{@name}!"
#   end
# end

# kitty = Cat.new('Sophie')
# kitty.greet
# Expected output:

# Copy Code
# Hello! My name is Sophie!


class Cat
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! My name is #{name}!"
  end
end

kitty = Cat.new('Sophie')
kitty.greet