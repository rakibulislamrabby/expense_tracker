import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputSection = () => {
    const [date, setDate] = useState(null);
    const [startDate, setstartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    return (
        <div className='grid grid-cols-2 gap-4 m-6'>

            <div className='grid grid-cols-2'>

                <input type="text" placeholder="Expense Title" class="input input-bordered input-secondary w-4/5 max-w-xs mr-8" />
                <input type="number" placeholder="Amount" class="input input-bordered input-secondary w-4/5 max-w-xs" />

                <select class="select select-secondary w-4/5 max-w-xs mt-4">
                    <option disabled selected>Expense Type</option>
                    <option>House Bill</option>
                    <option>Mobile Bil</option>
                    <option>Internet Bill</option>
                    <option>Grosary Bill</option>

                </select>
                {/* <input type="text" placeholder="Date" class="input input-bordered input-secondary w-2/5 max-w-xs ml-8" /> */}
                <DatePicker className='input input-bordered input-secondary w-4/5 max-w-xs mt-4' placeholderText='Date' selected={date} onChange={date => setDate(date)} />

                <div>
                    {/* just show a colum to divid a div */}
                </div>

                <button class="btn btn-secondary btn-wide w-4/5  mt-4">Enter</button>
            </div>
            <div className='grid grid-cols-2'>
                {/* <input type="text" placeholder="Start Date" class="input input-bordered input-secondary w-2/5 max-w-xs" /> */}
                <DatePicker placeholderText='Start Date' className='input input-bordered input-secondary w-4/5 max-w-x' selected={startDate} onChange={date => setstartDate(date)} />

                <select class="select select-secondary w-4/5 max-w-xs ">
                    <option disabled selected>Type</option>
                    <option>Expense</option>
                    <option>Income</option>

                </select>

                {/* <input type="text" placeholder="End Date" class="input input-bordered input-secondary w-2/5 max-w-xs mt-4" /> */}
                <DatePicker className='input input-bordered input-secondary w-4/5 max-w-xs ' placeholderText='End Date' selected={endDate} onChange={date => setEndDate(date)} />

                <button class="btn btn-secondary btn-wide w-4/5">Filter</button>

                <div>

                </div>
            </div>
        </div>
    );
};

export default InputSection;