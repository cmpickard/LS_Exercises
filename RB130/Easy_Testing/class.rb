class Professor
  attr_reader :college, :name, :years_worked

  def initialize(name, years)
    @college = 'Westfall'
    @name = name
    @years_worked = years
  end

  def off_year?
    years_worked.odd?
  end
end