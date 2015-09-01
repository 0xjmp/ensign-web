class InterestsController < ApplicationController

  helper_method :context

  def create
    Interest.create!(
      interestable: context,
      result: params[:result]
    )
    render nothing: true, status: :created
  end

  protected

  def context
    if params[:candidate_id]
      User.find(params[:candidate_id])
    elsif params[:company_id]
      Company.find(params[:company_id])
    end
  end

end