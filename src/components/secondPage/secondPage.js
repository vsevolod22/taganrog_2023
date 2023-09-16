import Header from '../header/header'
import Place from '../place/place';
import Footer from '../footer/footer'
import './_cont.scss';
function SecondPage() {
  return (
    <div className='container'>
      <Header></Header>
      <Place></Place>
      <Footer></Footer>
    </div>
      
  );
}

export default SecondPage;