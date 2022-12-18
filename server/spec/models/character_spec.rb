require 'rails_helper'

RSpec.describe Character, item_type: :model do
  let(:user) { User.create(username: "New User", email: "123@123.com", password: "nope") }
  let(:character) { Character.create(user: user, name: "Leeroy Jenkins", role: "Wizard") }
  let(:character2) { Character.create(user: user, name: "Leeroy Jenkins", role: "Wizard") }

  it "must belong to a user" do
    character.user = nil
    expect(character.valid?).to be false
  end
  
  it "is invalid without a name" do
    character.name = nil
    expect(character.valid?).to be false
  end

  it "is invalid without a role" do
    character.role = nil
    expect(character.valid?).to be false
  end

  it "has a unique name" do
    character.valid?
    expect(character2.valid?).to be false
  end

  it "is created with level, exp, health and mana" do
    expect(character.exp).to eq(0)
    expect(character.level).to eq(1)
    expect(character.max_health).to eq(100)
    expect(character.max_mana).to eq(100)
  end

  # ------------------------------------------------
  describe 'validations: ' do
    let(:invalid) { Character.new }

    before do
      invalid.valid?
    end
    it 'raises error from name validation' do
      expect(invalid.errors[:name].size).to eq(1)
    end

    it 'raises error from role validation' do
      expect(invalid.errors[:role].size).to eq(1)
    end

    it 'raises error from user validation' do
      expect(invalid.errors[:user].size).to eq(2)
    end
  end

  # ------------------------------------------------
  describe 'items: ' do
    let(:gold) { Item.create(character: character, name: "Gold", item_type: "gold", slot: "gold", value: 1, quantity: 100)}
    let(:helmet) { Item.create(character: character, name: "Viking Helmet", item_type: "gear_head", slot: 1)}
    let(:sword) { Item.create(character: character, name: "Flaming Sword", item_type: "gear_weapon2", slot: 2)}
    let(:food) { Item.create(character: character, name: "Meat Pie", item_type: "food", slot: 3, quantity: 1)}
    let(:potion) { Item.create(character: character, name: "Small Healing Potion", item_type: "food", slot: 4)}
    let(:diamond) { Item.create(character: character, name: "Diamond", item_type: "Quest", slot: "quest")}

    before do
      gold.save
      helmet.save
      sword.save
      food.save
      potion.save
      diamond.save
    end
    it 'can have multiple items' do
      expect(character.valid?).to be true
    end

    it 'has a gold value' do
      expect(character.gold).to eq(100)
    end

    it 'items increase item count when assigned to a slot' do
      expect(character.item_count).to eq(4)
    end

    it 'items can be equipped' do
      helmet.update(slot: "gear_head")
      expect(character.valid?).to be true
      expect(helmet.valid?).to be true
      expect(character.equipped("gear_head")).to eq(helmet)
    end

    it 'equipped items do not increase item count' do
      helmet.update(slot: "gear_head")
      expect(character.item_count).to eq(3)
    end

    it 'cannot have two items in the same slot' do
      sword2 = Item.create(character: character, name: "Flaming Sword", item_type: "gear_weapon2", slot: 2)
      sword2.valid?
      expect(sword2.errors[:slot].size).to eq(1)
    end

    it 'stackable items can stack' do
      pie2 = Item.create(character: character, name: "Meat Pie", item_type: "food", slot: 5, quantity: 1)
      # getting "can't modify frozen attributes"
      expect(character.items.all.find {|item| item.name == "Meat Pie"}.quantity).to eq(2)
    end
  end
end
