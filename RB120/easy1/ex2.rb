# Take a look at the following code:

# Copy Code
# class Pet
#   attr_reader :name

#   def initialize(name)
#     @name = name.to_s
#   end

#   def to_s
#     @name.upcase!
#     "My name is #{@name}."
#   end
# end

# name = 'Fluffy'
# fluffy = Pet.new(name)
# puts fluffy.name
# puts fluffy
# puts fluffy.name
# puts name
# What output does this code print? Fix this class so that there are no surprises 
# waiting in store for the unsuspecting developer.

class Pet
  attr_reader :name

  def initialize(name)
    @name = name.to_s
  end

  def to_s
    "My name is #{@name.upcase}."
  end
end

# name = 'Fluffy'
# fluffy = Pet.new(name)
# puts fluffy.name
# puts fluffy
# puts fluffy.name
# puts name

# Further Exploration
# What would happen in this case?

# name = 42
# fluffy = Pet.new(name)
# name += 1
# puts fluffy.name
# puts fluffy
# puts fluffy.name
# puts name
# This code "works" because of that mysterious to_s call in Pet#initialize.
#  However, that doesn't explain why this code produces the result it does. 
#  Can you?

#ANSWER: 
# Two things going on here:
# (1) On line 49 we are pointing fluffy's @name instance variable at a new
# string that's being created inside the initialize method: the string "42". 
# That's a brand-new object, and that means that the local var name and the
# instance var @name do not point to the same object. Thus, upcaseing the string
# inside the to_s method has no effect on the integer value of the local name var.
# (2) What actually happens when we call #upcase on a string that has all and only
# numeric chars? Nothing. There is no uppercase '4', so #upcase! does not actually
# alter the string value of @name.
