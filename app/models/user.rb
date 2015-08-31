class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  paginates_per 25

  mount_uploader :profile_image, ProfileImageUploader

  has_many :social_media_profiles, as: :socialable
  has_and_belongs_to_many :skills
  has_and_belongs_to_many :rejected, class_name: 'User'
  has_and_belongs_to_many :accepted, class_name: 'User'
  has_and_belongs_to_many :employers, class_name: 'Company'

  def potential_jobs(page=1)
    Job.includes(:company).page(page)
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

  def self.find_candidates
    all
  end

  def as_json(opts=nil)
    super(include: [:social_media_profiles, :skills])
  end

  def store_results(results)
    results.each do |id, result|
      user = User.find(id)
      result ? accepted << user : rejected << user
    end
    save!
  end

  def is_employed?
    employers.any?
  end

end