class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :user_name, :life_hack_id

  def user_name
    object.user.username
  end
end
