
import cl from './style.module.scss'
import paris from '../assets/slider/paris.png'
import singapore from '../assets/slider/Singapore.png'
import roma from '../assets/slider/Roma.png'
import bangkok from '../assets/slider/Bangkok.png'
import bali from '../assets/slider/Bali.png'
import phuket from '../assets/slider/Phuket.png'
import tokyo from '../assets/slider/Tokyo.png'
import cappadocia from '../assets/slider/Cappadocia.png'



export const Slider = () => {
    return (
        <>
            <div className={cl.slider__container}>
                <div className={cl.slider}>
                    <div className={cl.slide}>
                        <img src={paris} className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Paris</h2>
                            <p className={cl.slide__role}>100+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={singapore} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Singapore</h2>
                            <p className={cl.slide__role}>300+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={roma} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Roma</h2>
                            <p className={cl.slide__role}>400+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={bangkok} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Bangkok</h2>
                            <p className={cl.slide__role}>100+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={bali} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Bali</h2>
                            <p className={cl.slide__role}>600+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={phuket} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Phuket</h2>
                            <p className={cl.slide__role}>200+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={tokyo} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Tokyo</h2>
                            <p className={cl.slide__role}>700+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={cappadocia}  className={cl.slide__image}/>
                            <h2 className="slide__name">Cappadocia</h2>
                            <p className="slide__role">900+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={paris} className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Paris</h2>
                            <p className={cl.slide__role}>100+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={singapore} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Singapore</h2>
                            <p className={cl.slide__role}>300+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={roma} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Roma</h2>
                            <p className={cl.slide__role}>400+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={bangkok} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Bangkok</h2>
                            <p className={cl.slide__role}>100+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={bali} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Bali</h2>
                            <p className={cl.slide__role}>600+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={phuket} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Phuket</h2>
                            <p className={cl.slide__role}>200+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={tokyo} alt="" className={cl.slide__image}/>
                            <h2 className={cl.slide__name}>Tokyo</h2>
                            <p className={cl.slide__role}>700+ Tours</p>
                    </div>
                    <div className={cl.slide}>
                        <img src={cappadocia}  className={cl.slide__image}/>
                            <h2 className="slide__name">Cappadocia</h2>
                            <p className="slide__role">900+ Tours</p>
                    </div>
                </div>
                <div className={cl.bullets}></div>
            </div>
        </>
    )
}