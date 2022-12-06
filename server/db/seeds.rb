# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

item =    Item.create(character_id: 1, name: "Generic Item",          img_pos_x: 0,  img_pos_y: 10, item_type: "generic", slot: 1)
gold =    Item.create(character_id: 1, name: "Gold",                  img_pos_x: 10, img_pos_y: 7,  item_type: "gold",    slot: "gold", value: 1, quantity: 100)
helmet =  Item.create(character_id: 1, name: "Viking Helmet",         img_pos_x: 11, img_pos_y: 11, item_type: "head",    slot: 2)
sword =   Item.create(character_id: 1, name: "Flaming Sword",         img_pos_x: 2,  img_pos_y: 21, item_type: "weapon2", slot: 3)
food =    Item.create(character_id: 1, name: "Cookie",                img_pos_x: 12, img_pos_y: 07, item_type: "food",    slot: 4, quantity: 1)
potion =  Item.create(character_id: 1, name: "Small Healing Potion",  img_pos_x: 5,  img_pos_y: 14, item_type: "food",    slot: 5)
potion2 = Item.create(character_id: 1, name: "Medium Healing Potion", img_pos_x: 13, img_pos_y: 14, item_type: "food",    slot: 6)
potion3 = Item.create(character_id: 1, name: "Large Healing Potion",  img_pos_x: 5,  img_pos_y: 15, item_type: "food",    slot: 7)
diamond = Item.create(character_id: 1, name: "Diamond",               img_pos_x: 7,  img_pos_y: 9,  item_type: "Quest",   slot: "quest")
emerald = Item.create(character_id: 1, name: "Emerald",               img_pos_x: 5,  img_pos_y: 9,  item_type: "generic", slot: 25)
hat     = Item.create(character_id: 1, name: "The hat of Shiny",      img_pos_x: 1,  img_pos_y: 11, item_type: "head",    slot: "head")
chest   = Item.create(character_id: 1, name: "Almost a whole shirt",  img_pos_x: 1,  img_pos_y: 0,  item_type: "body",    slot: "body")
apple   = Item.create(character_id: 2, name: "Apple",                 img_pos_x: 3,  img_pos_y: 9,  item_type: "food",    slot: 5)
