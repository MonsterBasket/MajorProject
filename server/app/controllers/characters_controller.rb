class CharactersController < ApplicationController
  before_action :set_character, only: %i[show edit update destroy]

  def index
    @characters = Character.all.where("user_id = ?", params[:user_id])
    if @characters
      render json: { characters: @characters }
    else
      render json: { status: 500, errors: ['no users found']}
    end
  end

  def new
    @character = Character.new
  end

  def create
    @character = Character.new(character_params)
    if @character.save
      render json: { status: :created }
    else
      render json: { status: 500, errors: @character.errors.full_messages }
    end
  end

  def show; end

  def save_pos
    @character = Character.find(params[:character][:id])
    @character.update(location_params)
  end

  def edit; end

  def destroy
    @character.destroy
    @characters = Character.all
    render json: { characters: @characters}
  end

  private

  def set_character
    @character = Character.find(params[:id])
  end

  def location_params
    params.require(:character).permit(:id, :map, :pos_x, :pos_y, :health, :mana)
  end

  def character_params
    params.require(:character).permit(:user_id, :name, :role)
  end
end