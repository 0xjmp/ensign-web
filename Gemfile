source 'https://rubygems.org'

ruby '2.2.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.3'
# Use sqlite3 as the database for Active Record
gem 'virtus'

# Use SCSS for stylesheets
gem 'bootstrap-sass'
gem 'sass-rails', '~> 5.0'
gem 'coffee-rails'
gem 'uglifier', '>= 1.3.0'
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'fog'
gem 'fog-aws'
gem 'carrierwave'
gem 'mini_magick'
gem 'kaminari'
gem 'devise'
gem 'puma'
gem 'slim'
gem 'react-rails'
gem 'font-awesome-rails'
gem 'sidekiq'
gem 'newrelic_rpm'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

###### FRONT-END ASSETS #######
rails_assets_url = 'https://rails-assets.org/'
source rails_assets_url do
  gem 'rails-assets-flux'
  gem 'rails-assets-jquery'
  gem 'rails-assets-bean'
  gem 'rails-assets-object-assign-shim'
  gem 'rails-assets-swing'
  gem 'rails-assets-numeral'
end

gem 'pry'
group :development, :test do
  gem 'sqlite3'
  gem 'spring'
  gem 'rspec-rails'
  
  gem 'factory_girl_rails'
  gem 'teaspoon-jasmine'
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-livereload'
  gem 'guard-flow'
  gem 'guard-teaspoon'
  gem 'faker', '~> 1.4.3'
  gem 'capybara'
  gem 'dotenv-rails'
end

group :staging, :production do 
  gem 'pg'
  gem 'rails_12factor'
end