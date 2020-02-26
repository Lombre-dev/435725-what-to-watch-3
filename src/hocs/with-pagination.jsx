import React from 'react';

export default function withPagination(Component) {

  class WithPagination extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        page: 0,
      };

      this._handleNextPage = this._handleNextPage.bind(this);
      this._handleToPage = this._handleToPage.bind(this);
      this._handlePrevPage = this._handlePrevPage.bind(this);
    }

    _handleNextPage() {
      this.setState((prevState) => {
        return {
          page: prevState.page + 1,
        };
      });
    }

    _handleToPage(value) {
      this.setState({
        page: value,
      });
    }

    _handlePrevPage() {

      const {page} = this.state;

      if (page > 0) {
        this.setState((prevState) => {
          return {
            page: prevState.page - 1,
          };
        });
      }
    }

    render() {

      const {page} = this.state;

      return (
        <Component {...this.props}
          currentPage={page}
          onNextPage={this._handleNextPage}
          onToPage={this._handleToPage}
          onPrevPage={this._handlePrevPage}
        />
      );
    }
  }

  WithPagination.propTypes = {
  };

  return WithPagination;
}
