class Company < ActiveRecord::Base

	validates :description, length: { maximum: 200 } 

	mount_uploader :profile_image, ProfileImageUploader

  has_many :interests
	has_many :jobs
	has_many :social_media_profiles, as: :socialable

	has_many :employees, class_name: 'User'

  def find_candidates
    user_interests = interests.where(interestable_type: 'User')
    User.select do |user|
      !user_interests.include? user
    end
  end

end