MainLayout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-default">
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
                <a className="navbar-brand" href="/">Top Shop</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><a href="/shoes">Shoes<span className="sr-only">(current)</span></a></li>
                  <li><a href="/clothes">Clothes</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main>{this.props.content}</main>

        <footer>
          <p className="text-muted">Place sticky footer content here.</p>
        </footer>
      </div>
    );
  }
});
