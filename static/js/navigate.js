/** @jsx React.DOM */

var UnderFooterCopyright = React.createClass({
  render: function() {
    var org = React.DOM.a({href: "http://sbp-conference.org"}, "SBP");
    var author = React.DOM.a({href: "http://twitter.com/katychuang"}, "Kat Chuang");
    return (
        <div className="copyright">
            2013-2015, {org}.
            Designed by {author}
        </div>
    );
  }
});         

React.renderComponent(
  <UnderFooterCopyright />,
  document.getElementById('under-footer-copyright')
);

var UnderFooterLogo = React.createClass({
  render: function() {
    var org = React.DOM.a({href: "./"}, "SBP");
    return (
      <div>
        {org}
      </div>
    );
  }
});         

React.renderComponent(
  <UnderFooterLogo />,
  document.getElementById('under-footer-logo')
);

