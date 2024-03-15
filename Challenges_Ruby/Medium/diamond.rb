=begin
class Diamond
  def self.make_diamond(letter)
    # input is a single upcase letter
    # output is a propertly formatted string diamond w/ the input letter on
    # the center line at the widest points

    # row number depends on input, as does width
    # could create an array w/ all of the letters, starting from a range from
    # 'A' upto not including input + input + first range again, reversed

    # calc width of each line as (2 * (input.ord - 64)) - 1

    # iterate through letter array.
    # if letter = 'A' maybe send to a special method?
    # else call a helper method and pass in letter, innerwidth, outerspaces

    # also need: size of outer-spaces for EACH line + size of inner spaces for
    # EACH line. thus, these calcs will need to be made inside the iteration

    # The latter will be the same for every diamond, but the former will
    # depend on the total width of the diamond
    # 1, 3, 5, 7
    # inner width is: ((curr_letter.ord - 65) * 2) -1
    # outerspaces is: (width - (inner_width + 2)) / 2

    rows = ('A'...letter).to_a + [letter] + ('A'...letter).to_a.reverse
    width = (2 * (letter.ord - 64)) - 1
    str = ''
    rows.map do |row_ltr|
      if row_ltr == 'A'
        str << row_a((width - 1) / 2)
      else
        inner = ((row_ltr.ord - 65) * 2) - 1
        outer = (width - (inner + 2)) / 2
        str << non_a_row(row_ltr, outer, inner)
      end
    end
    str
  end

  def self.row_a(spaces)
    ' ' * spaces + 'A' + ' ' * spaces + "\n"
  end

  def self.non_a_row(ltr, outer, inner)
    ' ' * outer + ltr + ' ' * inner + ltr + ' ' * outer + "\n"
  end
end
=end

class Diamond
  def self.make_diamond(letter)
    row_letters, width = row_arr_and_width(letter)
    
    row_letters.each_with_object('') do |row_ltr, str|
      inner, outer = calc_spaces(row_ltr, width)
      str << get_row(row_ltr, width, inner, outer)
    end
  end

  class << self
    private

    def row_arr_and_width(letter)
      rows = ('A'...letter).to_a + [letter] + ('A'...letter).to_a.reverse
      width = (2 * (letter.ord - 64)) - 1
      [rows, width]
    end

    def calc_spaces(letter, width)
      inner = ((letter.ord - 65) * 2) - 1
      outer = (width - (inner + 2)) / 2
      [inner, outer]
    end

    def get_row(letter, width, inner, outer)
      letter == 'A' ? row_a(width) : non_a_row(letter, inner, outer)
    end

    def row_a(width)
      ltr = 'A'
      spaces = (width - 1) / 2
      "#{(' ' * spaces) + ltr + (' ' * spaces)}\n"
    end

    def non_a_row(ltr, inner, outer)
      "#{(' ' * outer) + ltr + (' ' * inner) + ltr + (' ' * outer)}\n"
    end
  end
end
