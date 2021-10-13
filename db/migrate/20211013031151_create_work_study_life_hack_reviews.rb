class CreateWorkStudyLifeHackReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :work_study_life_hack_reviews do |t|
      t.string :review
      t.integer :user_id
      t.integer :work_study_life_hack_id

      t.timestamps
    end
  end
end
