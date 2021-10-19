class CreateLifeHacks < ActiveRecord::Migration[6.1]
  def change
    create_table :life_hacks do |t|
      t.string :title
      t.string :life_hack_type
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
