import React, { Component } from 'react';
import  './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChild, faUserPlus, faRunning } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
  render() {
    return (
   
      <div className="about_me" id="about" >

        <div className="about_me_title">
            <h1 className="hedding">About Me</h1>
        </div>

        <div className="svg--container">
          <div className='svg--icons'>   
              <div className='svg--icon'><FontAwesomeIcon icon={faChild} size="5x"/>
                  <p>긍정</p>
                  <p>항상 긍정적으로 생각합니다.</p>
              </div>
              <div className='svg--icon'><FontAwesomeIcon icon={faRunning} size="5x" />
              <p>노력</p>
              <p>항상 노력하겠습니다.</p>
              </div>
              <div className='svg--icon'><FontAwesomeIcon icon={faUserPlus} size="5x" />
                  <p>발전</p>
                  <p>오늘보다 발전된 내일이 되겠습니다.</p>
              </div>
          </div>
        </div>
        {/*  */}
        
        {/*  */}
        <div className="inner">
          <div className="profile">
            <div className="profile-img">
                <img src={require("../../img/myprofle_3.jpg")} alt="profile" />
            </div>
            <div>
                <p>박영운</p>
            </div>
          </div>

          <div className="wrapper-inner">
              <div className="career">
                  <p className="education">EDUCATION</p>
                  <p>영남대학교 컴퓨터공학과</p>
                  <p>영남인재교육원 AI활용 소프트웨어 개발 및 응용SW 개발자 과정</p>

                  <p className="certificate">CERTIFICATE</p>
                  <p>정보처리기사</p>
                  <p>SQLD</p>
              </div>
          </div>
        </div>

      </div>
 
    );
  }
}


export default About;