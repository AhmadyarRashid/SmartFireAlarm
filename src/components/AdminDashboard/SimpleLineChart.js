import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import {getSaleData} from '../../middleWare/sellerFunction';


export default class SimpleLineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    componentWillMount() {
        getSaleData({})
            .then(res => {
                if (res){
                    this.setState({
                        data : res.data
                    })
                }
                console.log('========= graph data ============', res);
            }).catch(e => {
            console.log(e);
        })
    }

    render() {
        return (
            <ResponsiveContainer width="99%" height={320}>
                <LineChart data={this.state.data}>
                    <XAxis dataKey="_id"/>
                    <YAxis/>
                    <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="Visits" stroke="#82ca9d"/>
                    <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
            </ResponsiveContainer>
        );
    }
}