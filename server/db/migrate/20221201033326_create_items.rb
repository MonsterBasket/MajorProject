class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.references :character, null: false, foreign_key: true
      t.string :name, null: false
      t.integer :img_pos_x, null: false
      t.integer :img_pos_y, null: false
      t.string :item_type, null: false
      t.string :slot, null: false
      t.integer :value
      t.integer :quantity
      t.boolean :can_sell
      t.boolean :can_trade
      t.string :effect
      t.integer :damage
      t.integer :defence
      t.integer :attack
      t.integer :evasion
      t.integer :magic_attack
      t.integer :magic_defence
      t.integer :world_page
      t.integer :world_pos_x
      t.integer :world_pos_y

      t.timestamps
    end
  end
end
