class Company < ActiveRecord::Base

	validates :description, length: { maximum: 200 } 

	mount_uploader :profile_image, ProfileImageUploader

  has_many :interests
	has_many :jobs
	has_many :social_media_profiles, as: :socialable

	has_many :employees, class_name: 'User'

  def find_candidates
    User.includes(:social_media_profiles).reject { |user|
      interests.where(interestable: user).any?
    }.map { |user|
      user.find_related_skills
    }.flatten.uniq
  end

end