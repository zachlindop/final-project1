class LifeHack < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    has_many :life_hack_user_loves, class_name: LifeHackUserLove.name, dependent: :destroy
    has_many :life_hack_user_hates, dependent: :destroy
    has_many :life_hack_user_so_sos, dependent: :destroy

    def total_loves
        life_hack_user_loves.sum(:count)
    end

    def total_hates
        life_hack_user_hates.sum(:count)
    end

    def total_so_sos
        life_hack_user_so_sos.sum(:count)
    end
end
