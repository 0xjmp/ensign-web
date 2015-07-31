class Profile < ActiveRecord::Base

  validates_presence_of :type, :url

end