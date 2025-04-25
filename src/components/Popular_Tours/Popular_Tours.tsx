import cl from "./style.module.scss";
import paris_centipede from "../assets/Popular_Tours/Paris_Centipede.png";
import usa_molokini from "../assets/Popular_Tours/Usa_Molokini.png";
import uk_westminster from "../assets/Popular_Tours/UK_Westminster.png";
import usa_all from "../assets/Popular_Tours/Usa_All.png";
import paris_space from "../assets/Popular_Tours/Paris_Space.png";
import usa_clear from "../assets/Popular_Tours/Usa_Clear.png";
import uk_history from "../assets/Popular_Tours/UK_History.png";
import usa_mauna from "../assets/Popular_Tours/Usa_Mauna.png";

export const Popular = () => {
    return (
        <>
            <div className={cl.Popular_container}>
                <p className={cl.Popular_text}>Find Popular Tours</p>
                <div className={cl.Popular_Cards}>
                    <div className={cl.Paris_Card}>
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
                    <div className={cl.Usa_Card}>
                        <img className={cl.usa_molokini_img} src={usa_molokini} />
                        <p className={cl.location}>New York, USA</p>
                        <p className={cl.Popular_disc}>
                            Molokini and Turtle Town Snorkeling Adventure Aboard
                        </p>
                        <div className={cl.Popular_price_days}>
                            <p className={cl.Popular_days}>4 days</p>
                            <p className={cl.Popular_price}>From $225</p>
                        </div>
                    </div>
                    <div className={cl.UK_Card}>
                        <img className={cl.uk_westminster_img} src={uk_westminster} />
                        <p className={cl.location}>London, UK</p>
                        <p className={cl.Popular_disc}>
                            Westminster Walking Tour & Westminster Abbey Entry
                        </p>
                        <div className={cl.Popular_price_days}>
                            <p className={cl.Popular_days}>4 days</p>
                            <p className={cl.Popular_price}>From $943</p>
                        </div>
                    </div>
                    <div className={cl.NewYork_Card}>
                        <img className={cl.usa_all_img} src={usa_all} />
                        <p className={cl.location}>New York, USA</p>
                        <p className={cl.Popular_disc}>
                            All Inclusive Ultimate Circle Island
                            <br />
                            Day Tour with Lunch
                        </p>
                        <div className={cl.Popular_price_days}>
                            <p className={cl.Popular_days}>4 days</p>
                            <p className={cl.Popular_price}>From $771</p>
                        </div>
                    </div>
                    <div className={cl.France_Card}>
                        <img className={cl.paris_space_img} src={paris_space} />
                        <p className={cl.location}>Paris, France</p>
                        <p className={cl.Popular_disc}>
                            Space Center Houston Admission Ticket
                        </p>
                        <div className={cl.Popular_price_days}>
                            <p className={cl.Popular_days}>4 days</p>
                            <p className={cl.Popular_price}>From $189.25</p>
                        </div>
                    </div>
                    <div className={cl.Usa_Clear_Card}>
                        <img className={cl.usa_clear_img} src={usa_clear} />
                        <p className={cl.location}>New York, USA</p>
                        <p className={cl.Popular_disc}>
                            Clear Kayak Tour of Shell Key
                            <br />
                            Preserve and Tampa Bay Area
                        </p>
                        <div className={cl.Popular_price_days}>
                            <p className={cl.Popular_days}>4 days</p>
                            <p className={cl.Popular_price}>From $225</p>
                        </div>
                    </div>
                    <div className={cl.London_UK_Card}>
                        <img className={cl.uk_history_img} src={uk_history} />
                        <p className={cl.location}>London, UK</p>
                        <p className={cl.Popular_disc}>
                            History and Hauntings of Salem Guided Walking Tour
                        </p>
                        <div className={cl.Popular_price_days}>
                            <p className={cl.Popular_days}>4 days</p>
                            <p className={cl.Popular_price}>From $943</p>
                        </div>
                    </div>
                    <div className={cl.USA_Mauna_Card}>
                        <img className={cl.usa_mauna_img} src={usa_mauna} />
                        <p className={cl.location}>New York, USA</p>
                        <p className={cl.Popular_disc}>
                            Mauna Kea Summit Sunset and
                            <br />
                            Stars Free Astro Photos Hilo Kona Waikoloa Pick Up
                        </p>
                        <div className={cl.Popular_price_days}>
                            <p className={cl.Popular_days}>4 days</p>
                            <p className={cl.Popular_price}>From $771</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
