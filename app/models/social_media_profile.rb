class SocialMediaProfile < ActiveRecord::Base

  belongs_to :socialable, polymorphic: true

  validates_presence_of :social_type, :url

end