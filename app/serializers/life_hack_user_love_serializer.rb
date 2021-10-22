class LifeHackUserLoveSerializer < ActiveModel::Serializer
  attributes :id, :count, :total_loves_for_life_hack
  has_one :life_hack
  has_one :user
end
