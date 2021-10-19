class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :user_name, :user_image, :life_hack_id

  def user_name
    object.user.username
  end
  def user_image
    object.user.image
  end
end
