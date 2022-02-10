import React from 'react';
import { Link } from 'react-router-dom';

function Card({ img, name, nickname }) {
  return (
    <Link to={`/detail/${name.toLowerCase().split(' ').join('-')}`}>
      <div className="p-4 ">
        <div className="w-72 mx-auto overflow-hidden  rounded-lg shadow-lg bg-green-900 transform hover:scale-105 transition duration-500">
          <img
            className="object-cover w-72 h-96 overflow-hidden"
            src={img}
            alt="avatar"
          />

          <div className="py-5 text-center">
            <span className="block text-2xl font-bold text-white">
              {nickname}
            </span>
            <span className="text-sm text-gray-200">{name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
