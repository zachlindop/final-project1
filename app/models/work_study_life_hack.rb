class WorkStudyLifeHack < ApplicationRecord
    has_many: :work_study_life_hack_reviews
    has_many: :users, through: :work_study_life_hack_reviews
end
