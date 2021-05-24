import React from "react";

import PieChart, {
    Series,
    Label,
    Connector,
    Size,
    Export
} from 'devextreme-react/pie-chart';

// data
import { areas } from './data';

export default function PieCountryChart() {
    const toggleVisibility = (item: any) => {
        item.isVisible() ? item.hide() : item.show();
    }

    const pointClickHandler = (e: any) => {
        toggleVisibility(e.target);
    }
    
    const legendClickHandler = (e: any) => {
        let arg = e.target;
        let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
    
        toggleVisibility(item);
    }
      
    return (
        <PieChart
            id="pie"
            dataSource={areas}
            palette="Bright"
            onPointClick={pointClickHandler}
            onLegendClick={legendClickHandler}
        >
            <Series
                argumentField="country"
                valueField="area"
            >
            <Label visible={true}>
                <Connector visible={true} width={1} />
            </Label>
            </Series>

            <Size width={500} />
            <Export enabled={false} />
        </PieChart>
    );
}
