class Review < ApplicationRecord
    belongs_to :user
    belongs_to :life_hack
end
