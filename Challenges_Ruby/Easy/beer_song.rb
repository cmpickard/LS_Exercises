# Write a program that can generate the lyrics of the 99 Bottles of Beer song.
#  See the test suite

=begin
class BeerSong
  def self.verse(beers)
    verses(beers)
  end

  def self.verses(beers, upto = beers)
    # open the file with the text of the song. identify the lines where the
    # requested verses reside, read out those lines and return them
    # RE: identifying the lines:
    #    each verse is two lines long, with an empty line in between each verse
    #    so v1 runs 1-2, v2 runs 4-5, v3 runs 7-8, v4 runs 10-11
    #    starting line is (3*verse_no - 2)
    #    also need to calc how many lines to grab
    #    for one verse: 2, for 2 verse: 5, for 3 verse: 8
    #    pattern is (total_no_of_verses*3 - 1)
    # input will be int corresponding to number of BEERS, not verse num
    # so to calc verse num: 100 - beer
    file = File.open('beer_lyrics.txt')

    start_line = (301 - (3 * (beers + 1)))
    end_line = start_line + (2 + ((beers - upto) * 3))
    line_range = (start_line..end_line)

    str = ''
    file.each_line do |line|
      next unless line_range.include?(file.lineno)
      str << line
    end
    file.close
    (upto == 0) ? str : str.chomp
  end

  def self.lyrics
    # can simply call BeerSong.verses and request all of them
    BeerSong.verses(99,0)
  end
=end

class BeerSong
  def self.verse(beers)
    verses(beers)
  end

  def self.verses(beers, upto = beers)
    line_range = calc_line_range(beers, upto)
    lyrics = ''
    file = File.open('beer_lyrics.txt')
    file.each_line do |line|
      next unless line_range.include?(file.lineno)
      lyrics << line
    end

    file.close
    upto == 0 ? lyrics : lyrics.chomp
  end

  def self.calc_line_range(beers, upto)
    start_line = (301 - (3 * (beers + 1)))
    end_line = start_line + (2 + ((beers - upto) * 3))
    start_line..end_line
  end

  def self.lyrics
    BeerSong.verses(99, 0)
  end
end
