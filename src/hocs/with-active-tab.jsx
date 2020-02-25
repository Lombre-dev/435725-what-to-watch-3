import React from 'react';

export default function withActiveTab(Component) {

  class WithActiveTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: 0,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick({index}) {
      this.setState({
        activeTab: index,
      });
    }

    render() {

      const {activeTab} = this.state;

      return (
        <Component {...this.props}
          activeTab={activeTab}
          onTabClick={this._handleTabClick}
        />
      );
    }
  }

  WithActiveTab.propTypes = {
  };

  return WithActiveTab;
}
