import DayForecast from "./DayForecast.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
// This component displays the weather forecast for multiple days
// It maps through the forecast data and renders a DayForecast component for each day
export default function WeatherSection({ weather, setSelectedDay}) {
    return (
        <>
        <div className="flex flex-wrap">
        {weather
            ? weather.forecast.forecastday.map((day, ) => (
                <DayForecast
                    weatherForecast={day}
                    setSelectedDay={setSelectedDay}
                />
            ))
            : <p>Loading...</p>
        }
        </div>
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full max-w-4xl"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
      </>
    );
}