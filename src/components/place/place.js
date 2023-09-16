import React, { Component } from 'react';
import './_place.scss';
import EfrecksiumService from '../efrecksiumServise/efrecksiumServise';
import check from './chehov_house.jpg'
import two from './chehov2.jpg'
import third from './lastMonument.jpg'
import fourth from './petr.png'
import fifth from './primorsk_park.png'


class Place extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charList: [],
            loading: true,
            error: false,
            offset: 200,
            id: ''
        };
        this.efrecksiumService = new EfrecksiumService();
    }

    componentDidMount() {
        this.updateService();
    }

    onCharLoaded = (char) => {
        this.setState({
            charList: char,
            loading: false,
            error: false
        });
    }

    onError = () => {
        this.setState({
            error: true
        });
    }

    updateService = () => {
        this.efrecksiumService
            .getAll()
            .then(res => {
                this.onCharLoaded(res);
            })
            .catch(this.onError);
    }

    render() {
        const { charList, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error occurred while fetching data.</p>;
        }

        return (
            <section className="place">
                <View char={charList[0]} />
            </section>
        );
    }
}

const View = ({ char }) => {

    


    if (!char || char.length === 0) {
        return <p>No data available.</p>;
    }

    function renderItems(char) {

        console.log(char.firstImg)
        return (
<>
                <div key={char.id} className="place__container">
                <div className="place_box">
                        <div className="place__title">{char.title}</div>
                        <div className="place__descr">
                            {char.description}
                        </div>
                    </div>
                    
                    <div className="place__info">
                        <div className="place__info_descr">{char.title}</div>
                        <div className="place__img">
                            <img src={char.firstImg} alt='place' className='place_img'></img>
                            <div className="place__slide_round_right"><span></span><i className="right"></i></div>
                            <div className="place__slide_round_left"><span></span><i className="left"></i></div>
                        </div>
                        
                        
                        <div className="place__img_container">
                            <img className="place__img_small" src={char.secondImg} alt="place1"/>
                            <img className="place__img_small" src={char.thirdImg} alt="place2"/>
                        </div>
                        <div className="place__description"><p>{char.description}</p>
                        </div>
                        <div className="place__contact"><span>Контакты:</span> <br/> {char.contacts}</div>
                        <div className="place__operating_mode"><span>Режим работы:</span> <br/> {char.work}
                </div>
                        
                    </div>
                </div>
                <div className="place__card_container">
                    <div className="place__card"><iframe className='frame' src={`https://yandex.ru/map-widget/v1/?l=masstransit&ll=${char.south}%2C${char.sever}&mode=poi&poi%5Bpoint%5D=${char.south}%2C${char.sever}&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%&z=17.75`} ></iframe></div>
                </div>

                <div className="place_other">
                    <div className="place_other__title">Похожие места</div>
                    <div className="place_other__container">
                        <div className="place_other__img">
                            <img src={char.nextPlace} alt="place" className="place_other_img"/>
                            <div className="place_other_img_title">{char.nextPlaceTitle}</div>
                        </div>
                        <div id="two" className="place_other__img">
                            <img src={char.nextSecondPlace} alt="place" className="place_other_img"/>
                            <div className="place_other_img_title">{char.nextSecondPlaceTitle}</div>
                        </div>
                        <div id="last" className="place_other__img">
                            <img  src={char.nextThirdPlace} alt="place" className="place_other_img"/>
                            <div className="place_other_img_title">{char.nextThirdPlaceTitle}</div>
                        </div>
                    </div>
                    
                </div>
            </>
        )
            

            
        
    }

    return renderItems(char);
}

export default Place;
