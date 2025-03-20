import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: '周末滑雪之旅',
    date: '2024-03-22',
    location: 'Killington',
    price: '¥299',
    organizer: 'SnowFox官方',
    image: 'https://images.pexels.com/photos/848593/pexels-photo-848593.jpeg',
    category: '滑雪',
  },
  {
    id: 2,
    title: '春季登山活动',
    date: '2024-04-01',
    location: 'White Mountain',
    price: '¥199',
    organizer: '会员发起',
    image: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg',
    category: '登山',
  },
  {
    id: 3,
    title: '户外摄影工作坊',
    date: '2024-04-15',
    location: 'Boston Newbury St',
    price: '¥399',
    organizer: 'SnowFox官方',
    image: 'https://images.pexels.com/photos/7245464/pexels-photo-7245464.jpeg',
    category: '摄影',
  },
];

const categories = [
  { id: 'all', name: '全部' },
  { id: 'ski', name: '滑雪' },
  { id: 'hiking', name: '登山' },
  { id: 'photo', name: '摄影' },
  { id: 'bbq', name: '烧烤' },
];

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const filteredEvents = selectedCategory === '全部'
    ? events
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            活动列表
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            探索所有精彩活动
          </p>
        </div>

        {/* 分类过滤器 */}
        <div className="mt-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.name
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 活动列表 */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
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
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {event.category}
                  </span>
                  <span className="text-lg font-medium text-gray-900">
                    {event.price}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {event.date} · {event.location}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  主办方：{event.organizer}
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
  );
};

export default Events; 