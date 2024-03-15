=begin
class Clock
  attr_reader :hours, :mins

  MINS_PER_DAY = 1440

  def self.at(hours, mins = 0)
    # input will be 1 or 2 ints. first int is hour. second int is mins. when
    # receiving only 1 input, mins should default to 0
    # will need to return a new clock object with instance vars set to the
    # relevant times
    Clock.new(hours, mins)
  end

  def initialize(hours, mins)
    # simply assign input to instance vars
    @hours = hours
    @mins = mins
  end

  def ==(other_clock)
    # should return true just in case both clocks have same hrs and mins
    hours == other_clock.hours && mins == other_clock.mins
  end

  def +(time)
    # calc total mins
    # subtract a days worth of mins until mins < 1440
    # create new clock w/ new hours and mins
    total_mins = (hours * 60) + mins + time
    total_mins -= MINS_PER_DAY until total_mins < MINS_PER_DAY
    Clock.new(*total_mins.divmod(60))
  end

  def -(time)
    # same plan, but with addition/subtraction reversed
    total_mins = (hours * 60) + mins - time
    total_mins += MINS_PER_DAY until total_mins > 0
    Clock.new(*total_mins.divmod(60))
  end

  def to_s
    # need to check whether the current hour/min is one digit or two. if one,
    # should prepend zero. then return a string that is the hours as string +
    # ':' plus the mins as string
    str_hours = hours.to_s.size == 1 ? '0' + hours.to_s : hours.to_s
    str_mins = mins.to_s.size == 1 ? '0' + mins.to_s : mins.to_s
    "#{str_hours}:#{str_mins}"
  end
end
=end

class Clock
  attr_reader :hours, :mins

  MINS_PER_DAY = 1440

  def self.at(hours, mins = 0)
    Clock.new(hours, mins)
  end

  def initialize(hours, mins)
    @hours = hours
    @mins = mins
  end

  def ==(other_clock)
    hours == other_clock.hours && mins == other_clock.mins
  end

  def +(time)
    total_mins = (hours * 60) + mins + time
    total_mins -= MINS_PER_DAY until total_mins < MINS_PER_DAY
    Clock.new(*total_mins.divmod(60))
  end

  def -(time)
    total_mins = (hours * 60) + mins - time
    total_mins += MINS_PER_DAY until total_mins > 0
    Clock.new(*total_mins.divmod(60))
  end

  def to_s
    str_hours = hours.to_s.size == 1 ? "0#{hours}" : hours.to_s
    str_mins = mins.to_s.size == 1 ? "0#{mins}" : mins.to_s
    "#{str_hours}:#{str_mins}"
  end
end
