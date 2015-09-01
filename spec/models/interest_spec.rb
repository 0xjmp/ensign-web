require 'rails_helper'

RSpec.describe Interest, type: :model do 
  
  it { is_expected.to respond_to(:result) }
  it { is_expected.to respond_to(:interestable) }

end