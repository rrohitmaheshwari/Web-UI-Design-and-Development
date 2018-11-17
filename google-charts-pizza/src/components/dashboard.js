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

const dataSankey = [
    ['From', 'To', 'Weight'],
    ['Brazil', 'Portugal', 5],
    ['Brazil', 'France', 1],
    ['Brazil', 'Spain', 1],
    ['Brazil', 'England', 1],
    ['Canada', 'Portugal', 1],
    ['Canada', 'France', 5],
    ['Canada', 'England', 1],
    ['Mexico', 'Portugal', 1],
    ['Mexico', 'France', 1],
    ['Mexico', 'Spain', 5],
    ['Mexico', 'England', 1],
    ['USA', 'Portugal', 1],
    ['USA', 'France', 1],
    ['USA', 'Spain', 1],
    ['USA', 'England', 5],
    ['Portugal', 'Angola', 2],
    ['Portugal', 'Senegal', 1],
    ['Portugal', 'Morocco', 1],
    ['Portugal', 'South Africa', 3],
    ['France', 'Angola', 1],
    ['France', 'Senegal', 3],
    ['France', 'Mali', 3],
    ['France', 'Morocco', 3],
    ['France', 'South Africa', 1],
    ['Spain', 'Senegal', 1],
    ['Spain', 'Morocco', 3],
    ['Spain', 'South Africa', 1],
    ['England', 'Angola', 1],
    ['England', 'Senegal', 1],
    ['England', 'Morocco', 2],
    ['England', 'South Africa', 7],
];
const options = {};

const dataPie =
    [['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
    ];


class RadioButtonsGroup extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root} align="center">

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>

                    <Chart
                        width="100%"
                        height="400px"
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={dataPie}
                        options={{
                            title: 'My Daily Activities',
                        }}
                        rootProps={{'data-testid': '1'}}
                    />
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">Dashboard</FormLabel>
                    <Chart
                        chartType="Sankey"
                        width="100%"
                        height="400px"
                        data={dataSankey}
                        options={options}
                    />

                </FormControl>


            </div>
        );
    }
}

export default withStyles(styles)(RadioButtonsGroup);
