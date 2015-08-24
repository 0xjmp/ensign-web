require 'rails_helper'

RSpec.describe SocialMediaProfile, type: :model do 
	let(:social_media_profile){create(:social_media_profile)}

	it { is_expected.to respond_to(:social_type) }
	it { is_expected.to respond_to(:url) }
	it { is_expected.to respond_to(:socialable_type) }
	it { is_expected.to respond_to(:socialable_id) }

end