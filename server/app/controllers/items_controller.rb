class ItemsController < ApplicationController
  before_action :set_item, only: %i[show edit update]

  def index
    @items = Item.all.where("character_id = ?", params[:character_id])
    if @items
      render json: { items: @items }
    else
      render json: { status: 500, errors: ['no users found']}
    end
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: { status: :created }
    else
      render json: { status: 500, errors: @item.errors.full_messages }
    end
  end

  def show; end
  
  def update
  end

   private
   def set_item
    @item = Item.find(params[:id])
   end

  def item_params
    params.require(:item).permit(:character_id, :slot, :quantity)
  end
end