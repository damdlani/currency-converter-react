import React from 'react'; 
import './style.css';

const Result = ({result}) => (
    <div className="form__result">
        {
            result !== undefined ? 
                <>
                    {result.fromAmount}&nbsp;PLN&nbsp;= 
                    <strong>
                        {" "}{result.toAmount}&nbsp;{result.currency}
                    </strong> 
                </>
                :
                ""
        }
    </div>
);

export default Result;