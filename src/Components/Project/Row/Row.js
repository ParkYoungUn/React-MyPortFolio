import React from 'react';
import insatlogin from './image/instagram.png';
import github from './image/github-logo.svg';
import  './Row.css';
import virtual from './image/virtual.png';
import smartmirror from './image/smartmirror.png';

const Row = () => (
  <div className="Row">
    <div className="Box">
      <div className="Box_image">
        <a href="https://github.com/ParkYoungUn/instagram_Project_Springboot/tree/master">
          <img src={insatlogin} alt="instagram" className="image" />
        </a>
      </div>
      <div className="Box_info">
        <h1 className="Box_title">instagram</h1>
        <h2 className="name">개발기간 :2020.09.26~ 2020.11.05</h2>
        <p className="Box_content">
          Springboot + MySql 등을 사용한 인스타그램 클론 코딩 팀프로젝트
        </p>
        <ul className="Box_ul">   
          <li  className="Box_li">#java</li>  
          <li className="Box_li">#Springboot</li>  
          <li className="Box_li">#JPA</li>
          <li className="Box_li">#MySql</li> 
        </ul>
        <ul className="Box_ul">
          <li className="Box_li">
            <a href="https://github.com/ParkYoungUn/instagram_Project_Springboot/tree/master" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);


export default Row;