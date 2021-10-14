class LifeHackSerializer < ActiveModel::Serializer
  attributes :id, :title, :kind, :image, :description
end
