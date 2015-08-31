FactoryGirl.define do 

	factory :job do 
		company
		location 'Los Angeles, CA'
		location_required true
		hourly_rate 100.00
		annual_rate 140000.00
		title 'Meat packer'
		team_size 5
		description "We pack a lot of meat..."
	end

end