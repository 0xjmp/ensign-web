require 'rails_helper'

RSpec.describe Skill, type: :model do 

	it { is_expected.to respond_to(:title) }
	it { is_expected.to respond_to(:color) }
	it { is_expected.to respond_to(:amount) }

end