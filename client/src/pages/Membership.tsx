import React from 'react';
import { Link } from 'react-router-dom';

const membershipPlans = [
  {
    name: '普通会员',
    price: '¥299',
    period: '年',
    features: [
      '参与所有活动',
      '活动优先报名',
      '会员专属优惠',
      '活动照片分享',
    ],
    buttonText: '立即加入',
    buttonLink: '/register',
  },
  {
    name: '高级会员',
    price: '¥599',
    period: '年',
    features: [
      '所有普通会员权益',
      '发起活动权限',
      '专属活动优先参与',
      '会员专属装备租赁',
      '专业教练指导',
    ],
    buttonText: '升级会员',
    buttonLink: '/membership/upgrade',
    highlighted: true,
  },
];

const benefits = [
  {
    title: '专业指导',
    description: '获得专业教练的指导和建议，提升户外运动技能',
    icon: '🎿',
  },
  {
    title: '装备租赁',
    description: '会员可享受专业户外装备的租赁服务',
    icon: '🏔️',
  },
  {
    title: '活动优先',
    description: '优先参与热门活动，确保不会错过精彩体验',
    icon: '⭐',
  },
  {
    title: '社交网络',
    description: '加入志同道合的户外运动爱好者社区',
    icon: '👥',
  },
];

const Membership: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            会员计划
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            选择适合您的会员计划，开启户外运动之旅
          </p>
        </div>

        {/* 会员权益 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            会员权益
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 会员计划 */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            选择您的计划
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {membershipPlans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  plan.highlighted ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-4">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-base font-medium text-gray-500">
                      /{plan.period}
                    </span>
                  </p>
                  <ul className="mt-6 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to={plan.buttonLink}
                      className={`block w-full px-6 py-3 text-center font-medium rounded-md ${
                        plan.highlighted
                          ? 'bg-primary-600 text-white hover:bg-primary-700'
                          : 'bg-white text-primary-600 border border-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      {plan.buttonText}
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

export default Membership; 