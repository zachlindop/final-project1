class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :life_hack_id
end
