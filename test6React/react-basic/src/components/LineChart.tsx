// @ts-ignore
import * as echarts from 'echarts';
import React, {useEffect, useRef} from "react";

interface LineChartProps {
  xs: number[] | string[];
  ys: number[];
  smooth?: boolean;
  width?: number | string;
  height?: number | string;
}

export function LineChart({xs, ys, smooth = false, width = 500, height = 400}: LineChartProps) {
  /**
   * @description: 折线图
   * @param xs x轴值
   * @param ys y轴值
   * @param smooth 是否平滑
   * @param width 图像宽度
   * @param height 图像高度
   */
  const option = {
    xAxis: {
      type: 'category',
      data: xs
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: ys,
        type: 'line',
        smooth: smooth
      }
    ]
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const myChart = echarts.init(canvas,'light');
    option && myChart.setOption(option);
  }, []);
  return (
    <div className={'border'}>
      <canvas width={width} height={height} ref={canvasRef}></canvas>
    </div>
  )
}