class User < ActiveRecord::Base

  def fetch_candidates
    candidates = []
    (0..25).each do |i|
      candidates << {
        name: "Candidate ##{i}",
        rate: "$150/hour, $150,000/year",
        education: "Masters in Computer Science",
        location: "Remote"
      }
    end
  end

end