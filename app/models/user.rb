class User < ActiveRecord::Base

  has_many :social_media_profiles, dependent: :destroy
  has_many :skills

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
    all.includes(:social_media_profiles, :skills)
  end

end