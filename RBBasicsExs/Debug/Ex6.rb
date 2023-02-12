#You want to have a small script delivering motivational quotes, but with the 
#following code you run into a very common error message: no implicit conversion
#of nil into String (TypeError). What is the problem and how can you fix it?

=begin
def get_quote(person)
  if person == 'Yoda'
    'Do. Or do not. There is no try.'
  end

  if person == 'Confucius'
    'I hear and I forget. I see and I remember. I do and I understand.'
  end

  if person == 'Einstein'
    'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

puts 'Confucius says:'
puts '"' + get_quote('Confucius') + '"'
=end

#the method def is sending the wrong return values. we'll add a return statement
#to fix that.
#you need to use double quotes in the second puts statement and the #{} syntax
#to make sure that the inner code is interpolated.
#In switching to double quotes, we'll need to use the escape character to keep
#the double quote symbols in our output

def get_quote(person)
  if person == 'Yoda'
    return 'Do. Or do not. There is no try.'
  end

  if person == 'Confucius'
    return 'I hear and I forget. I see and I remember. I do and I understand.'
  end

  if person == 'Einstein'
    return 'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

puts 'Confucius says:'
puts " \"#{get_quote('Confucius')}\" "
