# Write a method that takes two arguments, a string and a positive integer, and
# prints the string as many times as the integer indicates.

def repeat(string, int = 1)
  int.times { puts string }
end

repeat('Hello!',3)
repeat("Repeat!")