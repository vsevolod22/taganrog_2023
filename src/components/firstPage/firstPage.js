import Header from '../header/header'
import MainInfo from '../mainInfo/mainInfo'
import AboutCity from '../aboutCity/aboutCity'
import CityVisit from '../cityVisit/cityVisit'
import Footer from '../footer/footer'
import Cont from '../cont/cont'
import './_cont.scss';



function FirstPage() {
  return (
    <div className='container'>
      <Header></Header>
      <MainInfo></MainInfo>
      <AboutCity></AboutCity>
      <CityVisit></CityVisit>
      <Footer></Footer>
    </div>
      
  );
}

export default FirstPage;