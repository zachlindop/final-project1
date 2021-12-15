class LifeHackUserSoSoSerializer < ActiveModel::Serializer
  attributes :id, :count, :total_so_sos_for_life_hack
  has_one :life_hack
  has_one :user
end
