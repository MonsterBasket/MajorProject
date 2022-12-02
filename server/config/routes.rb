Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :characters, only: [:new, :create, :update, :show, :index, :destroy]
  resources :items, only: [:show, :index, :destroy]

  root to: 'application#index'

  # authentication
  get '/login',     to: 'users#login'
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  get 'select_character', to: 'characters#index'
  # get 'items/', to: 'characters#equipped'
end