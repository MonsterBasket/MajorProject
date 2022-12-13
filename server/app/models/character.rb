class Character < ApplicationRecord
  belongs_to :user
  has_many :items, :dependent => :delete_all

  validates_presence_of :user, :name, :role
  validates_uniqueness_of :name

  attribute :max_health, :integer, default: 100
  attribute :max_mana, :integer, default: 100
  attribute :current_health, :integer, default: 100
  attribute :current_mana, :integer, default: 100
  attribute :level, :integer, default: 1
  attribute :exp, :integer, default: 0

  def equipped(type)
    self.items.all.find { |item| item.item_type == type && item.slot == type }
  end

  def item_count
    self.items.all.count { |item| item.slot.to_i.to_s == item.slot && item.slot.to_i > 0 && item.slot.to_i <= 50 }
  end

  def gold
    self.items.all.find { |item| item.name == "Gold" }.quantity
  end

end
