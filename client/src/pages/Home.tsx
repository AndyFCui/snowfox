import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const featuredEvents = [
  {
    id: 1,
    title: '周末滑雪之旅',
    date: '2024-03-22',
    location: 'Killington',
    image: 'https://images.pexels.com/photos/848593/pexels-photo-848593.jpeg',
  },
  {
    id: 2,
    title: '春季登山活动',
    date: '2024-04-01',
    location: 'White Mountain',
    image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg',
  },
  {
    id: 3,
    title: '户外摄影工作坊',
    date: '2024-04-15',
    location: 'Boston Newbury St',
    image: 'https://images.pexels.com/photos/7245464/pexels-photo-7245464.jpeg',
  },
];

const slides = [
  {
    image: 'https://images.pexels.com/photos/848593/pexels-photo-848593.jpeg',
    title: '滑雪',
  },
  {
    image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg',
    title: '登山',
  },
  {
    image: 'https://images.pexels.com/photos/7245464/pexels-photo-7245464.jpeg',
    title: '摄影',
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="flex items-center">
              {/* Left Content */}
              <div className="mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 lg:w-1/2">
                <div className="sm:text-left lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                    <div className="flex items-center">
                      <span className="text-gray-900">与</span>
                      <span className="text-primary-600 ml-2">Snow Fox</span>
                    </div>
                    <span className="block text-gray-900">一起探索户外</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                    加入我们，开启您的户外冒险之旅。无论是滑雪、登山还是摄影，我们都有专业的活动等着您。
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/events"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                      >
                        浏览活动
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link
                        to="/membership"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                      >
                        成为会员
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Slideshow */}
              <div className="hidden lg:block lg:w-1/2 lg:pl-8">
                <div className="relative">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                    <div className="absolute top-4 left-0 right-0 z-10 text-center">
                      <h2 className="text-2xl font-bold text-white bg-black bg-opacity-30 py-2">
                        雪山飞狐，不止于雪山！
                      </h2>
                    </div>
                    
                    {/* Slides */}
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24">
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-xl font-semibold">{slide.title}</h3>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Navigation Buttons */}
                    <button
                      onClick={goToPrevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button
                      onClick={goToNextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      {slides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              精选活动
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              探索我们即将举行的精彩活动
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="relative pb-48">
                  <img
                    className="absolute h-full w-full object-cover"
                    src={event.image}
                    alt={event.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {event.date} · {event.location}
                  </p>
                  <div className="mt-4">
                    <Link
                      to={`/events/${event.id}`}
                      className="text-sm font-medium text-primary-600 hover:text-primary-500"
                    >
                      了解更多 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 