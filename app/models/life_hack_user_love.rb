class LifeHackUserLove < ApplicationRecord
  belongs_to :life_hack
  belongs_to :user

  def total_loves_for_life_hack
    life_hack.total_loves
  end
end
