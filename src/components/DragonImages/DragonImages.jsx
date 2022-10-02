import React, {useState} from "react";
import Arrow from '../../images/sprite-icon.svg'
import s from './DragonImages.module.css'

const DragonImages = ({images}) => {
    const [currentImg, setCurrentImg] = useState(0)
    const length = images?.length

    const nextImg = () => {
        setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1)
    }

    const prevImg = () => {
        setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1)
    }

    return (
        <div className={s.slider}>

            <button className={s.btnLeft} onClick={prevImg}> 
                <svg className={s.arrowLeft} >
                    <use xlinkHref={`${Arrow}#icon-arrow`} />
                </svg>
            </button>

            {images && images.map((image, index) => (
                <li className={index === currentImg ? s.slideActive : s.slide} key={index}>
                    {index === currentImg && (
                        <img src={image} alt='dragon' className={s.img}/>
                    )}
                </li>
            ))}

            <button className={s.btnRight} onClick={nextImg}>
                <svg className={s.arrowRight}>
                    <use xlinkHref={`${Arrow}#icon-arrow`} />
                </svg>
            </button>
                
        </div>
    )
}

export default DragonImages