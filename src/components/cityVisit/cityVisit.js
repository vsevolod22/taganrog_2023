import './city_visit.scss';
import { Component } from 'react';

import EfrecksiumService from '../efrecksiumServise/efrecksiumServise';


class CityVisit extends Component {

    constructor(props) {
        super(props);
    }
    

    render() {




        return (
            <>
                <section className="city_visit">
                    
                    <div className="city_visit__container">
                        <div className="city_visit__title">
                            <span>Нужно посетить</span>
                            <a href="#">Смотреть все -{'>'}</a>
                        </div>
                        <div className="city_visit__cards">
                            <div className="row card_flex">
                            <View id='first' col_sm='col-sm-4' col='col-10' col_md='e' descr='Достопримечательности' name='Домик Чехова'></View>
                            <View id='second' col_sm='col-sm-7' col='col-10' col_md='e' descr='Достопримечательности' name='Самбекские высоты'></View>
                            <View id='third' col_sm='col-sm-6' col='col-10' col_md='e' descr='Достопримечательности' name='Памятник Петру I'></View>
                            <View id='fourth' col_sm='col-sm-5' col='col-10' col_md='e' descr='Достопримечательности' name='Приморский парк'></View>
                            </div>

                        </div>
                    </div>
                </section>
                
                <section className="city_visit">
                    
                    <div className="city_visit__container">
                        <div className="city_visit__title">
                            <span>Наполнить пузо</span>
                            <a href="#">Смотреть все -{'>'}</a>
                        </div>
                        <div className="city_visit__cards">
                            <div className="row card_flex">
                            <View id='fifth' col_sm='col-sm-11' col='col-10' col_md='e' descr='Ресторан' name='Дон Марио'></View>
                            <View id='sixth' col_sm='col-sm-6' col='col-10' col_md='e' descr='Паб' name='Guzzler'></View>
                            <View id='seventh' col_sm='col-sm-5' col='col-10' col_md='e' descr='Ресторан' name='Горский'></View>
                            
                            </div>

                        </div>
                    </div>
                </section>
                <section className="city_visit">
                    
                    <div className="city_visit__container">
                        <div className="city_visit__title">
                            <span>Где отдохнуть</span>
                            <a href="#">Смотреть все -{'>'}</a>
                        </div>
                        <div className="city_visit__cards">
                            <div className="row card_flex">
                            <View id='eight' col_sm='col-sm-5' col='col-10' col_md='col-md-3' descr='Гостиница' name='Таганрог'></View>
                            <View id='nineth' col_sm='col-sm-5' col='col-10' col_md='col-md-4' descr='Парк-отель' name='Star Crystal'></View>
                            <View id='tenth' col_sm='col-sm-5' col='col-10' col_md='col-md-3' descr='Парк-отель' name='Бристоль'></View>
                            <View id='eleventh' col_sm='col-sm-5' col='col-10' col_md='col-md-11' descr='Отель и Спа' name='Гринвич-Парк'></View>
                            
                            </div>

                        </div>
                    </div>
                </section>
            </>
            
        )
    }


}

const View = ({id, col_sm, col,  col_md, descr, name})  =>  {
    

    return (
        <div  id={id} className={col + ' ' + col_sm + ' ' + col_md + ' city_visit__card'}>
                                <div className="city_visit__card_descr">{descr}</div>
                                <div className="city_visit__card_name">{name}</div>
                                <div className="city_visit__card_round"><span></span><i className="right"></i></div>
                            </div>
    )
}

export default CityVisit