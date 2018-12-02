import {color} from 'd3-color';
import {interpolateRgb} from 'd3-interpolate';
import React, {Component} from 'react';
import LiquidFillGauge from 'react-liquid-gauge';
import {Modal, Button} from 'antd';
import random from 'generate-random-data';


class LiquidApp extends Component {
    state = {
        value: 60,
        modalVisible: false,
    };
    startColor = '#dc143c'; // crimson
    endColor = '#6495ed'; // cornflowerblue

    setmodalVisible(modalVisible) {
        this.setState({modalVisible});
    }


    componentDidMount() {
        this.interval = setInterval(() => this.setState(
            {
                value: (this.state.value%2===0)?(random.int(1, 10) + this.state.value)%100:Math.abs(this.state.value-random.int(1, 10))%100,
            }
            ), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        // this.getData();
        const radius = 17;
        const interpolate = interpolateRgb(this.startColor, this.endColor);
        const fillColor = interpolate(this.state.value / 100);
        const gradientStops = [
            {
                key: '0%',
                stopColor: color(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];


        return (
            <div>
                <LiquidFillGauge
                    style={{margin: '0 auto'}}
                    width={radius * 2}
                    height={radius * 2}
                    value={this.state.value}
                    percent="%"
                    textSize={1.4}
                    textOffsetX={0}
                    textOffsetY={0}
                    textRenderer={(props) => {
                        const value = Math.round(props.value);
                        const radius = Math.min(props.height / 2, props.width / 2);
                        const textPixels = (props.textSize * radius / 2);
                        const valueStyle = {
                            fontSize: textPixels
                        };
                        const percentStyle = {
                            fontSize: textPixels * 0.7
                        };

                        return (
                            <tspan>
                                <tspan className="value" style={valueStyle}>{value}</tspan>
                                <tspan style={percentStyle}>{props.percent}</tspan>
                            </tspan>
                        );
                    }}
                    riseAnimation
                    waveAnimation
                    waveFrequency={2}
                    waveAmplitude={1}
                    gradient
                    gradientStops={gradientStops}
                    circleStyle={{
                        fill: fillColor
                    }}
                    waveStyle={{
                        fill: fillColor
                    }}
                    textStyle={{
                        fill: color('#444').toString(),
                        fontFamily: 'Arial'
                    }}
                    waveTextStyle={{
                        fill: color('#fff').toString(),
                        fontFamily: 'Arial'
                    }}
                    onClick={() => {
                        this.setmodalVisible(true);
                    }}
                />
                <p  className={'lakeLabel'} style={{marginLeft: '-30px',width:'150px'}}>{this.props.name}</p>

                <Modal
                    title={this.props.name}
                    centered
                    visible={this.state.modalVisible}
                    onCancel={() => this.setmodalVisible(false)}
                    footer={[
                        <Button key="submit" type="primary" onClick={() => this.setmodalVisible(false)}>
                            OK
                        </Button>,
                    ]}
                >
                    <LiquidFillGauge
                        style={{margin: '0 auto'}}
                        width={50 * 2}
                        height={50 * 2}
                        value={this.state.value}
                        percent="%"
                        textSize={1.4}
                        textOffsetX={0}
                        textOffsetY={0}
                        textRenderer={(props) => {
                            const value = Math.round(props.value);
                            const radius = Math.min(props.height / 2, props.width / 2);
                            const textPixels = (props.textSize * radius / 2);
                            const valueStyle = {
                                fontSize: textPixels
                            };
                            const percentStyle = {
                                fontSize: textPixels * 0.7
                            };

                            return (
                                <tspan>
                                    <tspan className="value" style={valueStyle}>{value}</tspan>
                                    <tspan style={percentStyle}>{props.percent}</tspan>
                                </tspan>
                            );
                        }}
                        riseAnimation
                        waveAnimation
                        waveFrequency={2}
                        waveAmplitude={1}
                        gradient
                        gradientStops={gradientStops}
                        circleStyle={{
                            fill: fillColor
                        }}
                        waveStyle={{
                            fill: fillColor
                        }}
                        textStyle={{
                            fill: color('#444').toString(),
                            fontFamily: 'Arial'
                        }}
                        waveTextStyle={{
                            fill: color('#fff').toString(),
                            fontFamily: 'Arial'
                        }}
                        onClick={() => {
                            this.setmodalVisible(true);
                        }}
                    />
                    <p><b>% of Capacity : </b>{this.state.value}%</p>
                    <p><b>% of Historical Average : </b>{this.props.historicalAvg}%</p>


                </Modal>
            </div>
        );
    }
}

export default LiquidApp;