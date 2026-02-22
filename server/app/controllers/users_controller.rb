class UsersController < ApplicationController
  before_action :set_user, only: %i[show edit update delete]

  def index
    @users = User.all
    if @users
      render json: { users: @users }
    else
      render json: {
        status: 500,
        errors: ['no users found']
      }
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!
      render json: { status: :created, user: @user, alert: 'Account created, welcome to Monster Basket!'}
    else
      render json: { status: 500, errors: @user.errors.full_messages }
    end
  end

  def login
    @user
  end

  def show
    if @user
      render json: { user: @user }
    else
      render json: { status:500, errors: ['user not found'] }
    end
  end

  def update
    respond_to do |format|
      @user.email = user_params[:email]
      @user.password = user_params[:password]
      @user.save

      format.all {redirect_to user_url(@user), alert: "Details saved."}
    end
  end

  def admin
    @user = User.find(params[:user][:id])
    @user.update(admin_params)
  end

  def destroy; end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def admin_params
    params.require(:user).permit(:id, :is_admin)
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

  # def set_cache_buster
  #   response.headers["Access-Control-Allow-Origin"] = "https://monsterbasket.com.au"
  # end

end