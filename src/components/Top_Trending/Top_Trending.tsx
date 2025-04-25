import cl from './style.module.scss'
import paris_centipede from '../assets/popular_tours/Paris_Centipede.png'
import usa_molokini from '../assets/popular_tours/Usa_Molokini.png'
import london_west from '../assets/popular_tours/UK_Westminster.png'
import usa_all from '../assets/popular_tours/Usa_All.png'


export const Top_Trending = () => {
    return (
        <>
            <div className={cl.Top_Trending_cont}>
                <div className={cl.Top_Trending__text_container}>
                    <p className={cl.Top_Trending_text}>Top Trending</p>
                    <div className={cl.Top_Trending_card_container}>
                        <div className={cl.Top_Trending_Paris}>
                            <img className={cl.paris_centipede_img} src={paris_centipede} />
                            <p className={cl.location}>Paris, France</p>
                            <p className={cl.Popular_disc}>
                                Centipede Tour - Guided Arizona
                                <br />
                                Desert Tour by ATV
                            </p>
                            <div className={cl.Popular_price_days}>
                                <p className={cl.Popular_days}>4 days</p>
                                <p className={cl.Popular_price}>From $189.25</p>
                            </div>
                        </div>
                        <div className={cl.Top_Trending_Paris}>
                            <img className={cl.paris_centipede_img} src={usa_molokini} />
                            <p className={cl.location}>New York, USA</p>
                            <p className={cl.Popular_disc}>
                            Molokini and Turtle Town<br/>
                            Snorkeling Adventure Aboard
                            </p>
                            <div className={cl.Popular_price_days}>
                                <p className={cl.Popular_days}>4 days</p>
                                <p className={cl.Popular_price}>From $225</p>
                            </div>
                        </div>
                        <div className={cl.Top_Trending_Paris}>
                            <img className={cl.paris_centipede_img} src={london_west} />
                            <p className={cl.location}>London, UK</p>
                            <p className={cl.Popular_disc}>
                            Westminster Walking Tour &<br/>
                            Westminster Abbey Entry
                            </p>
                            <div className={cl.Popular_price_days}>
                                <p className={cl.Popular_days}>4 days</p>
                                <p className={cl.Popular_price}>From $943</p>
                            </div>
                        </div>
                        <div className={cl.Top_Trending_Paris}>
                            <img className={cl.paris_centipede_img} src={usa_all} />
                            <p className={cl.location}>New York, USA</p>
                            <p className={cl.Popular_disc}>
                            All Inclusive Ultimate Circle Island<br/>
                            Day Tour with Lunch
                            </p>
                            <div className={cl.Popular_price_days}>
                                <p className={cl.Popular_days}>4 days</p>
                                <p className={cl.Popular_price}>From $771</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}