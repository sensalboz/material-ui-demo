import React, { useState } from 'react'
import useStyles from './styles'
import TextField from '@material-ui/core/TextField'

const Form = () => {
	const classes = useStyles()
	const [ inputValue, setInputValue ] = useState('')

	const handleSubmit = () => async e => {
		e.preventDefault()
		await setInputValue(inputValue)

		const obj = {
			value: inputValue.toLowerCase()
		}

		setChipData([ ...chipData, obj ])
		await setInputValue('')
	}

	return (
		<form className={classes.form} onSubmit={handleSubmit()}>
			<TextField
				id='standard-basic'
				label='add a note'
				className={classes.textField}
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
				autoFocus
			/>
		</form>
	)
}

export default Form
