import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Banner = ({data}) => {
    console.log(data);
    

  return (
    <div className='w-[85%] mx-auto mt-10'>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      coverflowEffect={{
        scale: 2,
        modifier: 2,
        depth: 100,
      }}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
    {data.map(comic => (
        <div key={comic.id}>
            <SwiperSlide className='mb-10
            '>
                <div className='flex justify-center items-center'>
                    <img className='h-[250px] w-[200px]' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}  alt="" />
                </div>
            </SwiperSlide>
        </div>
    ))}
    </Swiper>
    </div>
    
  );
}