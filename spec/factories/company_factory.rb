FactoryGirl.define do

  factory :company do 
    name 'Company'
    headquarters_location 'Salt Lake City, UT'
    headquarters_latitude '127.83'
    headquarters_longitude '-81.03'
    employee_count 30
    funding_amount 14000000
    funding_round 'B'
    description "We revolutionize the way you dance"
  end

end