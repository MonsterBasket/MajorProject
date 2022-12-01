require 'rails_helper'
require 'pry'

RSpec.describe User, type: :model do
  let(:user) { User.create(username: "New User", email: "123@123.com", password: "nope") }
  let(:user2) { User.create(username: "New User", email: "123@123.com", password: "nope") }


  it "is invalid without a user name" do
    user.username = nil
    expect(user.valid?).to be false
  end

  it "is invalid without an email" do
    user.email = nil
    expect(user.valid?).to be false
  end

  it "is invalid without a password" do
    user.password = nil
    expect(user.valid?).to be false
  end

  it "cannot have the same username or email as another user" do
    binding.pry
    expect(user2.valid?).to be false
  end

  it "is valid with all attributes and no 'has_many' attributions" do
    expect(user.valid?).to be true
  end

  # -----------------------------------------------
  describe 'validations:' do 
    let(:invalid) { User.new }
    
    before do
      invalid.valid?
    end
    it 'validates username' do
      expect(invalid.errors[:username].size).to eq(1)
    end

    it 'validates email' do
      expect(invalid.errors[:email].size).to eq(1)
    end

    it 'validates password' do
      expect(invalid.errors[:password].size).to eq(1)
    end
  end

  # -----------------------------------------------
  describe 'has_many:' do
    let(:character1) { Character.create(user: user, name: "characterName", class: "Wizard") }
    let(:character2) { Character.create(user: user, name: "characterName2", class: "Warrrior") }

    it "user is still valid with multiple characters" do
      expect(user.valid?).to be true
    end
  end
end