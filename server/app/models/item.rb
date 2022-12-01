class Item < ApplicationRecord
  belongs_to :character

  validates_presence_of :name, :type, :slot

  attribute :value, :integer, default: 0
  attribute :quantity, :integer, default: 0  # 0 quantity signifies non-stackable
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

end
