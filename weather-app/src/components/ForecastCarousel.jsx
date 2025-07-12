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
export default function ForecastCarousel({ weather, setSelectedDay}) {
    return (
      <Swiper
        slidesPerView={5}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full max-w-4xl h-60 bg-gray-500"
      >
        {weather ?
           weather.forecast.forecastday.map((day, idx) => (
              <SwiperSlide key={idx}>
                <DayForecast
                  weatherForecast={day}
                  setSelectedDay={setSelectedDay}
                />
              </SwiperSlide>
            ))
          : <SwiperSlide><p>Loading...</p></SwiperSlide>
        }
      </Swiper>
    );
}