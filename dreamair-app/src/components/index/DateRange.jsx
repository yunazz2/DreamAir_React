import React, { useState } from 'react'
// import { Calendar } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { addDays } from "date-fns"
import { ko } from "date-fns/esm/locale";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const DateRange = () => {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 1),
          key: "selection",
        },
      ])
        
    return (
        <div>
            <DateRangePicker
                locale={ko}
                dateFormat="yyyy/MM/dd"
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                months={2}
                direction="horizontal"
            />

        </div>
    )
}

export default DateRange