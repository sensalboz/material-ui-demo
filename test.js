// const addOneToEach = ar =>
//   ar.map(entity => typeof entity === 'string' 
//   	? parseInt(entity) + 1
//   	 : entity + 1)

// const log = console.log

// log(addOneToEach([1, 2, 3]))

// log(addOneToEach([1, '2', 3]))
// is a log file for is going for medals 


const unSureNum = entity => {
	typeof entity === 'string'  ? parseInt(entity) : entity; 
}

const addOne = num => num +1; 


const addOneToEach = ar =>  
		ar.map(unSureNum)
			.map(addOne)


const log = console.log;

log(addOneToEach([1, 3 , 34])) 
