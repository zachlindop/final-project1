class LifeHackUserHateSerializer < ActiveModel::Serializer
  attributes :id, :count, :total_hates_for_life_hack
  has_one :life_hack
  has_one :user
end
