# Consider the following class definition:

# class Flight
#   attr_accessor :database_handle

#   def initialize(flight_number)
#     @database_handle = Database.init
#     @flight_number = flight_number
#   end
# end
# There is nothing technically incorrect about this class, but the definition
#  may lead to problems in the future. How can this class be fixed to be 
#  resistant to future problems?

=begin
ANSWER:
You might not want to expose the getter and setter for the @database_handle var.
This bit of interface *probably* does need to be public and leaving it public
may create problems down the road. One option would be to set those two methods
private and then add more specialized public methods that allow users to interact
with the databases in my limited ways (e.g. adding, removing elements one at a time.)

One additional problem with leaving the database getter/setter public is that
someone might write some code that uses our Flight class and that relies on the
fact that those two methods are public. Then, if we later want to change the 
class implementation to adjust how the database is handled, our changes may
break some of that client code. If the client code is very important, we may
even be forbidden from making the relevant changes precisely b/c doing so would
break the client code.
=end