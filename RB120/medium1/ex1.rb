# Consider the following class:

# class Machine
#   attr_writer :switch

#   def start
#     self.flip_switch(:on)
#   end

#   def stop
#     self.flip_switch(:off)
#   end

#   def flip_switch(desired_state)
#     self.switch = desired_state
#   end
# end

# Modify this class so both flip_switch and the setter method 
# switch= are private methods.


class Machine
  def start
    flip_switch(:on)
  end

  def stop
    flip_switch(:off)
  end

  def current_state
    switch
  end

  private

  attr_writer :switch
  attr_reader :switch

  def flip_switch(desired_state)
    self.switch = desired_state
  end
end

a = Machine.new
a.start
puts a.current_state
a.stop
puts a.current_state