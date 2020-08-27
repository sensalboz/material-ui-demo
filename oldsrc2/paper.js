import React, { useState } from 'react'
import { Paper, Chip, Avatar } from '@material-ui/core'

import useStyles from './styles'

const SimplePaper = () => {
	const classes = useStyles()

	const [ chipData, setChipData ] = useState([
		{ value: 'jquery' },
		{ value: 'angular' },
		{ value: 'vuejs' },
		{ value: 'react' },
		{ value: 'salih' }
	])

	const handleDelete = chipToDelete => () => {
		setChipData(chips => chips.filter(chip => chip.value !== chipToDelete.value)) // bu icindeki filter fonsiyonu
	}

	return (
		<Paper component='ul' className={classes.root} id='paper'>
			{chipData.map(selectedChip => {
				let icon

				if (selectedChip.value === 'react') {
					icon = <TagFacesIcon />
				}
				return (
					<li key={selectedChip.value}>
						<Chip
							className={classes.chip}
							label={selectedChip.value}
							onDelete={selectedChip.value === 'react' ? undefined : handleDelete(selectedChip)}
							avatar={<Avatar>{selectedChip.value.charAt(0).toUpperCase()}</Avatar>}
						/>
					</li>
				)
			})}
		</Paper>
	)
}

const paper = () => {
	const paper = document.querySelector('#paper')
	return paper
}

export { paper }
export default SimplePaper
