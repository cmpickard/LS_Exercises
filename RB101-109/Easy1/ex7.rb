#Mad libs are a simple game where you create a story template with blanks for 
#words. You, or another player, then construct a list of words and place them 
#into the story, creating an often silly or funny story as a result.

#Create a simple mad-lib program that prompts for a noun, a verb, an adverb, 
#and an adjective and injects those into a story that you create.

=begin
Example

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

Do you walk your blue dog quickly? That's hilarious!
=end

def template(noun,verb,adj,adv)
  prompt("The #{noun} #{adv} #{verb} on my new, #{adj} bones.")
end

def prompt(string)
  puts "=> #{string}"
end
prompt('Time to make a mad-lib!')
prompt('Please supply a noun:')
noun = gets.chomp.downcase
prompt('Please supply a verb:')
verb = gets.chomp.downcase
prompt('Please supply an adjective:')
adj = gets.chomp.downcase
prompt('Please supply an adverb:')
adv = gets.chomp.downcase
template(noun,verb,adj,adv)
prompt("that's the madlib you just made.")