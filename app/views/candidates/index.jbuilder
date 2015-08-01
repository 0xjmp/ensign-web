if candidates = @candidates
  json.candidates @candidates, partial: 'candidates/candidate', as: :candidate
end