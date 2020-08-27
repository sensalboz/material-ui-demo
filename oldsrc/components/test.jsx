import React , {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Simple = () => {


	const [term ,setTerm] = useState(true); 


	function handleChange(input) {
			

			if(!term) { // false 
				console.log(term)
				return setTerm(input)
			}

			if(input === term) { 
				console.log(input)
				return setTerm(false)
			}


			console.log(term)
			return setTerm(input)



	}



	return (
		<div>

			 <Accordion expanded={term === 'panel1'} onChange={() => handleChange('panel1')}>
			  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
			    <Typography>General settings</Typography>
			    <Typography>I am an accordion</Typography>
			  </AccordionSummary>
			  <AccordionDetails>
			    <Typography>
			      Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
			      maximus est, id dignissim quam.
			    </Typography>
			  </AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel2'} onChange={() => handleChange('panel2')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel3'} onChange={() => handleChange('panel3')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel4'} onChange={() => handleChange('panel4')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel5'} onChange={() => handleChange('panel5')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel6'} onChange={() => handleChange('panel6')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel7'} onChange={() => handleChange('panel7')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel8'} onChange={() => handleChange('panel8')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel9'} onChange={() => handleChange('panel9')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel10'} onChange={() => handleChange('panel10')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel11'} onChange={() => handleChange('panel11')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel12'} onChange={() => handleChange('panel12')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={term === 'panel13'} onChange={() => handleChange('panel3')}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				  <Typography>General settings</Typography>
				  <Typography>I am an accordion</Typography>
				</AccordionSummary>
				<AccordionDetails>
				  <Typography>
				    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
				    maximus est, id dignissim quam.
				  </Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	)
}


export default Simple; 