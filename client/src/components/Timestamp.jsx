import AppointmentPicker from 'appointment-picker';
import React from'react'
import '../../node_modules/appointment-picker/dist/appointment-picker.css';
import moment from 'moment'


    /** Use following imports if used outside this demo project */
    // import AppointmentPicker from 'appointment-picker';
    
    
    /** Remove following imports if used in your own project */
    
    class Timestamp extends React.Component {
    
        constructor(props) {
            super(props);
            this.options = {
              interval: 30,
  mode: '12h',
  minTime: 9,
  maxTime: 20,
  startTime: 8,
  endTime: 24,
  disabled: ['16:30', '17:00'],
  templateInner: '<li class="appo-picker-list-item {{disabled}}"><input type="button" tabindex="-1" value="{{time}}" {{disabled}}></li>',
  templateOuter: '<span class="appo-picker-title">{{title}}</span><ul class="appo-picker-list">{{innerHtml}}</ul>'
            };
            this.state = { time: {},displayTime: {} };
            this.pickerRef = React.createRef();
            this.onTimeSelect = this.onTimeSelect.bind(this);
        }
    
        onTimeSelect(event) {
            console.log('change.appo.picker', event.time);
            this.setState({ time: event.time });
            // Or do something different with your time object
            console.log('change.appo.picker', event.displayTime);
            this.setState({ displayTime: event.displayTime });
        }
    
        render() {
            const d=new Date()
            const day=d.getUTCDay();
            const month=d.getUTCFullYear();
            const year=d.getUTCMonth();
            const currentDate=day+"-"+month+"-"+year;
            const givenTime = moment(this.displayTime).format("hh:mm");
           
            
            //setting time to required format
            const dateString = currentDate + "T" + givenTime  + "-7:00"
            console.log(dateString)
            return (
                <div>
                    <input type="text" ref={ this.pickerRef }></input>
                    <code>{ JSON.stringify(this.state.time) }</code>
                </div>);
        }
    
        componentDidMount() {
            this.picker = new AppointmentPicker(this.pickerRef.current, this.options);
            this.pickerRef.current.addEventListener('change.appo.picker', this.onTimeSelect);
        }
    
        componentWillUnmount() {
            this.pickerRef.current.removeEventListener('change.appo.picker', this.onTimeSelect);
            this.picker.destroy();
        }
    }
    
    export default Timestamp;