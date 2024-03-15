=begin

  def initialize(side1, side2, side3)
    # input: 3 ints
    # output: either array instance var, 3 int instance vars
      # OR: argument error
    #  make call to validity checking method that raises ArgumentError
    # assign sides first, then check validity? or check validity, then assign?

    @sides = [side1, side2, side3].sort
    valid?
  end

  def valid?
    # raise ArgumentError unless sides are valid
    # rules: all > 0; smallest 2 sum > largest, need to handle float input,
    # but don't need to handle non-Numeric

    raise ArgumentError unless sides[0] > 0 && (sides[0] + sides[1] > sides[2])
  end

  def kind
    # first check whether all sides equal
    # then check if 2 sides equal
    # else scalene
    # return downcase string

    return 'equilateral' if @sides.uniq.size == 1
    return 'isosceles' if @sides.uniq.size == 2
    'scalene'
  end

=end

class Triangle
  def initialize(side1, side2, side3)
    @sides = [side1, side2, side3].sort
    valid?
  end

  def kind
    return 'scalene' if @sides.uniq.size == 3
    @sides.uniq.size == 1 ? 'equilateral' : 'isosceles'
  end

  private

  attr_reader :sides

  def valid?
    raise ArgumentError unless sides[0] > 0 && (sides[0] + sides[1] > sides[2])
  end
end
