class LifeHackSerializer < ActiveModel::Serializer
  attributes :id, :title, :life_hack_type, :image, :description
  has_many :reviews
end
