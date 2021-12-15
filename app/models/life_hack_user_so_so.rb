class LifeHackUserSoSo < ApplicationRecord
  belongs_to :life_hack
  belongs_to :user

  def total_so_sos_for_life_hack
    life_hack.total_so_sos
  end
end
