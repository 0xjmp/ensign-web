class WelcomeController < ApplicationController

  skip_before_action :authenticate_user!

  def index
    if user_signed_in?
    	unless current_user.is_employed?
    		redirect_to candidates_path
    	else 
    		redirect_to companies_path
    	end
    end
  end

end