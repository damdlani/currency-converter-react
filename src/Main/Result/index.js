import React from 'react'; 
import { StyledResult } from './styled';

const Result = ({result}) => (
    <StyledResult>
        {
            result ? 
                <>
                    {result.fromAmount}&nbsp;PLN&nbsp;= 
                    <strong>
                        {" "}{result.toAmount}&nbsp;{result.currency}
                    </strong> 
                </>
                :
                ""
        }
    </StyledResult>
);

export default Result;