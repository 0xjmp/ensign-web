class Job < ActiveRecord::Base

	belongs_to :company

  acts_as_taggable_on :desired_skills

end