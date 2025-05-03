import React, {useRef} from "react";
import Content from "@/pages/test1introduce/Content";
import useHeadingsToNavItems from "@/utils/navs";
import '@/css/Cube.scss'

export default function Cube() {
  const contentRef = useRef(null)
  const navItems = useHeadingsToNavItems(contentRef)
  return (
    <>
      <h1>立方体</h1>
      <Content items={navItems}></Content>
      <div ref={contentRef}>
        <h2>立方体搭建</h2>
        <hr/>
        <div className="cube">
          <div style={{transform: 'translateZ(100px)'}}>FRONT</div>
          <div style={{transform: 'translateZ(-100px)'}}>BACK</div>
          <div style={{transform: 'rotateX(90deg) translateZ(100px)'}}>TOP</div>
          <div style={{transform: 'rotateX(-90deg) translateZ(100px)'}}>BOTTOM</div>
          <div style={{transform: 'rotateY(90deg) translateZ(100px)'}}>RIGHT</div>
          <div style={{transform: 'rotateY(-90deg) translateZ(100px)'}}>LEFT</div>
        </div>

        <h2>立方体旋转</h2>
        <hr/>
        <div className="cube" style={{animation: 'rotating 4s linear infinite'}}>
          <div style={{transform: 'translateZ(100px)'}}>FRONT</div>
          <div style={{transform: 'translateZ(-100px)'}}>BACK</div>
          <div style={{transform: 'rotateX(90deg) translateZ(100px)'}}>TOP</div>
          <div style={{transform: 'rotateX(-90deg) translateZ(100px)'}}>BOTTOM</div>
          <div style={{transform: 'rotateY(90deg) translateZ(100px)'}}>RIGHT</div>
          <div style={{transform: 'rotateY(-90deg) translateZ(100px)'}}>LEFT</div>
        </div>
      </div>
    </>)
};