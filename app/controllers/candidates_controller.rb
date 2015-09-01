class CandidatesController < ApplicationController

  def index
  	if current_user.is_employed?
    	@result = FindCandidates.call(params.merge({company_id: current_user.employer.id}))
    else
    	redirect_to companies_path
    end
  end

end