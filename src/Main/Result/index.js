import React from 'react'; 
import { StyledResult } from './styled';

const Result = ({result}) => (
    <StyledResult>
        {
            result ? 
                <>
                    {result.fromAmount}&nbsp;EUR&nbsp;= 
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