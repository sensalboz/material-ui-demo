import React from 'react'; 
import { Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
	root: {
		backgroundColor: 'blue',
		fontSize: "20px"
	}
})

const BoxContainer = () => {
	const classes = useStyles(); 

	return (
		<Box className={classes.root}>
			<h1>salih is best</h1>
		</Box>
	)
}


export default BoxContainer; 