class User < ApplicationRecord
  has_many :characters

  has_secure_password
  validates_presence_of :username, :email
  validates :username, length: { minimum: 4 }
  validates_uniqueness_of :username, :email
end
