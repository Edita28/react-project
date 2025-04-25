import cl from './styles.module.scss'
import kenya from '../assets/travel_articles/kenya.png'
import wildrife from '../assets/travel_articles/Wildrife.png'
import wild from '../assets/travel_articles/Wild.png'


export const Travel_Articles = () => {
    return (
        <>
            <div className={cl.Travel_Articles_container}>
                <p className={cl.Travel_Articles_heading}>Travel Articles</p>
                <div className={cl.Travel_Articles_cards}>
                    <div className={cl.Travel_Articles_kenya}>
                        <a href=''>
                            <img className={cl.Travel_Articles_kenya_img} src={kenya} />
                        </a>
                        <p className={cl.Travel_Articles_kenya_date}>April 06 2023 | By Ali Tufan</p>
                        <p className={cl.Travel_Articles_kenya_info}>Kenya vs Tanzania Safari: The Better African<br/>
                        Safari Experience</p>
                    </div>
                    <div className={cl.Travel_Articles_wildrife}>
                        <a href=''>
                            <img className={cl.Travel_Articles_wildrife_img} src={wildrife} />
                        </a>
                        <p className={cl.Travel_Articles_wildrife_date}>April 07 2023 | By Emily Johnson</p>
                        <p className={cl.Travel_Articles_wildrife_info}>Exploring the Serengeti: A Wildlife Adventure</p>
                    </div>
                    <div className={cl.Travel_Articles_wild}>
                        <a href=''>
                            <img className={cl.Travel_Articles_wild_img} src={wild} />
                        </a>
                        <p className={cl.Travel_Articles_wild_date}>April 08 2023 | By Maxwell Rhodes</p>
                        <p className={cl.Travel_Articles_wild_info}>Into the Wild: An Unforgettable Safari Journey</p>
                    </div>
                </div>
            </div>
        </>
    )
}