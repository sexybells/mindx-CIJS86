import React from 'react';

const ExpenseList = (props) => {

    const {item} = props;
    const monthName = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
      };

    return (
        <div className='box'>
            <div className='box-right'>
                <div className='box-date'>
                    <p>{monthName[item.month]}</p>
                    <p>{item.year}</p>
                    <p>{item.day}</p>
                </div>
                <div className='box-name'>
                    <p>{item.name}</p>
                </div>
            </div>
            <div className='box-left'>
                <div className='box-amount'>
                    <p>$ {item.amount}</p>
                </div>
            </div>
        </div>
    )

}

export default ExpenseList;