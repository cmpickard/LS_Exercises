# Behold this incomplete class for constructing boxed banners.

# class Banner
#   def initialize(message)
#   end

#   def to_s
#     [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
#   end

#   private

#   def horizontal_rule
#   end

#   def empty_line
#   end

#   def message_line
#     "| #{@message} |"
#   end
# end
# Complete this class so that the test cases shown below work as intended. 
# You are free to add any methods or instance variables you need. However, do not 
#   make the implementation details public.

# You may assume that the input will always fit in your terminal window.

# Test Cases
# banner = Banner.new('To boldly go where no one has gone before.')
# puts banner
# +--------------------------------------------+
# |                                            |
# | To boldly go where no one has gone before. |
# |                                            |
# +--------------------------------------------+

# banner = Banner.new('')
# puts banner
# +--+
# |  |
# |  |
# |  |
# +--+

# Modify this class so new will optionally let you specify a fixed banner width 
# at the time the Banner object is created. The message in the banner should be
#  centered within the banner of that width. Decide for yourself how you want to
#   handle widths that are either too narrow or too wide.

class Banner
  MAX_WIDTH = 80

  attr_reader :message, :length

  def initialize(message, length = message.size)
    @message = message
    @length = (length > message.size || length < 1) ? message.size : length
    @length = MAX_WIDTH if @length > MAX_WIDTH
  end

  def to_s
    [horizontal_rule, empty_line, message_lines, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    "+-" + "-"*length + "-+"
  end

  def empty_line
    "| " + " "*length + " |"
  end

  def message_lines
    message_arr, formatted = chop_message(message.clone), []
    message_arr.size.times do |idx| 
      formatted << ("| " + message_arr[idx] + " |")
    end
    formatted
  end

  def chop_message(message_clone)
    message_arr = []
    while message_clone.size > 0 do
      frag = message_clone.slice!(0,length)
      message_arr << (frag.size < length ? fix_short_line(frag) : frag)
    end
    message_arr
  end

  def fix_short_line(frag)
    spaces = (length - frag.size) / 2
    frag = (" " * spaces + frag + " " * spaces)
    frag += " " if frag.size < length
    frag
  end
end

banner = Banner.new('')
puts banner
banner = Banner.new('To boldly go where no one has gone before.')
puts banner

banner = Banner.new('To boldly go where no one has gone before.', 21)
puts banner
banner = Banner.new('To boldly go where no one has gone before.', 10)
puts banner

banner = Banner.new('Keeping clearest in our sights what necessities do plague all lasting federations of men, the need for strict rules of coordination and the steerage of orderly conduct, we turn now to the norms of the Breakroom, that humble house of repose and repast, and decree that each shall endeavor and irrespective of their state – be they feeble or fit, senior or junior, hurried or at leisure – to lave all that they handle or sully, all serviceware and all tableware, all appliances, ingredients, and bare surfaces, to a state that no man might cavil is unclean and that they shall in addition strive, where appropriate, to replace said items in their appointed positions so that others later may enjoy comparable amenities, the same and as fit for use.')
puts banner