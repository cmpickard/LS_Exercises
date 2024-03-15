=begin
require 'date'

class Meetup
  attr_accessor :date
  def initialize(year, month)
    #input will be an int for the year and another int for the month
    #don't need to do any error handling here
    # do I want to save the year and month as state directly, or should I
    # instantiate a date object and save that? -- let's do a date object, and
    # set it to the first day of the given mnth, then i can incrmement it as I
    # look for the right meetup date
    @date = Date.new(year, month, 1)
  end

  def day(day, ordinal)
    # first increment the value of @date until we're on the right day of the
    # week -- maybe use #eval and pass in the day argument as the method name

    # second, do a case statement on the ordinal name.
    # for first, second, third, and fourth, simply return the date + (7 * n)
    # where n is the number of weeks after the first
    # for the fifth and last: check whether adding 28 days would create a date
    # that actually exists. if so, return that date. if not, return nil for
    # fifth and return date + 21 for last
    # for teenth: check whether curr value of date is > 5. if so, return
    # date + 7, else return date + 14

    self.date = date.next until eval("date.#{day.downcase}?")

    case ordinal.downcase
    when 'first' then date
    when 'second' then date + 7
    when 'third' then date + 14
    when 'fourth' then date + 21
    when 'fifth' then valid? ? date + 28 : nil
    when 'last' then valid? ? date + 28 : date + 21
    when 'teenth' then date.day > 5 ? date + 7 : date + 14
    end
  end

  def valid?
    # call Date.valid_date? and check whether the current value of @date +
    # 28 days is a real date.
    Date.valid_date?(date.year, date.month, date.day + 28)
  end
end
=end

require 'date'

class Meetup
  def initialize(year, month)
    @date = Date.new(year, month, 1)
  end

  # I honestly think this method is easy to read and comprehend. The fact that
  # the case statement is long and involve some method calls
  # refactor merely to satisfy these cops, hence:
  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/CyclomaticComplexity
  def day(day, ordinal)
    find_the_months_first(day)

    case ordinal.downcase
    when 'first' then date
    when 'second' then date + 7
    when 'third' then date + 14
    when 'fourth' then date + 21
    when 'fifth' then fifth_day? ? date + 28 : nil
    when 'last' then fifth_day? ? date + 28 : date + 21
    when 'teenth' then date.day > 5 ? date + 7 : date + 14
    end
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/CyclomaticComplexity

  private

  attr_accessor :date

  def find_the_months_first(day)
    self.date = date.next until date.send("#{day.downcase}?")
  end

  def fifth_day?
    Date.valid_date?(date.year, date.month, date.day + 28)
  end
end
