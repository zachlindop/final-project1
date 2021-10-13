class CreateWorkStudyLifeHacks < ActiveRecord::Migration[6.1]
  def change
    create_table :work_study_life_hacks do |t|
      t.string :life_hack
      t.string :description

      t.timestamps
    end
  end
end
