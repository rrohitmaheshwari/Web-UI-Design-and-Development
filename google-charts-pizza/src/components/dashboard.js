import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Chart from "react-google-charts";


const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 2,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

const options = {};


class RadioButtonsGroup extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            dataPie: [['Topping', 'Count']],
            dataSankey: [['From', 'To', 'Weight']],
        };
    }

    componentWillMount() {
        let dataSankey = [['From', 'To', 'Weight']];
        let dataPie = [['Topping', 'Count']];
        let dataSankeyUpdates = JSON.parse(localStorage.getItem('sankeyGraph'));

        if (dataSankeyUpdates.length > 0) {
            dataSankey = dataSankey.concat(dataSankeyUpdates);
        }


        if (localStorage.getItem('Alfredo')) {
            dataPie.push(['Alfredo', Number(localStorage.getItem('Alfredo'))])
        }
        if (localStorage.getItem('Garlic Parmesan White')) {
            dataPie.push(['Garlic Parmesan White', Number(localStorage.getItem('Garlic Parmesan White'))])
        }
        if (localStorage.getItem('Hearty Marinara')) {
            dataPie.push(['Hearty Marinara', Number(localStorage.getItem('Hearty Marinara'))])
        }
        if (localStorage.getItem('Robust Inspired Tomato')) {
            dataPie.push(['Robust Inspired Tomato', Number(localStorage.getItem('Robust Inspired Tomato'))])
        }
        if (localStorage.getItem('BBQ')) {
            dataPie.push(['BBQ', Number(localStorage.getItem('BBQ'))])
        }
        if (localStorage.getItem('Cheese')) {
            dataPie.push(['Cheese', Number(localStorage.getItem('Cheese'))])
        }

        this.setState({dataPie});
        this.setState({dataSankey});
    }


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root} align="center">

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>

                    <Chart
                        width="100%"
                        height="400px"
                        chartType="PieChart"
                        loader={<div>Loading Pie chart</div>}
                        data={this.state.dataPie}
                        options={{
                            title: 'Pizza Toppings',
                        }}
                        rootProps={{'data-testid': '1'}}
                    />
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <Chart
                        chartType="Sankey"
                        width="100%"
                        height="400px"
                        loader={<div>Loading Sankey Chart</div>}
                        data={this.state.dataSankey}
                        options={options}
                    />

                </FormControl>


            </div>
        );
    }
}

export default withStyles(styles)(RadioButtonsGroup);
