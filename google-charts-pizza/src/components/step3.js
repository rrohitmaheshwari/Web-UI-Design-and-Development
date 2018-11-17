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
        margin: theme.spacing.unit * 4,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class RadioButtonsGroup extends React.Component {
    state = {
        Pepperoni : '',
        ItalianSausage: '',
        SlicedItalianSausage: '',
        Beef: '',
        PhilySteak: '',
        Ham: '',
        Bacon: '',
        PremiumChicken: '',
        Salami: '',

        CheddarCheese: '',
        FetaCheese: '',
        ShreddedParmesanAsiago: '',
        ShreddedProvoloneCheese: '',
        BananaPeppers: '',
        BlackOlives: '',
        Garlic: '',


    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">CHOOSE MEATS</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.Pepperoni} onChange={this.handleChange('Pepperoni')} value="Pepperoni" />
                            }
                            label="Pepperoni"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.ItalianSausage} onChange={this.handleChange('ItalianSausage')} value="ItalianSausage" />
                            }
                            label="Italian Sausage"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.SlicedItalianSausage} onChange={this.handleChange('SlicedItalianSausage')} value="SlicedItalianSausage" />
                            }
                            label="Sliced Italian Sausage"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.Beef} onChange={this.handleChange('Beef')} value="Beef" />
                            }
                            label="Beef"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.PhilySteak} onChange={this.handleChange('PhilySteak')} value="PhilySteak" />
                            }
                            label="Phily Steak"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.Ham} onChange={this.handleChange('Ham')} value="Ham" />
                            }
                            label="Ham"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.Bacon} onChange={this.handleChange('Bacon')} value="Bacon" />
                            }
                            label="Bacon"
                        />
                    </FormGroup>

                </FormControl>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">{' '}</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.Salami} onChange={this.handleChange('Salami')} value="Salami" />
                            }
                            label="Salami"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.PremiumChicken} onChange={this.handleChange('PremiumChicken')} value="PremiumChicken" />
                            }
                            label="Premium Chicken"
                        />

                    </FormGroup>

                </FormControl>

                <FormControl component="fieldset" className={classes.formControl} fullWidth={true}>
                    <FormLabel component="legend">CHOOSE NON-MEATS</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.CheddarCheese} onChange={this.handleChange('CheddarCheese')} value="CheddarCheese" />
                            }
                            label="Cheddar Cheese"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.FetaCheese} onChange={this.handleChange('FetaCheese')} value="FetaCheese" />
                            }
                            label="Feta Cheese"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.ShreddedParmesanAsiago} onChange={this.handleChange('ShreddedParmesanAsiago')} value="ShreddedParmesanAsiago" />
                            }
                            label="Shredded Parmesan Asiago"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.ShreddedProvoloneCheese} onChange={this.handleChange('ShreddedProvoloneCheese')} value="ShreddedProvoloneCheese" />
                            }
                            label="Shredded Provolone Cheese"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.BananaPeppers} onChange={this.handleChange('BananaPeppers')} value="BananaPeppers" />
                            }
                            label="Banana Peppers"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.BlackOlives} onChange={this.handleChange('BlackOlives')} value="BlackOlives" />
                            }
                            label="Black Olives"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={this.state.Garlic} onChange={this.handleChange('Garlic')} value="Garlic" />
                            }
                            label="Garlic"
                        />
                    </FormGroup>

                </FormControl>


            </div>
        );
    }
}

export default withStyles(styles)(RadioButtonsGroup);
