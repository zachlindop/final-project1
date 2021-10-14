class LifeHack < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    # validates :title, :kind, :image, :description presence: true

end
