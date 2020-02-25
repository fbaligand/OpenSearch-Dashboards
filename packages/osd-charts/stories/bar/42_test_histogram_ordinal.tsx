import { boolean, number } from '@storybook/addon-knobs';
import React from 'react';

import { Axis, BarSeries, Chart, HistogramBarSeries, Position, ScaleType, Settings } from '../../src';
import { getChartRotationKnob } from '../utils/knobs';
import { SB_SOURCE_PANEL } from '../utils/storybook';

// for testing purposes only
export const example = () => {
  const data = [
    { x: 'a', y: 2 },
    { x: 'b', y: 7 },
    { x: 'c', y: 0 },
    { x: 'd', y: 6 },
  ];
  const theme = {
    scales: {
      barsPadding: number('bars padding', 0.25, {
        range: true,
        min: 0,
        max: 1,
        step: 0.1,
      }),
    },
  };

  const hasHistogramBarSeries = boolean('hasHistogramBarSeries', false);
  return (
    <Chart className="story-chart">
      <Settings rotation={getChartRotationKnob()} theme={theme} debug={boolean('debug', true)} />
      <Axis id="discover-histogram-left-axis" position={Position.Left} title="left axis" />
      <Axis id="discover-histogram-bottom-axis" position={Position.Bottom} title="bottom axis" />
      {hasHistogramBarSeries && (
        <HistogramBarSeries
          id="histo"
          xScaleType={ScaleType.Ordinal}
          yScaleType={ScaleType.Linear}
          xAccessor="x"
          yAccessors={['y']}
          data={data}
          name="histogram"
        />
      )}
      <BarSeries
        id="bars-1"
        xScaleType={ScaleType.Ordinal}
        yScaleType={ScaleType.Linear}
        xAccessor="x"
        yAccessors={['y']}
        data={data}
        name="bars 1"
        enableHistogramMode={boolean('bars-1 enableHistogramMode', false)}
      />
      <BarSeries
        id="bars-2"
        xScaleType={ScaleType.Ordinal}
        yScaleType={ScaleType.Linear}
        xAccessor="x"
        yAccessors={['y']}
        data={data}
        enableHistogramMode={boolean('bars-2 enableHistogramMode', false)}
      />
    </Chart>
  );
};

// storybook configuration
example.story = {
  parameters: {
    options: { selectedPanel: SB_SOURCE_PANEL },
  },
};
