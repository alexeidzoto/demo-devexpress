import * as React from "react";
import { Chart, Series } from 'devextreme-react/chart';

// data
import { population } from './data';

export default function WorldPopulationChart() {
    return (
      <Chart id="population" dataSource={population}>
        <Series
          valueField="population"
          argumentField="year"
          name="Population"
          type="bar"
          color="#DAA520" />
      </Chart>
    );
}
