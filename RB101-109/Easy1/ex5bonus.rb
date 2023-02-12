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


def string_chopper(str, arr) #it's recursive!!!!
  length = str.length
  if length < 36
    arr << str
  else
    arr << str.slice!(0..35)
    string_chopper(str, arr)
  end
end


def print_in_box(string, arr = [])
  length = (string.length > 36 ? 36 : string.length)
  string_chopper(string, arr)
  puts "+" + "-" * (2 + length) + "+"
  puts "|" + " " * (2 + length) + "|"
  if arr.size < 2
    puts "| " + string + " |"
  else
    arr.each do |line| 
      long = line.length
      space = 38 - long
      if space%2 == 0
        puts "|" + " " * (space / 2) + line + " " * (space / 2) + "|"
      else
        puts "|" + " " * (1 + (space / 2)) + line + " " * (space / 2) + "|"
      end  
    end
  end
  puts "|" + " " * (2 + length) + "|"
  puts "+" + "-" * (2 + length) + "+"
end

print_in_box('To boldly go where no one has gone before. To boldy do what no one has done before. To boldy be before anyone has been before.')
print_in_box('')
print_in_box('This is a test message.')
print_in_box('This is a bit longer of a message.')
print_in_box('This is an even longer test message, for testing.')