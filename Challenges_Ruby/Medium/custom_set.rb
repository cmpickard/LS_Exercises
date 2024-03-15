=begin
class CustomSet
  # initialize a class var: an arr to keep track of which CustomSet objects
  # have already been created.
  @@sets = []

  attr_reader :set

  def self.new(arr = [])
    # This is the big lift.
    # first need to find whether the input array (when sorted/uniq'd) is
    # identical to any arrays already saved as CustomSet objects. If so, return
    # that existing CustomSet object
    # otherwise, call ::allocate then #custom_setup (good pun) to set up a new
    # CustomSet object. Then add it to the @@sets array. Then return it.

    existing_set = @@sets.select{ |el_set| el_set.set == arr.uniq.sort }.first
    return existing_set if existing_set
    new_set = allocate
    new_set.custom_setup(arr)
    @@sets << new_set
    new_set
  end

  def custom_setup(arr)
    # initialize new instance var that is a sorted arr of the uniq values passed
    # into the call to ::new
    @set = arr.uniq.sort
  end

  def empty?
    # check if @set is an empty arr
    set == []
  end

  def contains?(el)
    # just use include
    set.include?(el)
  end

  def subset?(other_set)
    # subtract other_set from set and see if result is empty
    (set - other_set.set) == []
  end

  def disjoint?(other_set)
    # subtract other_set from set and see if result == set
    (set - other_set.set) == set
  end

  def add(el)
    # make a new array from the old array + new element, then pass it to ::new
    new_arr = set << el
    CustomSet.new(new_arr)
  end

  def intersection(other_set)
    # just use Array#intersection, then call ::new
    CustomSet.new(set.intersection(other_set.set))
  end

  def difference(other_set)
    # again, just use array subtract, but then pass result to ::new
    CustomSet.new(set - other_set.set)
  end

  def union(other_set)
    # use Array#| then pass result to ::new
    CustomSet.new(set|other_set.set)
  end

  # since there's always a need for the empty set, go ahead and create it
  CustomSet.new
end
=end

# class CustomSet
#   @@sets = []

#   attr_reader :set

#   def self.new(arr = [])
#     existing_set = @@sets.select { |el_set| el_set.set == arr.uniq.sort }.first
#     return existing_set unless existing_set.nil?
#     new_set = allocate
#     new_set.custom_setup(arr)
#     @@sets << new_set
#     new_set
#   end

#   def custom_setup(arr)
#     @set = arr.uniq.sort
#   end

#   def empty?
#     set == []
#   end

#   def contains?(el)
#     set.include?(el)
#   end

#   def subset?(other_set)
#     (set - other_set.set) == []
#   end

#   def disjoint?(other_set)
#     (set - other_set.set) == set
#   end

#   def add(el)
#     CustomSet.new(set << el)
#   end

#   def intersection(other_set)
#     CustomSet.new(set.intersection(other_set.set))
#   end

#   def difference(other_set)
#     CustomSet.new(set - other_set.set)
#   end

#   def union(other_set)
#     CustomSet.new(set | other_set.set)
#   end

#   CustomSet.new
# end

class CustomSet
  @@sets = []

  # overriding the default implementation of CustomSet::new was the only way
  # I could figure to exert control over whether a new object is instantiated or
  # a previously existing object returned
  def self.new(arr = [])
    existing_set = @@sets.select { |el_set| el_set.set == arr.uniq.sort }.first
    return existing_set unless existing_set.nil?
    new_set = CustomSet.allocate
    new_set.custom_setup(arr)
    @@sets << new_set
    new_set
  end

  # still need a way to initialize new objects, but ruby would throw a "private
  # method" error whenever I tried calling #initialize from inside ::new, so my 
  # work-around is using this #custom_setup method as the constructor
  def custom_setup(arr)
    @set = arr.uniq.sort
  end

  def empty?
    set == []
  end

  def contains?(el)
    set.include?(el)
  end

  def subset?(other)
    (set - other.set) == []
  end

  def disjoint?(other)
    (set - other.set) == set
  end

  def add(el)
    CustomSet.new(set << el)
  end

  def intersection(other)
    CustomSet.new(set.intersection(other.set))
  end

  def difference(other)
    CustomSet.new(set - other.set)
  end

  def union(other)
    CustomSet.new(set | other.set)
  end

  protected

  attr_reader :set
end