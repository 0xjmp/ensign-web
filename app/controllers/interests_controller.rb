class InterestsController < ApplicationController

  helper_method :context

  def create
    interest = Interest.create!(
      interestable: context,
      result: params[:result]
    )

    if current_user.is_employed?
      current_user.employer.interests << interest
    else 
      current_user.interests << interest
    end

    current_user.save!

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