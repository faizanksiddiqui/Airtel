import React, { useState } from 'react';

function Recharge() {
  const [selectedOption, setSelectedOption] = useState('');
  const [submitButtonText, setSubmitButtonText] = useState('Submit');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    // Update the submit button text based on the selected option
    switch (event.target.value) {
      case 'option1':
        setSubmitButtonText('Recharge');
        break;
      case 'option2':
        setSubmitButtonText('Pay Bill');
        break;
      case 'option3':
        setSubmitButtonText('Recharge');
        break;
      case 'option4':
        setSubmitButtonText('Pay Bill');
        break;
      case 'option5':
        setSubmitButtonText('Pay Bill');
        break;   
      default:
        setSubmitButtonText('Recharge');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your submission logic here
    console.log('Form submitted with selected option:', selectedOption);
  };

  return (
    <div className='sb'>
      <div className='recharge-text'>
        <p><b>Recharge or pay bills</b></p>
      </div> 
      <div className='allButton'>
      <form onSubmit={handleSubmit}>
        <div className='sb1'>
          <button>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}
            />
            <label><img src="./images/prepaid.svg" alt="brand"></img>Recharge</label>
          </button>
        </div>
        <div className='sb1'>
          <button>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
            />
            <label><img src="./images/postpaid.svg" alt="brand"></img>Postpaid</label>
          </button>
        </div>
        <div className='sb1'>
          <button>
            <input
              type="radio"
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
            />
            <label><img src="./images/dth.svg" alt="brand"></img>DTH</label>
          </button>
        </div>
        <div className='sb1'>
          <button>
            <input
              type="radio"
              value="option4"
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}
            />
            <label><img src="./images/fiber.svg" alt="brand"></img>Fiber</label>
          </button>
        </div>
        <div className='sb1'>
          <button>
            <input
              type="radio"
              value="option5"
              checked={selectedOption === 'option5'}
              onChange={handleOptionChange}
            />
            <label><img src="./images/airtel-black.svg" alt="brand"></img>Airtel Black</label>
          </button>
        </div>
        <div className='sbutton'>
          <div className='search-container'>
           <input type="text" class="search-bar" placeholder="Enter Mobile Number"></input> <br></br>
          </div>
        
        <button type="submit">{submitButtonText}</button>
        </div>
         
      </form>
      </div> 
    </div>
  );
}

export default Recharge;
