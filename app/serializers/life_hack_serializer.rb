class LifeHackSerializer < ActiveModel::Serializer
  attributes :id, :title, :life_hack_type, :image, :description, :total_loves
  has_many :reviews
end
