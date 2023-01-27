import React from 'react'
import Radio from '@mui/material/Radio';

export default function SingleQuestion() {

    const [selectedValue, setSelectedValue] = React.useState('e');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (<>
    
        <div className='w-100 mt-4'>
        
        <div className='d-flex p-3 q-bg-top text-light rounded-top' >
            <p className='bg-light text-dark rounded-circle px-2 py-1 me-3 my-auto'>01 </p>
            <p className='my-auto'> Which one is based on the principle of electromagnetic induction? </p>
        </div>
        <div className='p-3 q-body text-light rounded-bottom'>
            <div><Radio {...controlProps('a')} color="primary"  className='text-light'/> Electric motor</div>
            <div><Radio {...controlProps('b')} color="default" className='text-light'/> Deccreate</div>
            <div><Radio {...controlProps('c')} color="default" className='text-light'/> Remain unchanged</div>
            <div><Radio {...controlProps('d')} color="default" className='text-light'/> Deccreate abnormally</div>
        </div>
      
        </div>
     
       
   </>
  )
}
