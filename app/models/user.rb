class User < ActiveRecord::Base

  def fetch_candidates
    candidates = []
    (0..25).each do |i|
      candidates << {
        name: "Candidate ##{i}",
        rate: "$150/hour, $150,000/year",
        education: "Masters in Computer Science",
        experience: '12 years professional experience',
        location: "Remote",
        profiles: [
          {
            type: 'linkedin',
            src: 'https://linkedin.com/in/jakepeterso'
          },
          {
            type: 'twitter',
            src: 'https://twitter.com/jakepeterso'
          }
        ]
      }
    end
  end

end