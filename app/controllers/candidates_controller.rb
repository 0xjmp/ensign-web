class CandidatesController < ApplicationController

  def index
    @candidates = current_user.fetch_candidates
  end

end