class User < ApplicationRecord
  has_many :characters

  has_secure_password
  validates_presence_of :username, :email
  validates :username, length: { minimum: 3 }
  validates_uniqueness_of :username, :email

  # devise :database_authenticatable, :recoverable, :rememberable

  def authenticatable_salt
    "#{super}#{session_token}"
  end

  def invalidate_session!
    self.session_token = SecureRandom.hex
  end
end
