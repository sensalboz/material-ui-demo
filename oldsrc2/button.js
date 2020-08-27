import React from 'react'
import Button from '@material-ui/core/Button'
import useStyles from './styles'
import { paper } from './paper'

const SimpleButton = () => {
	const classes = useStyles()

	// const handleButtonClick = () => e => {
	// 	chipData ? setChipData([]) : (paper.style.display = 'none')
	// }

	return (
		<div className={classes.container}>
			<Button
				color='primary'
				// onClick={handleButtonClick()}
				variant='contained'
				size='small'
				className={classes.button}
			>
				delete all note
			</Button>
		</div>
	)
}

export default SimpleButton
