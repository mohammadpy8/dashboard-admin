import React from 'react';
import Features from './../../components/features/Feature';
import Chart from '../../components/chart/Chart';
import xAxisData from "../../data";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import "./Home.css";

export default function Home() {
  return (
    <div className='home'>
      <Features />
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className='homeWidgets'>
        <WidgetSm />
      </div>
    </div>
  )
}
