class Item < ApplicationRecord
  belongs_to :character, optional: true

  validates_presence_of :name, :item_type, :slot
  validate :check_slot, :stack_item










  attribute :value, :integer, default: 0
  attribute :quantity, :integer, default: -1  # -1 quantity signifies non-stackable, 0 = put in first available slot
  attribute :can_sell, :boolean, default: true
  attribute :can_trade, :boolean, default: true
  attribute :effect, :string, default: ""
  attribute :damage, :integer, default: 0
  attribute :damage, :integer, default: 0
  attribute :defence, :integer, default: 0
  attribute :attack, :integer, default: 0
  attribute :evasion, :integer, default: 0
  attribute :magic_attack, :integer, default: 0
  attribute :magic_defence, :integer, default: 0

  def check_slot
    return if !character || slot.to_i.to_s != slot
    errors.add(:slot, "That slot is already taken") if character.items.all.any? { |item| item.slot == slot && item.id != id}
    # could potentially increase slot by 1 and recall this function to put it into the next available slot
    # you'd want to start at 1.  That should work fine, but would get in the way of any sort functionality
  end

  def stack_item
    return if !character
    return check_item_count if quantity.to_i < 1
    other_item = character.items.all.find { |item| item.name == name && item.id != id } # && item.updated_at != nil && item.updated_at < self.updated_at }
    # binding.pry
    return check_item_count if !other_item
    other_item.quantity = other_item.quantity.to_i + quantity
    other_item.save(validate: false)
    errors.add(:quantity, "Item merged")
  end

  def check_item_count
    return if !character || slot.to_i.to_s != slot
    errors.add(:quantity, "No room in items") if character.item_count >= 50
  end

end
