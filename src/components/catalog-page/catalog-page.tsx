import * as React from 'react';
import {connect} from 'react-redux';
import {LoadingDataStatus} from '../../consts';
import {Operations} from '../../redux/catalog/operations';
import {getCatalogPromoMovie, getCatalogStatus} from '../../redux/catalog/selectors';
import BigMovieCard from '../big-movie-card/big-movie-card';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import LoadingDataBlock from '../loading-data-block/loading-data-block';
import Logo from '../logo/logo';
import {TMovie} from '../types';
import UserBlock from '../user-block/user-block';

type TCatalogPageProps = {
  status?: LoadingDataStatus;
  promoMovie?: TMovie;

  onMount?: Function;
};

class CatalogPage extends React.PureComponent<TCatalogPageProps> {

  public componentDidMount() {

    const {onMount} = this.props;

    onMount();
  }

  public render() {

    const {status, promoMovie} = this.props;

    if (status !== LoadingDataStatus.READY) {
      return <LoadingDataBlock status={status} />;
    }

    return (
      <>
        <section className="movie-card">
          <div className="movie-card__bg" style={{backgroundColor: promoMovie.backgroundColor}}>
            <img src={promoMovie.backgroundImage} alt={promoMovie.title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo />
            <UserBlock />
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={promoMovie.poster} alt={`${promoMovie.title} poster`} width="218" height="327" />
              </div>
              <BigMovieCard
                movie={promoMovie}
              />
            </div>
          </div>
        </section>
        <div className="page-content">
          <Catalog />
          <Footer />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: getCatalogStatus(state),
    promoMovie: getCatalogPromoMovie(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      dispatch(Operations.init());
    },
  };
}

export {CatalogPage};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
