import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const MyDatePicker = ({ selectedDate, setSelectedDate, excludedDates }) => {

    return (
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat='yyyy-MM-dd'
          inline
          minDate={(excludedDates.length !== 0) ? excludedDates[0] : new Date()}
          excludeDates={excludedDates}
        />
      </div>
    );
};
  
export default MyDatePicker