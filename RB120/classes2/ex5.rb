# Using the following code, create a class named Cat that tracks the number of 
# times a new Cat object is instantiated. The total number of Cat instances 
# should be printed when ::total is invoked.

# Copy Code
# kitty1 = Cat.new
# kitty2 = Cat.new

# Cat.total
# Expected output:

# Copy Code
# 2

class Cat
  @@number_of_cats = 0

  def self.total
    @@number_of_cats
  end

  def initialize
    @@number_of_cats += 1
  end
end

Cat.new
Cat.new
puts Cat.total