class LifeHackSerializer < ActiveModel::Serializer
  attributes :id, :title, :kind, :image, :description
  has_many :reviews
end
