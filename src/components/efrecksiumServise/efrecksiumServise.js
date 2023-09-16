import axios from "axios";

class EfrecksiumService {

    _apiBaseUrl = 'http://localhost:3001/object';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${fetch.sttatus}`);
        }


        return await res.json();
    }
    getAll = async () => {
        const res = await this.getResource(`${this._apiBaseUrl}`);
        return res.map(this._transformData)
    }
    _transformData = (data) => {
        return {
            id: data.id,
            firstImg: data.firstImg,
            secondImg: data.secondImg,
            thirdImg: data.thirdImg,
            description: data.description,
            title: data.title,
            south: data.south,
            sever: data.sever,
            nextPlace: data.nextPlace,
            nextSecondPlace: data.nextSecondPlace,
            nextThirdPlace: data.nextThirdPlace,
            nextPlaceTitle: data.nextPlaceTitle,
            nextSecondPlaceTitle: data.nextSecondPlaceTitle,
            nextThirdPlaceTitle: data.nextThirdPlaceTitle,
            contacts: data.contacts,
            work: data.work

        }
    }
}
export default EfrecksiumService;