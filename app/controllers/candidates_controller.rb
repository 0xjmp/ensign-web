class CandidatesController < ApplicationController

  def index
    result = FindCandidates.call
    render json: result.display
  end

end