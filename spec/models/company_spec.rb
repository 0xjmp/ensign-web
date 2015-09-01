require 'rails_helper'

RSpec.describe Company, type: :model do 
  let(:company){create(:company)}

  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:headquarters_location) }
  it { is_expected.to respond_to(:headquarters_latitude) }
  it { is_expected.to respond_to(:headquarters_longitude) }
  it { is_expected.to respond_to(:employee_count) }
  it { is_expected.to respond_to(:funding_amount) }
  it { is_expected.to respond_to(:funding_round) }
  it { is_expected.to respond_to(:jobs) }
  it { is_expected.to respond_to(:social_media_profiles) } 
  it { is_expected.to respond_to(:profile_image) }
  it { is_expected.to respond_to(:employees) }
  it { is_expected.to respond_to(:interests) }

  describe 'description' do 
    it { is_expected.to respond_to(:description) }

    context 'while over char limit' do 
      it 'throws error' do 
        company.description = Faker::Lorem.paragraph(10)
        company.save
        expect(company).to be_invalid
      end
    end
  end

end