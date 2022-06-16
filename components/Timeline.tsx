import { NextPage } from "next";
import { MouseEvent, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons'

import styles from "../styles/components/Timeline.module.css";
import dataFile from "../public/data/project-development.json";

type DataType = {
  title:string,
  icon:string,
  body:string
}[]

const Timeline : NextPage = () => {
    const [data, setData] = useState<DataType>(); 
    useEffect(() => {
      setData(dataFile);
    })


    const hover = async (index:number, entry: {title: string, body:string}) => {
      const blob:HTMLElement = document.getElementById('lane-' + index) as HTMLElement;
      const contentBox:HTMLElement = document.getElementById("contentBox") as HTMLElement;
      const childs:any = contentBox?.childNodes;

      let offset = blob?.getBoundingClientRect().left;
      if (offset + 200 > window.innerWidth - 50 || offset - 200 < 0 ) {
        offset = window.innerWidth / 2 - 20;
      }

      contentBox.style.left = offset + "px";
      contentBox.style.opacity = 1 + "";
      childs[0].innerHTML = entry.title;
      childs[1].innerHTML = entry.body;

      contentBox.style.transform = "translate(-45%, " + (-50 - contentBox.getBoundingClientRect().height ) + "px)";
    }

    const leave = () => {
      const contentBox:HTMLElement = document.getElementById("contentBox") as HTMLElement;
      const childs:any = contentBox?.childNodes;

      contentBox.style.opacity = 0 + "";
    }

    return <div onMouseLeave={leave} id="project-devlopment" className={`${styles.pane}`}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Projektentwicklung</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo<br/>do consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ci</p>
        </div>

        <div id="contentBox" className={styles.contentBox}>
          <h1>This is my Text</h1>
          <p>This is my formal content cringe.</p>
        </div>

        <div className={styles.wrapperBox}>
          <div id="timelineWrapper" className={styles.wrap}>
            <div className={styles.links}>
              {
                data ? data.map((entry, index) => {
                  return <div id={`lane-${index}`} key={`lane-${index}`} onMouseOver={event => hover(index, entry)} className={styles.dot}>
                    <FontAwesomeIcon icon={faDiscord}/>
                  </div>
                }) : <></>
              }
                
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  
}

export default Timeline;