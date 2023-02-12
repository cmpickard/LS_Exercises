#Rewrite car as a nested array containing the same key-value pairs.

car = {
  type:  'sedan',
  color: 'blue',
  year:  2003
}
carray = []
car.each { |k,v| carray.push([k,v]) }
p carray