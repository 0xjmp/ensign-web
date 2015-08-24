class Company < ActiveRecord::Base

	validates :description, length: { maximum: 200 } 

	has_many :jobs
	has_many :social_media_profiles, as: :socialable

end