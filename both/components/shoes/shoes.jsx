var {
  RaisedButton,
  Styles,
  Checkbox
} = MUI;

var { ThemeManager } = Styles;

Shoes = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <div className="well">
            <h1>This is the page for Shoes!</h1>
            <RaisedButton
              linkButton={true}
              primary={true}
              href="/clothes"
              label="Clothes" />
            <Checkbox id="checkboxId1"
              name="checkboxName1"
              value="checkboxValue1"
              label="went for a run today"
              style={{
                width: '50%',
                margin: '0'
              }}
              iconStyle={{
                fill: '#FF4081'
              }} />
          </div>
        </div>
      </div>
    );
  }
});
