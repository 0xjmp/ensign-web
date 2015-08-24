FactoryGirl.define do 

	factory :social_media_profile do 
		social_type 'Facebook'
		url Faker::Internet.url
		socialable
	end

end