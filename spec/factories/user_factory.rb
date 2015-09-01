require 'faker'

FactoryGirl.define do

  sequence :last_name do |i|
    "User #{i}"
  end

  sequence :email do |i|
    "#{Faker::Internet.email}#{i}"
  end

  factory :user do
    first_name 'Test'
    last_name {generate(:last_name)}
    hourly_rate 150.00
    yearly_rate 150000
    education 'Ghetto University'
    years_experience 6
    location 'Los Angeles, CA'
    workplace_preference 'Remote'
    email {generate(:email)}
    password Faker::Internet.password
  end

end