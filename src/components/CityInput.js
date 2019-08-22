import React from 'react';
import './CityInput.css';

export default class CityInput extends React.Component {

    

    render(props) {
        const onKlickHandler = (e) => {
            const eventKey = e.which ? e.which : e.keyCode;

            // check if input contains only letters after Enter was pressed
            if (eventKey === 13) {
                if (/^[a-zA-Z]+$/.test(e.target.value)) {
                    this.props.setCity(e);
                    this.setState({ isCitySet: true })
                    e.target.value = '';
                    e.target.placeholder = 'Enter a City...';
                }
                else {
                    e.target.value = '';
                    e.target.placeholder = 'Please enter a valid city name...';
                }        
            }
        }

        const style = {
            top: this.props.city ? '-400px' : '50px',
            width: '600px',
            display: 'inline-block',
            padding: '15px 10px',
            lineHeight: '120%',
            position: 'relative',
            borderRadius: '20px',
            outline: 'none'
        }
    
        return(
            <input className='city-input'
            style={style}
            type='text' 
            placeholder='Enter a City...' 
            onKeyPress={onKlickHandler}/>
        );
    }
}