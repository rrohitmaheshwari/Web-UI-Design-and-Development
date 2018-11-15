import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 4,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class RadioButtonsGroup extends React.Component {
    state = {

    };



    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">CHEESE?</FormLabel>

                </FormControl>

                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">CHOOSE A SAUCE</FormLabel>

                </FormControl>


            </div>
        );
    }
}

export default withStyles(styles)(RadioButtonsGroup);
