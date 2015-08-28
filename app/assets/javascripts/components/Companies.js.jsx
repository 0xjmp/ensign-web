var Companies = React.createClass({
  propTypes: {  
    companies: React.PropTypes.array
  },
  render: function() {
    return (
      <div id="main-wrapper">
        <ul className="cards-wrapper">
            {this.props.companies.map(function(card) {
              return (
                <li key={card.id} className="card">
                  <Company company={card} />
                </li>
              );
            })}
        </ul>
        <InterestButtons result={this.getNextCandidate} />
      </div>
    );
  }
});