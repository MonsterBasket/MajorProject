class ItemsController < ApplicationController
  before_action :set_item, only: %i[show edit update]

  def index
    @items = Item.all.where("character_id = ?", params[:character_id])
    if @items
      render json: { items: @items }
    else
      render json: { status: 500, errors: ['no items found']}
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

  def dropped
    @items = Item.all.where("character_id = ? AND slot = ? AND world_page = ?", params[:character_id], "floor", params[:world_page])
              .or(Item.all.where("character_id = ? AND slot = ? AND world_page = ?", 0, "floor", params[:world_page]))
    if @items
      render json: { items: @items }
    else
      render json: { status: 500, errors: ['no items found']}
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
    params.require(:item).permit(:character_id, :slot, :quantity, :img_pos_x, :img_pos_y, :item_type, :name, :world_page, :world_pos_x, :world_pos_y)
  end
end