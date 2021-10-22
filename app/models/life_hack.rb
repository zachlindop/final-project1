class LifeHack < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
    has_many :life_hack_user_loves, class_name: LifeHackUserLove.name

    def total_loves
        life_hack_user_loves.sum(:count)
    end

    # validates :title, :kind, :image, :description presence: true

end
