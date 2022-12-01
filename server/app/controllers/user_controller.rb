class UsersController < ApplicationController
  before_action :set_user, only: %i[show edit update]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        login!
        format.html { redirect_to select_character_path, alert: 'Account created, welcome to Monster Basket!'}
      else
        format.html { render :new, status: :bad_request }
      end
    end
  end

  def login
    @user
  end

  def show
  end

  def update

    respond_to do |format|
      @user.email = user_params[:email]
      @user.password = user_params[:password]
      @user.save

      format.all {redirect_to user_url(@user), alert: "Details saved."}
    end
  end

  def edit; end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    # params.fetch(:user, {})
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end