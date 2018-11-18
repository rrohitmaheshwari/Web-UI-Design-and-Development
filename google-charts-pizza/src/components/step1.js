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
        handTossed: 'small',
        handmadePan: '',
        crunchyThinCrust :'',
        brooklynStyle : '',
    };

    handleChangeHandTossed = event => {
        this.setState({
            handTossed: event.target.value,
            handmadePan: '',
            crunchyThinCrust :'',
            brooklynStyle : '',
        });
    };

    handleChangeHandmadePan = event => {
        this.setState({
            handTossed: '',
            handmadePan: event.target.value,
            crunchyThinCrust :'',
            brooklynStyle : '',
        });
    };

    handleChangeCrunchyThinCrust = event => {
        this.setState({
            handTossed: '',
            handmadePan: '',
            crunchyThinCrust :event.target.value,
            brooklynStyle : '',
        });
    };

    handleChangeBrooklynStyle = event => {
        this.setState({
            handTossed: '',
            handmadePan: '',
            crunchyThinCrust :'',
            brooklynStyle : event.target.value,
        });
    };

    render() {
        const {classes} = this.props;
        localStorage.setItem('step1', JSON.stringify(this.state));
        return (
            <div className={classes.root} style={{textAlign: "left"}}>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">HANDMADE TOSSED</FormLabel>
                    <p>Garlic-seasoned crust with a rich, buttery taste...</p>
                    <RadioGroup
                        aria-label="HAND TOSSED"
                        name="handTossed"
                        className={classes.group}
                        value={this.state.handTossed}
                        onChange={this.handleChangeHandTossed}
                    >
                        <FormControlLabel value="small" control={<Radio/>} label="Small(10'')"/>
                        <FormControlLabel value="medium" control={<Radio/>} label="Medium(12'')"/>
                        <FormControlLabel value="large" control={<Radio/>} label="Large(14'')"/>
                        <FormControlLabel value="xlarge" control={<Radio/>} label="X-Large(16'')"/>
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">HANDMADE PAN</FormLabel>
                    <p>Two layers of cheese toppings to the edge, and a crust thats bakes up golden and crispy with a
                        buttery taste.</p>
                    <RadioGroup
                        aria-label="HANDMADE PAN"
                        name="handmadePan"
                        className={classes.group}
                        value={this.state.handmadePan}
                        onChange={this.handleChangeHandmadePan}
                    >
                        <FormControlLabel value="medium" control={<Radio/>} label="Medium(12'')"/>
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">CRUNCHY THIN CRUST</FormLabel>
                    <p>Thin enough for the optimum crispy to crunchy ratio.</p>
                    <RadioGroup
                        aria-label="CRUNCHY THIN CRUST"
                        name="crunchyThinCrust"
                        className={classes.group}
                        value={this.state.crunchyThinCrust}
                        onChange={this.handleChangeCrunchyThinCrust}
                    >
                        <FormControlLabel value="medium" control={<Radio/>} label="Medium(12'')"/>
                        <FormControlLabel value="large" control={<Radio/>} label="Large(14'')"/>
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">BROOKLYN STYLE</FormLabel>
                    <p>Hand streched to be big, thin, and perfectly foldable.</p>
                    <RadioGroup
                        aria-label="BROOKLYN STYLE"
                        name="brooklynStyle"
                        className={classes.group}
                        value={this.state.brooklynStyle}
                        onChange={this.handleChangeBrooklynStyle}
                    >
                        <FormControlLabel value="large" control={<Radio/>} label="Large(14'')"/>
                        <FormControlLabel value="xlarge" control={<Radio/>} label="X-Large(16'')"/>
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(styles)(RadioButtonsGroup);
