import React, {useEffect, useRef} from "react";
import hljs from 'highlight.js';
import {Code} from "@/components/Code";
import {LineChart} from "@/components/LineChart";

const code = `
import React from "react";

export default function Cursor() {

  useEffect(() => {
    hljs.highlightAll();
    return () => {
      hljs.removeAllHighlights();
    }
  })
  // JSX
  return (<div>
    <h1>Cursor</h1>
  </div>)
};
`
const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const yData = [820, 932, 901, 934, 1290, 1330, 1320]

export default function Introduce() {

  return (
    <>
      <h1>Introduce</h1>
      <Code fileName={'./introduce.tsx'} language={'typescript'}>{code}</Code>
      <LineChart xs={xData} ys={yData} smooth={true}></LineChart>

    </>
  );
}