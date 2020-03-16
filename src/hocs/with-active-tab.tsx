import * as React from 'react';

type TWithActiveTabProps = {
  movie: TMovie;
}

type TWithActiveTabState = {
  activeTab: number;
}

function withActiveTab(Component: any) {

  class WithActiveTab extends React.PureComponent<TWithActiveTabProps, TWithActiveTabState> {
    public constructor(props: TWithActiveTabProps) {
      super(props);

      this.state = {
        activeTab: 0,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    private _handleTabClick({index}) {
      this.setState({
        activeTab: index,
      });
    }

    public render() {

      const {activeTab} = this.state;
      const {movie} = this.props;

      return (
        <Component
          movie={movie}
          activeTab={activeTab}
          onTabClick={this._handleTabClick}
        />
      );
    }
  }

  return WithActiveTab;
}

export default withActiveTab;
