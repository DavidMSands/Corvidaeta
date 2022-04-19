class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :is_dark, :password_digest
end
