import DayForecast from "./DayForecast.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "./Common/Card.jsx";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// This component displays the weather forecast for multiple days
// It maps through the forecast data and renders a DayForecast component for each day
export default function ForecastCarousel({ weather, setSelectedDay}) {
    return (
    <div className="w-full flex flex-col items-center justify-center mb-8">
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-full bg-white shadow-lg rounded-lg"
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
        style={{
          padding: '1rem',
          margin: '1.25rem 0',
          maxWidth: '100vw'
        }}
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
        {Array(6).fill().map((_, index) => (
          <SwiperSlide key={`disabled-${index}`}>
            <DayForecast
              className="blur bg-gray-600"
              weatherForecast={weather.forecast.forecastday[0]}
              setSelectedDay={setSelectedDay}
              disabled={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
}