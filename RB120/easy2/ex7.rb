# Consider the following code:

# butterscotch = Pet.new('cat', 'Butterscotch')
# pudding      = Pet.new('cat', 'Pudding')
# darwin       = Pet.new('bearded dragon', 'Darwin')
# kennedy      = Pet.new('dog', 'Kennedy')
# sweetie      = Pet.new('parakeet', 'Sweetie Pie')
# molly        = Pet.new('dog', 'Molly')
# chester      = Pet.new('fish', 'Chester')

# phanson = Owner.new('P Hanson')
# bholmes = Owner.new('B Holmes')

# shelter = Shelter.new
# shelter.adopt(phanson, butterscotch)
# shelter.adopt(phanson, pudding)
# shelter.adopt(phanson, darwin)
# shelter.adopt(bholmes, kennedy)
# shelter.adopt(bholmes, sweetie)
# shelter.adopt(bholmes, molly)
# shelter.adopt(bholmes, chester)
# shelter.print_adoptions
# puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
# puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."


# Write the classes and methods that will be necessary to make this 
# code run, and print the following output:

# P Hanson has adopted the following pets:
# a cat named Butterscotch
# a cat named Pudding
# a bearded dragon named Darwin

# B Holmes has adopted the following pets:
# a dog named Molly
# a parakeet named Sweetie Pie
# a dog named Kennedy
# a fish named Chester

# P Hanson has 3 adopted pets.
# B Holmes has 4 adopted pets.


# The order of the output does not matter, so long as all of 
# the information is presented.


class Pet
  attr_reader :species, :name
  def initialize(species, name)
    @species = species
    @name = name
  end
end

class Owner
  attr_reader :name, :number_of_pets
  attr_accessor :pets

  def initialize(name)
    @name = name
    @number_of_pets = 0
    @pets = []
  end

  def update_pet_count
    @number_of_pets = @pets.size
  end
end

class Shelter
  attr_accessor :adoptions, :pets

  def initialize
    @adoptions = {}
    @pets = []
  end

  def adopt(owner, pet)
    owner.pets << pet
    if adoptions[owner] == nil
      adoptions[owner] = [pet]
    else
      adoptions[owner] << pet
    end
    owner.update_pet_count
  end

  def print_adoptions
    adoptions.each do |owner, pet_arr|
      puts "#{owner.name} has adopted the following pets:"
      pet_arr.each { |pet| puts "a #{pet.species} named #{pet.name}"}
      puts ""
    end
  end

  def add_pet(pet)
    pets << pet
  end

  def print_unadopted
    puts "The shelter has #{pets.size} unadopted pets:"
    pets.each { |pet| puts "a #{pet.species} named #{pet.name}"}
  end
end

butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new
shelter.adopt(phanson, butterscotch)
shelter.adopt(phanson, pudding)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, chester)
shelter.print_adoptions
puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."


# Further Exploration
# Suppose the shelter has a number of not-yet-adopted pets, and wants to manage
#  them through this same system. Thus, you should be able to add the following 
#  output to the example output shown above:

# The Animal Shelter has the following unadopted pets:
# a dog named Asta
# a dog named Laddie
# a cat named Fluffy
# a cat named Kat
# a cat named Ben
# a parakeet named Chatterbox
# a parakeet named Bluebell
#    ...

# P Hanson has 3 adopted pets.
# B Holmes has 4 adopted pets.
# The Animal shelter has 7 unadopted pets.
# Can you make these updates to your solution? Did you need to change your class 
# system at all? Were you able to make all of your changes without modifying the 
# existing interface?

asta = Pet.new('dog', 'Asta')
laddie = Pet.new('dog', 'Laddie')
fluffy = Pet.new('cat', "Fluffy")
kat = Pet.new('cat', 'Kat')
ben = Pet.new('cat', 'Ben')
chatterbox = Pet.new('parakeet', 'Chatterbox')
bluebell = Pet.new('parakeet', 'Bluebell')
shelter.add_pet(asta)
shelter.add_pet(laddie)
shelter.add_pet(fluffy)
shelter.add_pet(kat)
shelter.add_pet(ben)
shelter.add_pet(chatterbox)
shelter.add_pet(bluebell)
shelter.print_unadopted