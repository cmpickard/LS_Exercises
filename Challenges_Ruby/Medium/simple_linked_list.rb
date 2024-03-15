=begin
class SimpleLinkedList
  # don't need to initialize anything; i'll just want a getter for whichever
  # element is currently at the head of the list.

  attr_reader :head

  def size
    # since I'm not saving any state for class objects except the value of the
    # the topmost element, I'll need to slide along the elements and increment
    # a counter for how many times I can call #next without bottoming out in a
    # nil
    # I'll set the counter at zero, then assign a pointer to point at curr_head
    # then I'll increment the counter by one each time I point the pointer at
    # the next element. Then break out of the loop when the pointer is nil

    counter = 0
    pointer = head
    while pointer
      pointer = pointer.next
      counter += 1
    end
    counter
  end

  def empty?
    head == nil
  end

  def push(el)
    # this is the key logic for getting this class to work without any state of
    # it's own other than the head element. I'll want to create a new Element
    # object using the value passed in to this method, and then for the second
    # value use the current value of @head. If this is the first element, then
    # @head will be uninitialized and will return nil which is perfect.
    # finally, I should reassign head to the Element I just created.
    new_element = Element.new(el, @head)
    @head = new_element
  end

  def peek
    # can't just call #datum on head because @head could be nil. So do a quick
    # check that head has a value, return nil if not, return head.datum if so
    head ? head.datum : nil
  end

  def pop
    # save the current value of the current head element to a variable
    # then reassign @head to the element that the current head points to
    # then return the value
    # could implement some safety measures for cases where someone calls pop
    # on empty list
    popped = head ? head.datum : nil
    @head = head ? head.next : nil
    popped
  end

  def self.from_a(arr)
    # create a new instance
    # then use #push to push the elements in the array into the new list
    # return the list
    list = SimpleLinkedList.new
    arr ? arr.reverse.each { |el| list.push(el) } : nil
    list
  end

  def to_a
    # same deal as with #size. Need to slide along the linked list and this time
    # add each datum to the output arr, rather than increment a counter
    # then return arr
    arr = []
    pointer = head
    while pointer
      arr << pointer.datum
      pointer = pointer.next
    end
    arr
  end

  def reverse
    # just use the ::from_a method
    SimpleLinkedList.from_a(to_a.reverse)
  end
end

class Element
  attr_reader :datum, :next

  def initialize(val, el2 = nil)
    # default value of nil for elements that are created without some other
    # element to point to
    @datum = val
    @next = el2
  end

  def tail?
    @next == nil
  end
end
=end

class SimpleLinkedList
  attr_reader :head

  def size
    counter = 0
    pointer = head
    while pointer
      pointer = pointer.next
      counter += 1
    end
    counter
  end

  def empty?
    head.nil?
  end

  def push(el)
    new_element = Element.new(el, @head)
    @head = new_element
  end

  def peek
    head.nil? ? head.datum : nil
  end

  def pop
    popped = head.nil? ? head.datum : nil
    @head = head.nil? ? head.next : nil
    popped
  end

  def self.from_a(arr)
    list = SimpleLinkedList.new
    arr.nil? ? arr.reverse.each { |el| list.push(el) } : nil
    list
  end

  def to_a
    arr = []
    pointer = head
    while pointer
      arr << pointer.datum
      pointer = pointer.next
    end
    arr
  end

  def reverse
    SimpleLinkedList.from_a(to_a.reverse)
  end
end

class Element
  attr_reader :datum, :next

  def initialize(val, el2 = nil)
    @datum = val
    @next = el2
  end

  def tail?
    @next.nil?
  end
end
