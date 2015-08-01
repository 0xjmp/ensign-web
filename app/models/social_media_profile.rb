class SocialMediaProfile < ActiveRecord::Base

  belongs_to :user

  validates_presence_of :social_type, :url

end