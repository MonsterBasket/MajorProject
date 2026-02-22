class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:form][:username])
    if @user && @user.authenticate(params[:form][:password])
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: { 
        message: 'no such user, please try again',
        status: :unauthorized
      }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: {
        logged_in: true,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end

  def destroy
    current_user.invalidate_session!
    logout!
    render json: {
      status: :ok,
      logged_out: true
    }
  end

  # private
  # def set_cache_buster
  #   response.headers["Access-Control-Allow-Origin"] = "https://monsterbasket.com.au"
  # end
end