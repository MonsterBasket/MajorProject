# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_01_033326) do
  create_table "characters", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.string "role", null: false
    t.integer "exp", null: false
    t.integer "level", null: false
    t.integer "health", null: false
    t.integer "mana", null: false
    t.integer "items"
    t.integer "map"
    t.integer "pos_x"
    t.integer "pos_y"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "items", force: :cascade do |t|
    t.integer "character_id", null: false
    t.string "name", null: false
    t.string "item_type", null: false
    t.string "slot", null: false
    t.integer "value"
    t.integer "quantity"
    t.boolean "can_sell"
    t.boolean "can_trade"
    t.string "effect"
    t.integer "damage"
    t.integer "defence"
    t.integer "attack"
    t.integer "evasion"
    t.integer "magic_attack"
    t.integer "magic_defence"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_items_on_character_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "characters", "users"
  add_foreign_key "items", "characters"
end
