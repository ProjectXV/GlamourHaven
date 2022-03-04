import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import 'react-datepicker/dist/react-datepicker.css'
export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
    console.log(this.state.selectedDay)
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        {selectedDay && <p>Day: {selectedDay.toLocaleDateString()}</p>}
        {!selectedDay && <p>Pick a day: </p>}
        <DayPickerInput onDayChange={this.handleDayChange} />
      </div>
    );
  }
}