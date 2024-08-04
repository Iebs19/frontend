// import React from 'react';
// import Swiper from 'react-id-swiper';

// const blogs = [
//   {
//     id: 1,
//     title: 'Blog 1',
//     description: 'This is the description for blog 1.',
//     image: 'http://lorempixel.com/600/600/nature/1',
//   },
//   {
//     id: 2,
//     title: 'Blog 2',
//     description: 'This is the description for blog 2.',
//     image: 'http://lorempixel.com/600/600/nature/2',
//   },
//   {
//     id: 3,
//     title: 'Blog 3',
//     description: 'This is the description for blog 3.',
//     image: 'http://lorempixel.com/600/600/nature/3',
//   },
//   {
//     id: 4,
//     title: 'Blog 4',
//     description: 'This is the description for blog 4.',
//     image: 'http://lorempixel.com/600/600/nature/4',
//   },
//   {
//     id: 5,
//     title: 'Blog 5',
//     description: 'This is the description for blog 5.',
//     image: 'http://lorempixel.com/600/600/nature/5',
//   },
// ];

// const CoverflowEffect = () => {
//   const params = {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto my-12">
//       <h2 className="text-4xl font-bold text-center mb-8">Our Blogs</h2>
//       <Swiper {...params}>
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             style={{
//               backgroundImage: `url(${blog.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               height: '300px',
//             }}
//             className="relative flex flex-col justify-center items-center text-white p-4"
//           >
//             <div className="bg-black/50 p-4 rounded-lg">
//               <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
//               <p>{blog.description}</p>
//             </div>
//           </div>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CoverflowEffect;

import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css';

const blogs = [
  {
    id: 1,
    title: 'Blog 1',
    description: 'This is the description for blog 1.',
    image: 'http://lorempixel.com/600/600/nature/1',
  },
  {
    id: 2,
    title: 'Blog 2',
    description: 'This is the description for blog 2.',
    image: 'http://lorempixel.com/600/600/nature/2',
  },
  {
    id: 3,
    title: 'Blog 3',
    description: 'This is the description for blog 3.',
    image: 'http://lorempixel.com/600/600/nature/3',
  },
  {
    id: 4,
    title: 'Blog 4',
    description: 'This is the description for blog 4.',
    image: 'http://lorempixel.com/600/600/nature/4',
  },
  {
    id: 5,
    title: 'Blog 5',
    description: 'This is the description for blog 5.',
    image: 'http://lorempixel.com/600/600/nature/5',
  },
];

const CoverflowEffect = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Blogs</h2>
      <Swiper {...params}>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '300px',
            }}
            className="relative flex flex-col justify-center items-center text-white p-4"
          >
            <div className="bg-black/50 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </Swiper>
      <div className="swiper-button-next swiper-button-white"></div>
      <div className="swiper-button-prev swiper-button-white"></div>
    </div>
  );
};

export default CoverflowEffect;
