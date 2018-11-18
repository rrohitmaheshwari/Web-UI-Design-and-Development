import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Dashboard from './dashboard';

const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    }, connectorActive: {
        '& $connectorLine': {
            borderColor: theme.palette.secondary.main,
        },
    },
    connectorCompleted: {
        '& $connectorLine': {
            borderColor: theme.palette.primary.main,
        },
    },
    connectorDisabled: {
        '& $connectorLine': {
            borderColor: theme.palette.grey[100],
        },
    },
    connectorLine: {
        transition: theme.transitions.create('border-color'),
    },
});

function getSteps() {
    return ['SIZE & CRUST', 'CHEESE & SAUCE', 'TOPPINGS'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Step1/>;
        case 1:
            return <Step2/>;
        case 2:
            return <Step3/>;
        default:
            return 'Unknown step';
    }
}

class HorizontalLinearStepper extends React.Component {
    state = {
        activeStep: 0,
        skipped: new Set(),
    };


    handleNext = () => {
        const {activeStep} = this.state;
        let {skipped} = this.state;


        if (activeStep === 2) {
            // alert("Order Successful!");
            let data = [];
            let step1States = JSON.parse(localStorage.getItem('step1'));
            let step2States = JSON.parse(localStorage.getItem('step2'));
            let step3States = JSON.parse(localStorage.getItem('step3'));
            let step1Arr = [];
            let step2Arr = [];
            let step3Arr = [];

            for (let keys in step1States) {
                if (step1States[keys] !== "") {
                    step1Arr.push(keys);
                }
            }

            if (step2States["cheeseCheck"] === true) {
                step2Arr.push("Cheese");
                if (localStorage.getItem("Cheese") !== null) {
                    localStorage.setItem("Cheese", Number(Number(localStorage.getItem("Cheese")) + 1));
                }
                else {
                    localStorage.setItem("Cheese", 20);
                }
            }
            if (step2States["sauceCheck"] === true) {
                step2Arr.push(step2States["sauceSelected"]);

                let sauceCnt = localStorage.getItem(step2States["sauceSelected"]);
                if (sauceCnt !== null) {
                    localStorage.setItem(step2States["sauceSelected"], Number(Number(sauceCnt) + 1));
                }
                else {
                    localStorage.setItem(step2States["sauceSelected"], 10);
                }

            }


            for (let keys in step3States) {
                if (step3States[keys] === true) {
                    step3Arr.push(keys);
                }
            }


            if (step2Arr.length !== 0) {
                for (let index2 = 0; index2 < step2Arr.length; index2++) {
                    data.push([
                        step1Arr[0],
                        step2Arr[index2], 1
                    ]);

                    for (let index3 = 0; index3 < step3Arr.length; index3++) {
                        data.push([
                            step2Arr[index2],
                            step3Arr[index3], 1
                        ]);

                    }
                }
            }
            else {
                for (let index3 = 0; index3 < step3Arr.length; index3++) {
                    data.push([
                        step1Arr[0],
                        step3Arr[index3],
                        1
                    ]);

                }

            }


            //update storage for graph render
            if (JSON.parse(localStorage.getItem('sankeyGraph')) !== null && JSON.parse(localStorage.getItem('sankeyGraph')).length > 0) {
                let temp = JSON.parse(localStorage.getItem('sankeyGraph'));
                temp = temp.concat(data);
                localStorage.setItem('sankeyGraph', JSON.stringify(temp));
            }
            else {
                localStorage.setItem('sankeyGraph', JSON.stringify(data));
            }

        }

        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };


    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };


    render() {
        const {classes} = this.props;
        const steps = getSteps();
        const {activeStep} = this.state;
        const connector = (
            <StepConnector
                classes={{
                    active: classes.connectorActive,
                    completed: classes.connectorCompleted,
                    disabled: classes.connectorDisabled,
                    line: classes.connectorLine,
                }}
            />
        );

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} connector={connector}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div id={"buttons"}>
                    {activeStep === steps.length ? (
                        <div>
                            <Dashboard/>
                            <Button onClick={this.handleReset} className={classes.button}>
                                HOME
                            </Button>
                        </div>
                    ) : (
                        <div>
                            {getStepContent(activeStep)}
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.button}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Build'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(HorizontalLinearStepper);
