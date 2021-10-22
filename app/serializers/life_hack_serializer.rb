class LifeHackSerializer < ActiveModel::Serializer
  attributes :id, :title, :life_hack_type,
    :image, :description, :total_loves, :total_hates
  has_many :reviews
end
