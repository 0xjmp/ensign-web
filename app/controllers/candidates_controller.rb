class CandidatesController < ApplicationController

  def index
    @candidates = User.find_candidates
  end

end