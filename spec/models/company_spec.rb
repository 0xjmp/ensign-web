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
  it { is_expected.to respond_to(:find_candidates) }

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

  describe 'find_candidates' do 
    let(:user){create(:user)}
    let(:users){create_list(:user, 2)}
    let(:already_seen_users){create_list(:user, 2)}

    before :each do 
      users.each do |u|
        u.save!
      end
    end

    context 'while company has interests' do 

      before :each do 
        already_seen_users.each do |u|
          Interest.create!(
            interestable: u,
            user: user,
            company: company
          )
        end
        already_seen_users.each {|u| u.save!}
      end

      it 'finds unique candidates' do 
        expect(company.find_candidates.count).to eq users.push(user).count
      end
    end

    context 'while company has no interests' do 
      before :each do 
        already_seen_users.each {|u| u.save!}
      end

      it 'finds candidates' do
        expect(company.find_candidates.count).to eq users.count + already_seen_users.count
      end
    end
  end
end