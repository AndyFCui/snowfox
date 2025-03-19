import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Andy',
      role: 'AASI 一级教练',
      image: '/images/andy.jpg',
      description: '美国滑雪教练协会（AASI）一级认证教练，专注于单板滑雪教学'
    },
    {
      name: '待加入',
      role: '教练职位空缺',
      image: '/images/placeholder.jpg',
      description: '期待专业教练的加入',
      isPlaceholder: true
    },
    {
      name: '待加入',
      role: '教练职位空缺',
      image: '/images/placeholder.jpg',
      description: '期待专业教练的加入',
      isPlaceholder: true
    }
  ];

  const values = [
    {
      title: '专业指导',
      description: '由经验丰富的教练团队提供专业指导，确保安全与进步',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '安全至上',
      description: '严格的安全标准和应急预案，确保每次活动安全无忧',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: '社区精神',
      description: '建立互帮互助的滑雪社区，分享经验与快乐',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              关于雪山飞狐
            </h1>
            <p className="mt-2 text-xl text-indigo-600 font-semibold sm:text-2xl">
              雪山飞狐，不止于雪山！
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              我们致力于为大波士顿地区华人社区打造专业的户外运动平台，从滑雪到登山，从摄影到探险，一起探索户外的无限可能。
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">我们的故事</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              从2023年开始的滑雪之旅
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              雪山飞狐成立于2023年，由一群热爱滑雪的华人发起。我们致力于为大波士顿地区的华人社区提供专业的滑雪指导和户外运动体验。
              在短短的时间内，我们见证了无数滑雪爱好者的成长，也见证了华人滑雪社区的蓬勃发展。
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">我们的价值观</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              专业、安全、社区
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {values.map((value, index) => (
                <div key={index} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    {value.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{value.title}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">我们的团队</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              专业教练团队
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {teamMembers.map((member, index) => (
                <div key={index} className={`relative ${member.isPlaceholder ? 'opacity-50' : ''}`}>
                  <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-gray-100 group">
                    {member.isPlaceholder ? (
                      <div className="h-full w-full flex items-center justify-center text-gray-400">
                        <svg className="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="mt-6">
                    <h3 className={`text-2xl font-medium ${member.isPlaceholder ? 'text-gray-400' : 'text-gray-900'}`}>
                      {member.name}
                    </h3>
                    <p className={`text-lg mt-1 ${member.isPlaceholder ? 'text-gray-400' : 'text-indigo-600'}`}>
                      {member.role}
                    </p>
                    <p className={`mt-3 text-base ${member.isPlaceholder ? 'text-gray-400' : 'text-gray-500'}`}>
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">联系我们</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              加入我们的滑雪社区
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              如果您有任何问题或想了解更多信息，请随时与我们联系。
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 