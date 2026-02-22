Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://monsterbasket.com.au", "http://www.monsterbasket.com.au", "https://monsterbasket.com.au", "https://www.monsterbasket.com.au"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
# "https://venerable-parfait-9bf8a1.netlify.app", "http://localhost:8080" - not in use origins