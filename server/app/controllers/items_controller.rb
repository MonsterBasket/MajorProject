class ItemsController < ApplicationController
  before_action :set_item, only: %i[show edit]

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
      render json: { status: :created, item: @item }
    else
      render json: { status: 500, errors: @item.errors.full_messages }
    end
  end

  def show
  end
  
  def update
    @item = Item.find(params[:item][:id])
    @item.update(item_params)
    @items = Item.all.where("character_id = ?", @item[:character_id])
    render json: { items: @items }
  end

   private
   def set_item
    @item = Item.find(params[:id])
   end

  def item_params
    params.require(:item).permit(:character_id, :slot, :quantity, :img_pos_x, :img_pos_y, :item_type, :name, :world_page, :world_pos_x, :world_pos_y)
  end

  # def set_cache_buster
  #   response.headers["Access-Control-Allow-Origin"] = "https://monsterbasket.com.au"
  # end
end