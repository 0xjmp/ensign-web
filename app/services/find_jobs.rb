class FindJobs
  include Service
  include Virtus.model(strict: true)

  attribute :page
  attribute :user_id

  def call
  	user = User.find(user_id)
    Success.new(jobs: user.potential_jobs(page))
  end

end