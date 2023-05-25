import React from 'react'
import { useSelector } from 'react-redux'
import {
    DATA200, DATA200T, NDATA200, NDATA200T,
    DATA250, DATA250T, NDATA250, NDATA250T,
    DATA300, DATA300T, NDATA300, NDATA300T,
    DATA350, DATA350T, NDATA350, NDATA350T,
    DATA450, DATA450T, NDATA450, NDATA450T,
    DATA500, DATA500T, NDATA500, NDATA500T,
    DATA600, DATA600T, NDATA600, NDATA600T,
} from '../../Data';
import Buttons from './Buttons';



const CostComparison = () => {

    const sqft = useSelector((state) => state.squareft.value);
    const condition = useSelector((state) => state.conditioner.value);



    let decide = '';

    if (sqft > 500) {
        decide = condition == 'cleany' ?
            DATA600.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
            :
            NDATA600.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
    } else if (sqft > 450 && sqft <= 500) {
        decide = condition == 'cleany' ?
            DATA500.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
            :
            NDATA500.map((item) => {
                return (
                    <tr>
                        <td style="white-space: nowrap;">{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
    } else if (sqft > 350 && sqft <= 450) {
        decide = condition == 'cleany' ?
            DATA450.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
            :
            NDATA450.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
    } else if (sqft > 300 && sqft <= 350) {
        decide = condition == 'cleany' ?
            DATA350.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
            :
            NDATA350.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })

    } else if (sqft > 250 && sqft <= 300) {
        decide = condition == 'cleany' ?
            DATA300.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
            :
            NDATA300.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })

    } else if (sqft > 200 && sqft <= 250) {
        decide = condition == 'cleany' ?
            DATA250.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
            :
            NDATA250.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
    } else {
        decide = condition == 'cleany' ?
            DATA200.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
            :
            NDATA200.map((item) => {
                return (
                    <tr>
                        <td>{item.title}</td>
                        <td className="text-end">{item.price}</td>
                    </tr>
                );
            })
    }




    let subtotalDecide = '';
    let discountDecide = '';
    let totalDecide = '';

    if (sqft > 500) {
        subtotalDecide = condition == 'cleany' ? DATA600T.map((item) => item.subtotal) : NDATA600T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA600T.map((item) => item.discount) : NDATA600T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA600T.map((item) => item.total) : NDATA600T.map((item) => item.total)

    } else if (sqft > 450 && sqft <= 500) {
        subtotalDecide = condition == 'cleany' ? DATA500T.map((item) => item.subtotal) : NDATA500T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA500T.map((item) => item.discount) : NDATA500T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA500T.map((item) => item.total) : NDATA500T.map((item) => item.total)
    } else if (sqft > 350 && sqft <= 450) {
        subtotalDecide = condition == 'cleany' ? DATA450T.map((item) => item.subtotal) : NDATA450T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA450T.map((item) => item.discount) : NDATA450T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA450T.map((item) => item.total) : NDATA450T.map((item) => item.total)

    } else if (sqft > 300 && sqft <= 350) {
        subtotalDecide = condition == 'cleany' ? DATA350T.map((item) => item.subtotal) : NDATA350T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA350T.map((item) => item.discount) : NDATA350T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA350T.map((item) => item.total) : NDATA350T.map((item) => item.total)

    } else if (sqft > 250 && sqft <= 300) {
        subtotalDecide = condition == 'cleany' ? DATA300T.map((item) => item.subtotal) : NDATA300T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA300T.map((item) => item.discount) : NDATA300T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA300T.map((item) => item.total) : NDATA300T.map((item) => item.total)

    } else if (sqft > 200 && sqft <= 250) {
        subtotalDecide = condition == 'cleany' ? DATA250T.map((item) => item.subtotal) : NDATA250T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA250T.map((item) => item.discount) : NDATA250T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA250T.map((item) => item.total) : NDATA250T.map((item) => item.total)
    } else {
        subtotalDecide = condition == 'cleany' ? DATA200T.map((item) => item.subtotal) : NDATA200T.map((item) => item.subtotal)
        discountDecide = condition == 'cleany' ? DATA200T.map((item) => item.discount) : NDATA200T.map((item) => item.discount)
        totalDecide = condition == 'cleany' ? DATA200T.map((item) => item.total) : NDATA200T.map((item) => item.total)
    }

    const haul2 = 0;
    const lift2 = 0;
    const wash2 = 0;
    const haul = 62;
    const lift = 62;
     const coatsAlumetron2 = 0;
    const coatsVs2 = 0;
    const wash = Math.round(sqft * 0.2);
    const coatsAlumetron = Math.round(sqft * 1.21);
    const coatsVs = Math.round(sqft * 1.61);
    const materialCost = Math.round(subtotalDecide);
    const subTotal = haul + lift + wash + coatsAlumetron + coatsVs + materialCost




    return (
        <>
            <div className="row mt-5 mb-4 justify-content-center">
                <div><h1 className="sblue text-center fw-bold">Cost Comparison</h1></div>
                <div className="row mb-2 mt-3 jsutify-content-center">
                    <div className="col-5">
                        <h2 className="fw-bold text-end me-4 text-danger">Dealer Applied</h2>
                    </div>
                    <div className="col-2">
                        <h2 className="fw-bold text-center">Vs</h2>
                    </div>
                    <div className="col-5">
                        <h2 className="fw-bold ms-5 sblue">DIY</h2>
                    </div>
                </div>
                <div className="col-5 mt-2 border border-1 rounded-start border-end-0 bg-white">
                    <table className="table fs-5 sblue" >
                        <thead>
                            <tr>
                                <th scope="col" className="fs-5">Work Performed</th>
                                <th scope="col" className="fs-5">Cost</th>
                            </tr>
                        </thead>
                        <tbody >
                            {decide}
                            <tr>
                                <td>Haul, Move & Block</td>
                                <td className="text-end">${haul}</td>
                            </tr>
                            <tr>
                                <td>Lift, Move & Launch</td>

                                <td className="text-end">${lift}</td>
                            </tr>
                            <tr>
                                <td>Wash & prep pontoons</td>
                                <td className="text-end">${wash}</td>
                            </tr>
                            <tr>
                                <td>Apply 4 coats Alumetron</td>
                                <td className="text-end">${coatsAlumetron}</td>
                            </tr>
                            <tr>
                                <td>Apply 2 coats VS721 & Buff</td>
                                <td className="text-end">${coatsVs}</td>
                            </tr>
                           
                            <tr className="fw-bold text-danger">
                                <td>Subtotal</td>
                                <td>${subTotal}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><em>*Labor Rate may vary depending on location and
                        dealer rates</em></p>
                </div>
                <div className="col-5 mt-2 border border-1 rounded-end border-start-0 bg-white">
                    <table className="table fs-5 sblue">
                        <thead>
                            <tr>
                                <th scope="col" className="fs-5">Products</th>
                                <th scope="col" className="fs-5 text-end">Cost</th>
                            </tr>
                             {decide}
                             <tr>
                                <td>Haul, Move & Block</td>
                                <td className="text-end">${haul2}</td>
                            </tr>
                            <tr>
                                <td>Lift, Move & Launch</td>

                                <td className="text-end">${lift2}</td>
                            </tr>
                            <tr>
                                <td>Wash & prep pontoons</td>
                                <td className="text-end">${wash2}</td>
                            </tr>
                            <tr>
                                <td>Apply 4 coats Alumetron</td>
                                <td className="text-end">${coatsAlumetron2}</td>
                            </tr>
                            <tr>
                                <td>Apply 2 coats VS721 & Buff</td>
                                <td className="text-end">${coatsVs2}</td>
                            </tr>
                        </thead>
                        <tbody>
                            

                            <tr className="fw-bold text-success">
                                <td>Package Discount</td>
                                <td>- ${discountDecide}</td>
                            </tr>
                            <tr className="fw-bold text-primary">
                                <td>Total Investment</td>
                                <td>${totalDecide}</td>
                            </tr>
                            <tr className="fw-bold text-danger">
                                <td>Total Savings</td>
                                <td>${subTotal - totalDecide}</td>
                            </tr>
                        </tbody>
                    </table>
              
                </div>
            </div>
            <Buttons />
        </>
    )
}

export default CostComparison