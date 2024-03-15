=begin
class Robot
  # need a way to keep track of assigned name. obvs solution is in a class var
  # obvs data structure is an array.
  @@robo_names = ['']

  attr_reader :name

  LET = ('A'..'Z').to_a
  NUM = ('0'..'9').to_a
  def initialize
    # need to set @name instance var to a random name. will call helper method
    # and assign return value
    @name = assign_random_name

  end

  def reset
    # remove old name from @@robo_names
    # then get new name
    @@robo_names.delete(name)
    @name = assign_random_name
  end

  private

  def assign_random_name
    # use loop. break only when rando name is NOT in the @@robo_names arr
    # use sample to grab random elements from our constants
    # after loop, add new name to @@robo_names
    new_name = ''
    while @@robo_names.include?(new_name)
      new_name = LET.sample + LET.sample + NUM.sample + NUM.sample + NUM.sample
    end
    @@robo_names << new_name
    new_name
  end
end

=end

class Robot
  @@robo_names = ['']

  NAME_TEMPLATE = [('A'..'Z'), ('A'..'Z'), ('0'..'9'), ('0'..'9'), ('0'..'9')]

  def initialize
    @name = assign_random_name
  end

  def reset
    @@robo_names.delete(name)
    @name = nil
  end

  def name
    @name ? @name : @name = assign_random_name
  end

  private

  def assign_random_name
    while @@robo_names.include?(new_name ||= '')
      new_name = NAME_TEMPLATE.map { |el| el.to_a.sample }.join()
    end
    @@robo_names << new_name
    new_name
  end
end
