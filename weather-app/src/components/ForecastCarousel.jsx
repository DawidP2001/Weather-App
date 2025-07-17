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
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={16}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper m-5 w-full max-w-4xl mx-auto bg-gray-200 overflow-hidden p-4 bg-white shadow-lg rounded-lg"
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
    </>
    );
}