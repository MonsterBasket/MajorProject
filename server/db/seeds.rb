# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

item =    Item.create(character_id: 14, name: "Generic Item",         item_type: "generic",      slot: 1)
gold =    Item.create(character_id: 14, name: "Gold",                 item_type: "gold",         slot: "gold", value: 1, quantity: 100)
helmet =  Item.create(character_id: 14, name: "Viking Helmet",        item_type: "gear_head",    slot: 2)
sword =   Item.create(character_id: 14, name: "Flaming Sword",        item_type: "gear_weapon2", slot: 3)
food =    Item.create(character_id: 14, name: "Meat Pie",             item_type: "food",         slot: 4, quantity: 1)
potion =  Item.create(character_id: 14, name: "Small Healing Potion", item_type: "food",         slot: 5)
diamond = Item.create(character_id: 14, name: "Diamond",              item_type: "Quest",        slot: "quest")
emerald = Item.create(character_id: 14, name: "Emerald",              item_type: "generic",      slot: 25)
hat     = Item.create(character_id: 14, name: "The hat of Shiny",     item_type: "gear_head",    slot: "head")
chest   = Item.create(character_id: 14, name: "Almost a whole shirt", item_type: "gear_body",    slot: "body")
apple   = Item.create(character_id: 15, name: "Apple",                item_type: "good",         slot: "5")
