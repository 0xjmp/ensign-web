class FindCandidates
  include Service
  include Virtus.model(strict: true)

  def call
    Success.new(candidates: User.find_candidates)
  end

end