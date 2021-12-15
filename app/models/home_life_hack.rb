class HomeLifeHack < ApplicationRecord
    has_many :home_life_hack_reviews, dependent: :destroy
    has_many :users, through: :home_life_hack_reviews
end
