class CreateLifeHackUserLoves < ActiveRecord::Migration[6.1]
  def change
    create_table :life_hack_user_loves do |t|
      t.references :life_hack, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :count, default: 0

      t.timestamps
    end
  end
end
