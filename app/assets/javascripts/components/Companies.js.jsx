var Companies = React.createClass({
  propTypes: {  
    jobs: React.PropTypes.array
  },
  render: function() {
    return (
      <div id="main-wrapper">
        <ul className="cards-wrapper">
            {this.props.jobs.map(function(card) {
              return (
                <li key={card.id} className="card">
                  <Company job={card} />
                </li>
              );
            })}
        </ul>
        <InterestButtons result={this.getNextJob} />
      </div>
    );
  }
});