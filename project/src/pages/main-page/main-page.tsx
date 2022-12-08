import Footer from '../../components/footer/footer';
import Catalog from '../../components/page-content/page-content';
import MainPagePromo from './main-page-film-card/main-page-film-card';

function MainPage(): JSX.Element {
  return (
    <div className="container">
      <MainPagePromo />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;

