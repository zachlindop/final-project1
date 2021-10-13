class User < ApplicationRecord
    has_many :work_study_life_hack_reviews
    has_many :work_study_life_hacks, through: :work_study_life_hack_reviews
    has_many :home_life_hack_reviews
    has_many :home_life_hacks, through: :home_life_hack_reviews
    has_many :financial_life_hack_reviews
    mas_many :financial_life_hacks, through: :financial_life_hack_reviews

    has_secure_password

    validates :username, presence: true

end

    