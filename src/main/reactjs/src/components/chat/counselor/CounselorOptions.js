import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import CounselorCardFront from './CounselorCardFront';
import CounselorCardBack from './CounselorCardBack';
import CounselorCardLast from './CounselorCardLast';

const CounselorOptions = ({ info, handleCounselClick }) => {

    const handleCardClick = (e) => {
        e.currentTarget.classList.toggle('counselor-card-flipped');
    }

    return (
        <div className='counseloroptions mt_25'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {
                    info.map((data, idx) => (
                        <SwiperSlide key={idx} onClick={(e) => handleCardClick(e)}>
                            <CounselorCardFront bgcolor={data.cardcolor} data={data} />
                            <CounselorCardBack borcolor={data.cardcolor} data={data}
                                handleCounselClick={handleCounselClick} />
                        </SwiperSlide>
                    ))
                }
                <SwiperSlide>
                    <CounselorCardLast />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CounselorOptions;