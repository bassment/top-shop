var {RaisedButton} = MUI;

Clothes = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <div className="well">
            <h1>This is the page for Clothes!</h1>
            <RaisedButton
              linkButton={true}
              secondary={true}
              href="/shoes"
              label="Shoes" />
          </div>
        </div>
      </div>
    );
  }
});
