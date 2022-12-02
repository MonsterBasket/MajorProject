class ItemsController < ApplicationController
  before_action :set_item, only: %i[show edit update]

  def index
    @items = Item.all
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    respond_to do |format|
      if @item.save
        format.json { :show, status: ok, location: @item }
      else
        format.json { render :new, status: :bad_request }
      end
    end
  end

  def show; end
  
  def update
    respond_to do |format|
      if @item.update item_params
        format.json { :show, status: ok, location: @item }
      else
        format.json  {render :new, status: :bad_request }
      end
    end
  end

   private
   def set_item
    @item = Item.find(params[:id])
   end

  def item_params
    params.require(:item).permit(:character, :slot, :quantity)
  end
end