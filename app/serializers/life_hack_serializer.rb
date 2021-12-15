class LifeHackSerializer < ActiveModel::Serializer
  attributes :id, :title, :life_hack_type,
    :image, :description, :total_loves, :total_hates, :total_so_sos
  has_many :reviews
end
