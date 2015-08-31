describe 'CardStore', ->

  describe 'while emitting changes', ->  

    callback = ({})

    beforeEach ->
      callback = jasmine.createSpy('callback')
      return

    describe 'while watching for events', ->
      it 'should notify event listeners', ->
        CardStore.addChangeListener callback
        CardStore.emitChange()
        expect(callback).toHaveBeenCalled()
        return

    describe 'while not watching for events', ->
      it 'should not notify event listeners', ->
        CardStore.removeChangeListener callback
        CardStore.emitChange()
        expect(callback).not.toHaveBeenCalled()
        return

  describe 'getState', ->
    state = {}

    beforeEach ->
      state = CardStore.getState()
      return

    it 'has cards', ->
      expect(state.cards).toEqual([])
      return

    it 'has interests', ->
      expect(state.interests).toEqual({})
      return

    it 'has page', ->
      expect(state.page).toEqual(1)
      return

  pending 'fetches cards', ->

  pending 'sends results', ->

  pending 'gets next candidate', ->