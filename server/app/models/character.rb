class Character < ApplicationRecord
  belongs_to :user
  has_many :items

  validates_presence_of :user, :name, :class
  validates_uniqueness :name

  attr_accessor :health, :mana, :level, 
  attribute :health, :integer, default: 100
  attribute :mana, :integer, default: 100
  attribute :level, :integer, default: 1
  attribute :exp, :integer, default: 0

  def equipped(type)
    self.items.find(|item| item.type == type && item.slot == type)
  end

end
