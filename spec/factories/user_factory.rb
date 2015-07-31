FactoryGirl.define do

  factory :user do
    first_name 'Test'
    last_name 'User'
    hourly_rate 150.00
    yearly_rate 150000
    education 'Stanford University'
    years_experience 6
    location 'Remote'
  end

end