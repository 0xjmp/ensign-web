class Company < ActiveRecord::Base

	validates :description, length: { maximum: 200 } 

	mount_uploader :profile_image, ProfileImageUploader

	has_many :jobs
	has_many :social_media_profiles, as: :socialable

	has_and_belongs_to_many :employees, class_name: 'User'

end