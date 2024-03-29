class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  paginates_per 25

  mount_uploader :profile_image, ProfileImageUploader

  has_many :social_media_profiles, as: :socialable
  
  has_many :interests
  belongs_to :employer, class_name: 'Company'

  acts_as_taggable_on :skills

  def potential_jobs(page=1)
    Job.page(page).reject { |job|
      interests.where(interestable: job).any?
    }.map { |job|
      job.find_related_desired_skills
    }.flatten.uniq
  end

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

  def as_json(opts=nil)
    super(include: [:social_media_profiles, :skills])
  end

  def is_employed?
    !employer.nil?
  end

end