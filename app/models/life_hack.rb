class LifeHack < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    has_many :life_hack_user_loves, class_name: LifeHackUserLove.name, dependent: :destroy
    has_many :life_hack_user_hates, dependent: :destroy

    def total_loves
        life_hack_user_loves.sum(:count)
    end

    def total_hates
        life_hack_user_hates.sum(:count)
    end
end
