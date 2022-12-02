require 'rails_helper'
require 'pry'

RSpec.describe Character, item_type: :model do
  let(:user) { User.create(username: "New User", email: "123@123.com", password: "nope") }
  let(:character) { Character.create(user: user, name: "Leeroy Jenkins", role: "Wizard") }

  let(:item) { Item.create(character: character, name: "Generic Item", item_type: "generic", slot: 1)}
  let(:gold) { Item.create(character: character, name: "Gold", item_type: "gold", slot: "gold", value: 1, quantity: 100)}
  let(:helmet) { Item.create(character: character, name: "Viking Helmet", item_type: "gear_head", slot: 2)}
  let(:sword) { Item.create(character: character, name: "Flaming Sword", item_type: "gear_weapon2", slot: 3)}
  let(:food) { Item.create(character: character, name: "Meat Pie", item_type: "food", slot: 4, quantity: 1)}
  let(:potion) { Item.create(character: character, name: "Small Healing Potion", item_type: "food", slot: 5)}
  let(:diamond) { Item.create(character: character, name: "Diamond", item_type: "Quest", slot: "quest")}

end