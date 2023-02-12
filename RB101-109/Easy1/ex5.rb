=begin
Write a method that will take a short line of text, and print it within a box.

Example:

print_in_box('To boldly go where no one has gone before.')
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

print_in_box('')
+--+
|  |
|  |
|  |
+--+
You may assume that the input will always fit in your terminal window.
=end

#Solution: Attempt #2

def print_in_box(string)
  length = string.length
  puts "+" + "-" * (2 + length) + "+"
  puts "|" + " " * (2 + length) + "|"
  puts "| " + string + " |"
  puts "|" + " " * (2 + length) + "|"
  puts "+" + "-" * (2 + length) + "+"
end

print_in_box('To boldly go where no one has gone before.')
print_in_box('')


# this solution is mega =(
=begin
def print_in_box(string)
  length = 2 + string.length
  print '+'
  length.times{ print '-' }
  puts '+'
  print '|'
  length.times{ print ' ' }
  puts '|'
  puts "| #{string} |"
  print '|'
  length.times{ print ' ' }
  puts '|'
  print '+'
  length.times{ print '-' }
  puts '+'
end

print_in_box('')
print_in_box('To boldly go where no one has gone before.')
=end