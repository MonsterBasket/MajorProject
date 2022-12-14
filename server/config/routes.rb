Rails.application.routes.draw do
  resources :users, only: [:create, :show, :index, :destroy] do
    resource :items, only: [:create, :update, :show, :index, :destroy]
  end
  resources :characters, only: [:new, :create, :update, :show, :index, :destroy]
  resources :items, only: [:create, :show, :index, :destroy]

  root to: 'application#index'

  # authentication
  get '/login',     to: 'users#login'
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  # get 'select_character', to: 'characters#index'
  patch 'location', to: 'characters#save_pos'
  patch 'user/admin', to: 'users#admin'
  patch 'items', to: 'items#update'
  # get 'items/', to: 'characters#equipped'
end