import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		listStyle: 'none',
		padding: theme.spacing(0.5),
		width: '80%',
		margin: 'auto',
		backgroundColor: 'lightgray'
	},
	chip: {
		margin: theme.spacing(0.5)
	},
	form: {
		display: 'flex',
		justifyContent: 'center',
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		},
		'& label.Mui-focused': {
			color: 'green'
		}
	},
	textField: {
		width: '80%',
		textAlign: 'center',
		color: theme.palette.success
	},
	container: {
		display: 'flex',
		justifyContent: 'center'
	},
	button: {
		margin: '200px 0'
	}
}))

export default useStyles
