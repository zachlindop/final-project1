class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :about, :password_digest
end
