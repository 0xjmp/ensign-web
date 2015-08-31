class CompaniesController < ApplicationController

	def index
		unless current_user.is_employed?
			@result = FindJobs.call(params.merge({user_id: current_user.id}))
		else 
			redirect_to candidates_path
		end
	end

end