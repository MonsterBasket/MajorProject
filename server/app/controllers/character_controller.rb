class CharactersController < ApplicationController
  before_action :set_character, only: %i[show edit update]

  def index
    @characters = Character.all
  end

  def new
    @character = Character.new
  end

  def create
    @character = Character.new(character_params)
    binding.pry
    respond_to do |format|
      if @character.save
        format.json { :show, status: :ok, location: @character}
      else
        format.json { render :new, status: :bad_request }
      end
    end
  end

  def show
  end

  def update

    respond_to do |format|
      @character.email = character_params[:email]
      @character.password = character_params[:password]
      @character.save

      format.all {redirect_to character_url(@character), alert: "Details saved."}
    end
  end

  def edit; end

  private

  def set_character
    @character = Character.find(params[:id])
  end

  def character_params
    # params.fetch(:character, {})
    params.require(:character).permit(:user, :name, :role)
  end
end