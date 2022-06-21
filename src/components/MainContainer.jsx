import React, { useEffect } from 'react';
import '../styles/MainContainer.scss';
import { Banner } from './Banner';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AudioList } from './AudioList';

const MainContainer = () => {
  useEffect(() => {
    const allLi = document
      .querySelector('.menuList')
      .querySelectorAll('li');

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    allLi.forEach((n) =>
      n.addEventListener('click', changePopularActive),
    );
  }, []);

  return (
    <div className="mainContainer">
      <Banner />
      <div className="menuList">
        <ul>
          <li>
            <Link to={`/`}>Popular</Link>
          </li>
          <li>
            <Link to={`/`}>Albums</Link>
          </li>
          <li>
            <Link to={`/`}>Songs</Link>
          </li>
          <li>
            <Link to={`/`}>Fans</Link>
          </li>
          <li>
            <Link to={`/`}>About</Link>
          </li>
        </ul>

        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>

      <AudioList />
    </div>
  );
};

export { MainContainer };
