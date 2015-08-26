describe 'CandidateStore', ->

  it 'should emit change', ->
    callback = jasmine.createSpy('callback')
    CandidateStore.addChangeListener callback
    CandidateStore.emitChange()

    expect(callback).toHaveBeenCalled()
    return

  describe 'getState', ->
    state = {}

    beforeEach ->
      state = CandidateStore.getState()

    it 'has candidates', ->
      expect(state.candidates).toEqual([])
      return

    it 'has interests', ->
      expect(state.interests).toEqual({})
      return

    it 'has page', ->
      expect(state.page).toEqual(1)
      return

  it 'fetches candidates', ->
    spyOn(_api, 'request')
    state = CandidateStore.getState()
    CandidateStore.fetchCandidates()

    waitsFor(->
      return _api.request.callCount > 0
    )
    runs(->
      expect(state.candidates.length).toBeGreaterThan 0
    )
    return

  it 'should send results', ->

  it 'should get next candidate', ->