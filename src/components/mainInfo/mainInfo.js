import './_main_info.scss'

import { Component } from 'react'



class MainInfo extends Component {

    render() {
        return (
            <section className="main_info">
                <div className="main_info__title">
                    Таганрог
                    <div className="main_info__title_description">IT-СТОЛИЦА РОССИИ</div>
                </div>
                <div className="main_info__cards">
                    <div className="main_info__card"><span>Площадь</span>95 км²</div>
                    <div className="main_info__card">Кол-во жителей <span>243 тыс.  чел</span></div>
                    <div className="main_info__card">Погода</div>
                </div>
            </section>
        )
    }

}
export default MainInfo