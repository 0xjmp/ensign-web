class Job < ActiveRecord::Base

	belongs_to :company

  acts_as_taggable_on :desired_skills

  def as_json(opts=nil)
    super(include: [company: {include: :social_media_profiles}])
  end

end