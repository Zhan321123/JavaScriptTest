import React, {useRef} from "react";
import useHeadingsToNavItems from "@/utils/navs";
import Content from "@/pages/test1introduce/Content";
import {Code} from "@/components/Code";

export default function Cursor() {
  const ref = useRef(null)
  const navItems = useHeadingsToNavItems(ref)
  return (<>
    <h1 className={'text-center'}>Cursor</h1>
    <Content items={navItems}></Content>
    <div ref={ref}>
      <h2>光标样式</h2>
      <hr/>
      <div className="box" style={{display: 'flex', flexWrap: 'wrap'}}>
        <div style={{cursor: 'auto'}}>auto</div>
        <div style={{cursor: 'default'}}>default</div>
        <div style={{cursor: 'pointer'}}>pointer</div>
        <div style={{cursor: 'move'}}>move</div>
        <div style={{cursor: 'text'}}>text</div>
        <div style={{cursor: 'wait'}}>wait</div>
        <div style={{cursor: 'help'}}>help</div>
        <div style={{cursor: 'none'}}>none</div>
        <div style={{cursor: 'crosshair'}}>crosshair</div>
        <div style={{cursor: 'not-allowed'}}>not-allowed</div>
        <div style={{cursor: 'no-drop'}}>no-drop</div>
        <div style={{cursor: 'grab'}}>grab</div>
        <div style={{cursor: 'grabbing'}}>grabbing</div>
        <div style={{cursor: 'zoom-in'}}>zoom-in</div>
        <div style={{cursor: 'zoom-out'}}>zoom-out</div>
        <div style={{cursor: 'col-resize'}}>col-resize</div>
        <div style={{cursor: 'row-resize'}}>row-resize</div>
        <div style={{cursor: 'n-resize'}}>n-resize</div>
        <div style={{cursor: 'e-resize'}}>e-resize</div>
        <div style={{cursor: 'ne-resize'}}>ne-resize</div>
        <div style={{cursor: 'nw-resize'}}>nw-resize</div>
        <div style={{cursor: 'url("@/assets/zhan.png") 10 10, auto'}}>url(不行)</div>
      </div>

      <h2>设置鼠标样式</h2>
      <hr/>
      <Code fileName={'*.css'} language={'css'}>{"cursor: 'auto'"}</Code>
    </div>
  </>)
};