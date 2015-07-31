"use strict";

var Ensign = React.createClass({
  getInitialState: function() {
    return CandidateStore.getState();
  },
  render: function() {
    return <Cards cards={this.state.candidates} cardType="candidate" />;
  }
});

window.onload = function() {
  React.render(
    <Ensign />,
    document.getElementById('ensign')
  );
}