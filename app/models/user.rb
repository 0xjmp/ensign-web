class User < ActiveRecord::Base

  has_many :social_media_profiles, dependent: :destroy
  has_and_belongs_to_many :skills

  mount_uploader :profile_image, ProfileImageUploader

  def hourly_rate
    sprintf('%.2f', super)
  end

  def yearly_rate
    sprintf('%.2f', super)
  end

  def name
    unless first_name.nil? || last_name.nil?
      first_name + last_name
    end
  end

  def self.find_candidates
    # TODO:
    all
  end

  def as_json(opts=nil)
    super(include: [:social_media_profiles, :skills])
  end

end