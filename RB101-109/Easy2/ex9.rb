# Take a look at the following code:

=begin
name = 'Bob'
save_name = name
name = 'Alice'
puts name, save_name
# What does this code print out? Think about it for a moment before continuing.
=end


# If you said that code printed
# Alice
# Bob
# you are 100% correct, and the answer should come as no surprise. 
# Now, let's look at something a bit different:

name = 'Bob'
save_name = name
name.upcase!
puts name, save_name
# What does this print out? Can you explain these results?
# ANSWER:
# BOB
# BOB
# On ln 18, the name variable is initialized and a new string object ('Bob') is
# created. the name vairable points to (references) 'Bob' (the value.)
# On ln 19, a new variable is initialized and it is pointed at the same object
# that name points at -- namely, 'Bob'. So both vars reference that same value.
# On ln 20, we call the upcase! method on name. That method mutates the caller
# so the effect is to change the object that the name var points to -- to wit,
# the effect to modify the 'bob' object, rendering it as 'BOB'
# All the variables still point at the same objects! Nothing has been reassigned
# So, name points at the string object 'BOB' and so does save_name.
# Thus, when we call puts and pass in those two variables, we puts BOB and then
# BOB