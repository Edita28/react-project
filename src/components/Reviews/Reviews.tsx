import cl from './styles.module.scss'
import background from '../assets/reviews/background.png'
import image from '../assets/reviews/image.png'


export const Reviews = () => {
    return (
        <>
            <div className={cl.Reviews_container}>
                <img className={cl.Reviews_background} src={background} />
                <div className={cl.Reviews_info}>
                    <h1 className={cl.Reviews_heading}>Customer Reviews</h1>
                    <div className={cl.Reviews_Service}>
                        <img className={cl.Reviews_Service_image} src={image} />
                        <p className={cl.Reviews_Service_text}>Excellent Service!</p>
                        <p className={cl.Reviews_Service_info}>I had an amazing experience with this company. The service was<br/>
                            top-notch, and the staff was incredibly friendly. I highly<br/>
                            recommend them!</p>
                        <p className={cl.Reviews_Service_Author}>John Smith</p>
                    </div>
                </div>
            </div>
        </>
    )
}