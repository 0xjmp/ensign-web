class FindCandidates
  include Service
  include Virtus.model(strict: true)

  attribute :page

  def call
    Success.new(candidates: User.page(page))
  end

end