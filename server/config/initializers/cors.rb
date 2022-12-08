Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "https://venerable-parfait-9bf8a1.netlify.app"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
  allow do
    origins "http://monsterbasket.com.au"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
  allow do
    origins "http://www.monsterbasket.com.au"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
  allow do
    origins "https://monsterbasket.com.au"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
  allow do
    origins "https://www.monsterbasket.com.au"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
  allow do
    origins "http://localhost:8080"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
