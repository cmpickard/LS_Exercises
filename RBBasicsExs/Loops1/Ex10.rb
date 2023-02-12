#Your friends just showed up! Given the following array of names, 
#use a for loop to greet each friend individually.

friends = ['Sarah', 'John', 'Hannah', 'Dave']

for i in 0..3
  puts "Hey there, friend whose name is #{friends[i]}!"
end

#OR

for friend in friends
  puts "Hey there, friend whose name is #{friend}!"
end
