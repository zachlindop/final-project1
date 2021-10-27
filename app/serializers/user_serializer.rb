class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :about, :password_digest

  has_many :life_hack_user_loves
  has_many :life_hack_user_hates
end
