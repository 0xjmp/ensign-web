require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user){create(:user)}
  let(:jobs){create_list(:job, 2)}
  let(:already_seen_jobs){create_list(:job, 2)}

  before :each do 
    jobs.each {|job| job.save!}
  end

  it { is_expected.to respond_to(:hourly_rate) }
  it { is_expected.to respond_to(:first_name) }
  it { is_expected.to respond_to(:last_name) }
  it { is_expected.to respond_to(:employer) }
  it { is_expected.to respond_to(:social_media_profiles) }
  it { is_expected.to respond_to(:profile_image) }
  it { is_expected.to respond_to(:is_employed?) }
  it { is_expected.to respond_to(:potential_jobs) }
  it { is_expected.to respond_to(:interests) }
  it { is_expected.to respond_to(:skills) }

  it 'has name' do 
    expect(user.name).to eq user.first_name + user.last_name
  end

  describe 'potential_jobs' do 

    context 'while user has interests' do 
      before :each do 
        already_seen_jobs.each do |job|
          Interest.create!(
            interestable: job,
            user: user
          )
        end
      end

      it 'finds unique jobs' do 
        expect(user.potential_jobs.count).to eq jobs.count
      end
    end

    context 'while user has no interests' do 
      before :each do 
        already_seen_jobs.each {|job| job.save!}
      end

      it 'finds jobs' do 
        expect(user.potential_jobs.count).to eq jobs.count + already_seen_jobs.count
      end
    end
  end
end