if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_monster-basket', domain: 'monster-basket-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_monster-basket'
end