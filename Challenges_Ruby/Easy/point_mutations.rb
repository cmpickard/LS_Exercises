=begin

def initialize(dna_str)
    # create instance var for str and for size of str
    # create attr_readers for both
    @dna = dna_str
    @size = dna_str.size
  end

  def hamming_distance(other_dna)
    # first find length of shorter string -- helper method
    # iterate from index 0 to shorter_size - 1
    # increment some counter for each iteration where the elements at the given
    # index are not the same
    # return counter value
    base_pairs = shorter_size(other_dna)
    diffs = 0
    base_pairs.times { |idx| diffs += 1 if dna[idx] != other_dna[idx] }
    diffs
  end

  def shorter_size(other_dna)
    # return int size of shorter str
    size <= other_dna.size ? size : other_dna.size
  end
=end

class DNA
  def initialize(dna_str)
    @dna = dna_str
  end

  def hamming_distance(other_dna)
    base_pairs = [dna.size, other_dna.size].min
    (0...base_pairs).to_a.count { |idx| dna[idx] != other_dna[idx] }
  end

  private

  attr_reader :dna
end
