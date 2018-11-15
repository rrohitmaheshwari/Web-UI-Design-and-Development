import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

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

class RadioButtonsGroup extends React.Component {
    state = {
        cheeseCheck : false,
        sauceCheck: false,
        sauceSelected: 'Robust Inspired Tomato',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleChangeSauceSelected = event => {
        this.setState({
            sauceSelected :event.target.value,
        });
    };


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">CHEESE?</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.cheeseCheck} onChange={this.handleChange('cheeseCheck')} value="cheeseCheck" />
                            }
                            label="cheese"
                        />
                    </FormGroup>

                </FormControl>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">CHOOSE A SAUCE</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.sauceCheck} onChange={this.handleChange('sauceCheck')} value="sauceCheck" />
                            }
                            label="Sauce"
                        />
                    </FormGroup>


                    {this.state.sauceCheck &&
                    <RadioGroup
                        aria-label="Sauce Selected"
                        name="sauceSelected"
                        className={classes.group}
                        value={this.state.sauceSelected}
                        onChange={this.handleChangeSauceSelected}
                    >
                        <FormControlLabel value="Robust Inspired Tomato" control={<Radio/>}
                                          label="Robust Inspired Tomato Sauce"/>
                        <FormControlLabel value="Hearty Marinara" control={<Radio/>} label="Hearty Marinara Sauce"/>
                        <FormControlLabel value="BBQ" control={<Radio/>} label="BBQ Sauce"/>
                        <FormControlLabel value="Garlic Parmesan White" control={<Radio/>}
                                          label="Garlic Parmesan White Sauce"/>
                        <FormControlLabel value="Alfredo" control={<Radio/>} label="Alfredo Sauce"/>
                    </RadioGroup>
                    }

                </FormControl>


            </div>
        );
    }
}

export default withStyles(styles)(RadioButtonsGroup);
