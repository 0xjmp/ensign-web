FactoryGirl.define do

  sequence :last_name do |i|
    "User #{i}"
  end

  factory :user do
    first_name 'Test'
    last_name {generate(:last_name)}
    hourly_rate 150.00
    yearly_rate 150000
    education 'Ghetto University'
    years_experience 6
    location 'Remote'
  end

end