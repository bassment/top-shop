Header = React.createClass({
  render() {
    return (
      <header>
        <nav id="custom-nav" className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">

                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href={FlowRouter.path('home')}>
                Top Shop
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav pull-right">
                <li><a href={FlowRouter.path('shoes')}>Shoes<span className="sr-only">(current)</span></a></li>
                <li><a href={FlowRouter.path('clothes')}>Clothes</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
});
