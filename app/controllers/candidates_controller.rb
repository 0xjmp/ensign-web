class CandidatesController < ApplicationController

  def index
    @result = FindJobs.call(params.merge({user_id: current_user.id}))
  end

  def store_results
    current_user.store_results(params[:results])
  end

end