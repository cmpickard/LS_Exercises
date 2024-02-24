# Modify the following code so that 
# Hello! I'm a cat! is printed when Cat.generic_greeting is invoked.

# Copy Code
# class Cat
# end

# Cat.generic_greeting
# Expected output:

# Copy Code
# Hello! I'm a cat!

class Cat
  def self.generic_greeting
    puts "Hello! I'm a #{self.to_s.downcase}!"
  end
end

Cat.generic_greeting
kitty = Cat.new
kitty.class.generic_greeting