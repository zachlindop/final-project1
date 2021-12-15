class FinancialLifeHack < ApplicationRecord
    has_many :financial_life_hack_reviews, dependent: :destroy
    has_many :users, through: :financial_life_hack_reviews
end
