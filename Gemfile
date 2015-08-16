source 'https://rubygems.org'

ruby '2.2.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.3'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
gem 'virtus'

# Use SCSS for stylesheets
gem 'bootstrap-sass'
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
gem 'carrierwave'
gem 'mini_magick'
gem 'kaminari'
gem 'devise'

gem 'slim'
gem 'react-rails'
gem 'font-awesome-rails'

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
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'rspec-rails'
  gem 'pry'
  gem 'factory_girl_rails'
end

group :development do
  gem 'guard'
  gem 'guard-rspec'
  gem 'guard-livereload'
  gem 'guard-flow'
  gem 'faker', '~> 1.4.3'
end

group :test do
  source rails_assets_url do
    gem 'rails-assets-jest'
  end
end
