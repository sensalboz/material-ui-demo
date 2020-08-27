import React from 'react'; 
import {Container, Typography} from '@material-ui/core'; 
import {makeStyles} from '@material-ui/styles' 

const useStyles = makeStyles({
	container : {
		backgroundColor: "lightblue"
	}
}) 
const SimpleContainer = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Container maxWidth='xs' className={classes.container}>
				<Typography>
					salih is nets and sglkfdjglfdkjg ;gjsg sdjglsdfkjg
				</Typography>
			</Container>
		</React.Fragment>
	)
}

export default SimpleContainer; 