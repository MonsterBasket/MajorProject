class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name, null: false
      t.string :role, null: false
      t.integer :exp, null: false
      t.integer :level, null: false
      t.integer :health, null: false
      t.integer :mana, null: false
      t.integer :items
      t.integer :map
      t.integer :pos_x
      t.integer :pos_y

      t.timestamps
    end
  end
end
