# Write a method that takes a positive integer, n, as an argument, and displays
# a right triangle whose sides each have n stars. The hypotenuse of the triangle
# (the diagonal side in the images below) should have one end at the lower-left 
# of the triangle, and the other end at the upper-right.

=begin
Examples:
triangle(5)

    *
   **
  ***
 ****
*****

triangle(9)

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
=end

def bottom_right_triangle(int)
  int.times do |iteration|
    puts " " * (int - 1) + "*" * (iteration + 1)
    int -= 1
  end
end

def bottom_left_triangle(int)
  int.times do |iteration|
    puts "*" * (iteration + 1) + " " * (int - 1) 
    int -= 1
  end
end
  
def top_right_triangle(int)
  int.times do |iteration|
    puts " " * (iteration) + "*" * (int)
    int -= 1
  end
end

def top_left_triangle(int)
  int.times do |iteration|
    puts "*" * (int) + " " * (iteration)
    int -= 1
  end
end

top_right_triangle(5)
top_right_triangle(9)
bottom_right_triangle(5)
bottom_right_triangle(9)
top_left_triangle(5)
top_left_triangle(9)
bottom_left_triangle(5)
bottom_left_triangle(9)