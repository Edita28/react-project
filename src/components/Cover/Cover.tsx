import cl from "./style.module.scss";
import image from "../assets/cover/ocean.png";

export const Cover = () => {
    return (
        <>
            <div className={cl.cover_container}>
                <img className={cl.cover__image} src={image} />
                <h1 className={cl.cover__heading}>Your world of joy</h1>
                <p className={cl.cover__dest}>
                    From local escapes to far-flung adventures, find what makes you happy
                    anytime, anywhere
                </p>
                <div className={cl.cover__search_form}>
                    <div className={cl.cover_where_container}>
                            <label className={cl.cover_where_heading}>Where</label>
                            <input className={cl.cover_where_input} placeholder="Search destinations" />
                    </div>
                    <div className={cl.cover_when_container}>
                            <label className={cl.cover_where_heading}>When</label>
                            <input className={cl.cover_where_input} placeholder="date" type="date" />
                    </div>
                    <div className={cl.cover_type_container}>
                        <label className={cl.cover_type_heading}>Tour Type</label>
                        <a href="" className={cl.cover_type_tour}>All tour</a>
                    </div>
                    <button className={cl.cover_search_button}>Search</button>
                </div>
            </div>
        </>
    );
};
