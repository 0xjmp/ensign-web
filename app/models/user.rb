class User < ActiveRecord::Base

  has_many :profiles, dependent: :destroy

  def hourly_rate
    sprintf('%.2f' hourly_rate)
  end

  def name
    unless first_name.nil? || last_name.nil?
      first_name + last_name
    end
  end

end