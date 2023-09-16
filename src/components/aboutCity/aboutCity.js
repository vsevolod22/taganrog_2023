import './_about_city.scss';
import city from '../../resources/img/second_section/lastTagan.jpg'
import { Component } from 'react'


class AboutCity extends Component {


    render() {
        return (
            <section className="about_city">
                
                <div className="about_city__description">
                    <span>О городе</span>
                    Таганро́г — город в Ростовской области России. Порт на берегу Таганрогского залива Азовского моря. Образует городской округ город Таганрог.
                    <br/>
                    <br/>
                    Является самым западным городом области. Входит в список исторических поселений России. Основан Петром I в 1698 году.
                </div>
                <div className="about_city__img"><img className="about_city_img" src={city} alt="town"/></div>
            </section>
        )
    }
}

export default AboutCity