class CandidatesController < ApplicationController

  def index
    @result = FindCandidates.call(params)
    respond_to do |f|
      f.html
      f.json do
        render json: @result.display
      end
    end
  end

end