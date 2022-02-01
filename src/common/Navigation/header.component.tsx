import * as React from 'react';
import Icon from '../Icon/icon.component';
import { SearchAlt } from "styled-icons/boxicons-regular";
import { CartAlt } from "styled-icons/boxicons-regular";

interface Props {
    bgcolor: string;
}

const HeaderSection: React.FC<Props> = ({
    bgcolor
}) => {

    return (
        <div className="contactHeader" style={{ backgroundColor: bgcolor }}>
            <div className="w-100">
                <div className="flex">
                    <label className="callSection"> 
                        <span className="spanTag"> <a href="tel:+833.323.7009">Call 888.323.7009</a></span>
                    </label>
                      <label className="searchSection" style={{ cursor: 'pointer' }}> 
                        <span className="spanTag"> <a href="mailto:publish@stratton-press.com"> Email: publish@stratton-press.com </a> </span>
                     </label>
                    {/* <label className="cartSection"> */}
                        {/* <span className="spanTag">Cart</span>
                        <CartAlt size={25} color="white" /> */}
                    {/* </label> */}
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;