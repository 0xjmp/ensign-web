class User < ActiveRecord::Base

  has_many :profiles, dependent: :destroy

  def hourly_rate
    sprintf('%.2f', super)
  end

  def name
    unless first_name.nil? || last_name.nil?
      first_name + last_name
    end
  end

  def self.find_candidates
    # TODO:
    all.empty? ? [create!({
      first_name: 'Jake',
      last_name: 'Peterson',
      hourly_rate: 150,
      yearly_rate: 150000,
      education: 'Stanford'
    })] : all
  end

end