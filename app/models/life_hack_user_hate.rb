class LifeHackUserHate < ApplicationRecord
  belongs_to :life_hack
  belongs_to :user

  def total_hates_for_life_hack
    life_hack.total_hates
  end
end
