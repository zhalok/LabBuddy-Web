import React from 'react'
import Radio from '@mui/material/Radio';

export default function SingleQuestion() {

    const [selectedValue, setSelectedValue] = React.useState('a');

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

  return (
    <div>
      <div className="">
        <div className='d-flex pb-1 ps-3 q-bg-top text-light pt-3' >
            <p>01 </p>
            <p> Which one is based on the principle of electromagnetic induction? </p>
        </div>
        <div className='p-2 q-body text-light'>
            <div><Radio {...controlProps('d')} color="" /> Electric motor</div>
            <div><Radio {...controlProps('d')} color="default" /> Deccreate</div>
            <div><Radio {...controlProps('d')} color="default" /> Remain unchanged</div>
            <div><Radio {...controlProps('d')} color="default" /> Deccreate abnormally</div>
        </div>
        
      </div>
    </div>
  )
}
