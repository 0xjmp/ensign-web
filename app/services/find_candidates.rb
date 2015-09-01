class FindCandidates
  include Service
  include Virtus.model(strict: true)

  attribute :page
  attribute :company_id

  def call
    company = Company.find(company_id)
    Success.new(candidates: Kaminari.paginate_array(company.find_candidates).page(page))
  end

end