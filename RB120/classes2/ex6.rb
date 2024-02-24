# Using the following code, create a class named Cat that prints a greeting when 
# #greet is invoked. The greeting should include the name and color of the cat. 
# Use a constant to define the color.

# kitty = Cat.new('Sophie')
# kitty.greet
# Expected output:

# Copy Code
# Hello! My name is Sophie and I'm a purple cat!

class Cat
  attr_reader :name
  COLOR = 'purple'

  def initialize(name)
    @name = name
  end

  def greet
    puts "Hello! I am a #{COLOR} cat named #{name}."
  end

end

kitty = Cat.new('Sophie')
kitty.greet