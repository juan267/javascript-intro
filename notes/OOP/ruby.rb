class Animal
  attr_accessor :name

  def initialize(name)
    @name = name
    @alive = true
  end
end

class Cow < Animal
  attr_accessor :stomages

  def initialize(name)
    super(name)
    @stomages = 4
  end

  def muu
    puts "#{name} Muuuuu"
  end
end


class Dog < Animal
  attr_accessor  :breed

  def initialize(name,breed)
    super(name)
    @breed = breed
  end

  def woof
    puts "#{name} Woof"
  end
end

ozu = Dog.new('ozu', 'breed')
lola = Dog.new('lola')

ozu.woof
lola.muu
ozu.name
lola.alive




