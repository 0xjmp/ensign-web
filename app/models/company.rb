class Company < ActiveRecord::Base

	validates :description, length: { maximum: 200 } 

	mount_uploader :profile_image, ProfileImageUploader

	has_many :jobs
	has_many :social_media_profiles, as: :socialable

end