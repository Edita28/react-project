import cl from './styles.module.scss'
import cruises from '../assets/popular_things/cruises.png'
import museum from '../assets/popular_things/museum.png'
import beach from '../assets/popular_things/beach.png'
import city from '../assets/popular_things/city.png'
import food from '../assets/popular_things/food.png'
import hiking from '../assets/popular_things/hiking.png'


export const Popular_things = () => {
    return (
        <>
            <div className={cl.Popular__things_container}>
                <p className={cl.Popular__things_text}>Popular things to do</p>
                <div className={cl.Popular__things_parent_image}>
                    <div className={cl.Popular__things_cruise}>
                        <a className={cl.Cruises_btn} href="">
                            <img className={cl.cruises} src={cruises} />
                        </a>
                    </div>
                    <div className={cl.Popular__things_museum}>
                        <a className={cl.Museum_btn} href="">
                            <img className={cl.museum} src={museum} />
                        </a>
                    </div>
                    <div className={cl.Popular__things_beach}>
                        <a className={cl.Beach_btn} href="">
                            <img className={cl.beach} src={beach} />
                        </a>
                    </div>
                    <div className={cl.Popular__things_city}>
                        <a className={cl.City_btn} href="">
                            <img className={cl.city} src={city} />
                        </a>
                    </div>
                    <div className={cl.Popular__things_food}>
                        <a className={cl.Food_btn} href="">
                            <img className={cl.food} src={food} />
                        </a>
                    </div>
                    <div className={cl.Popular__things_hiking}>
                        <a className={cl.Hiking_btn} href="">
                            <img className={cl.hiking} src={hiking} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}