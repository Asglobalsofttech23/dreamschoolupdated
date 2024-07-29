// import React, { useEffect, useState } from "react";
// import "./payfees.css";
// import axios from "axios";
// import config from "../../config";
// import { useNavigate, useParams } from "react-router";
// import { Link } from "react-router-dom";

// function FeeCollectionForm() {
//   const { stu_id } = useParams();
//   const [payfee, setPayfee] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${config.apiURL}/feeAllocation/payfeestud/${stu_id}`)
//       .then((res) => {
//         setPayfee(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [stu_id, config.apiURL]);

//   const [formData, setFormData] = useState({
//     payingfee: 0,
//     feedate: new Date().toISOString().slice(0, 10),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name === 'payingfee' ? parseFloat(value) : value,
//     }));
//   };

//   const calculateRemainingFees = (remainingfee) => {
//     return remainingfee - formData.payingfee;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { payingfee, feedate } = formData;

//     try {
//       for (const data of payfee) {
//         const remainingfee = calculateRemainingFees(data.remainingfee);

//         const formDataToSend = {
//           stu_id: data.stu_id,
//           stu_name: data.stu_name,
//           payingfee,
//           remainingfee,
//           feedate,
//         };

//         console.log(formDataToSend);
//         await axios.post(`${config.apiURL}/feeAllocation/feeslogdata`, formDataToSend);

//         // Navigate to invoice page with stu_id after successful submission
//         navigate(`/invoice`);
//       }
//     } catch (err) {
//       console.error('Error saving fees data:', err);
//       alert('Failed to submit fees data');
//     }
//   };

//   return (
//     <div className="fee-collection">
//       <h2>Fee Collection</h2>

//       {payfee.map((data) => (
//         <form onSubmit={handleSubmit} key={data.stu_id}>
//           <div className="form-group">
//             <label>Name</label>
//             <input type="text" value={data.stu_name} readOnly />
//           </div>
//           <div className="form-group">
//             <label>Class</label>
//             <input type="text" value={data.cls_name} readOnly />
//           </div>
//           <div className="form-group">
//             <label>Date</label>
//             <input
//               type="date"
//               name="date"
//               value={formData.feedate}
//               onChange={handleChange}
//             />
//           </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Sr. No.</th>
//                 <th>Particulars</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td><label>Tuition fees</label></td>
//                 <td><input type="text" value={data.tuition_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td><label>Transport fees</label></td>
//                 <td><input type="text" value={data.transport_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td><label>Additional fees</label></td>
//                 <td><input type="text" value={data.additional_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td><label>Paying amount</label></td>
//                 <td><input type="number" name="payingfee" onChange={handleChange} /></td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td><label>Remaining Fees</label></td>
//                 <td><input type="number" value={calculateRemainingFees(data.remainingfee)} readOnly /></td>
//               </tr>
//             </tbody>
//           </table>

//           <div className="form-group">
//             <label>Total</label>
//             <input type="text" value={data.total_fees} readOnly />
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       ))}

//     </div>
//   );
// }

// export default FeeCollectionForm;









// import React, { useEffect, useState } from "react";
// import "./payfees.css";
// import axios from "axios";
// import config from "../../config";
// import { useNavigate, useParams } from "react-router";
// import { Link } from "@mui/material";
// // import { Link } from "@mui/icons-material";


// function FeeCollectionForm() {
//   const { stu_id } = useParams();
//   const [payfee, setPayfee] = useState([]);
//   // const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${config.apiURL}/feeAllocation/payfeestud/${stu_id}`)
//       .then((res) => {
//         setPayfee(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [stu_id]);

//   const [formData, setFormData] = useState({
//     payingfee: 0,
//     feedate: new Date().toISOString().slice(0, 10),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name === 'payingfee' ? parseFloat(value) : value,
//     }));
//   };

//   const calculateRemainingFees = (remainingfee) => {
//     return remainingfee - formData.payingfee;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { payingfee, feedate } = formData;

//     try {
//       for (const data of payfee) {
//         const remainingfee = calculateRemainingFees(data.remainingfee);

//         const formDataToSend = {
//           stu_id: data.stu_id,
//           stu_name: data.stu_name,
//           payingfee,
//           remainingfee,
//           feedate,
//         };

//         await axios.post(`${config.apiURL}/feeAllocation/feeslogdata`, formDataToSend);

//         // Navigate to invoice page with stu_id after successful submission
//         navigate(`/invoice`);
//       }
//     } catch (err) {
//       console.error('Error saving fees data:', err);
//       alert('Failed to submit fees data');
//     }
//   };

//   return (
//     <div className="fee-collection">
//       <h2>Fee Collection</h2>

//       {payfee.map((data) => (
//         <form onSubmit={handleSubmit} key={data.stu_id}>
//           <div className="form-group">
//             <label>Name</label>
//             <input type="text" value={data.stu_name} readOnly />
//           </div>
//           <div className="form-group">
//             <label>Class</label>
//             <input type="text" value={data.cls_name} readOnly />
//           </div>
//           <div className="form-group">
//             <label>Date</label>
//             <input
//               type="date"
//               name="feedate"
//               value={formData.feedate}
//               onChange={handleChange}
//             />
//           </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Sr. No.</th>
//                 <th>Particulars</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td><label>Tuition fees</label></td>
//                 <td><input type="text" value={data.tution_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td><label>Transport fees</label></td>
//                 <td><input type="text" value={data.transport_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td><label>Additional fees</label></td>
//                 <td><input type="text" value={data.additional_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td><label>Paying amount</label></td>
//                 <td><input type="number" name="payingfee" value={formData.payingfee} onChange={handleChange} /></td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td><label>Remaining Fees</label></td>
//                 <td><input type="number" value={calculateRemainingFees(data.total_fees)} readOnly /></td>
//               </tr>
//             </tbody>
//           </table>

//           <div className="form-group">
//             <label>Total</label>
//             <input type="number" value={data.total_fees} readOnly />
//           </div>
//            <Link  to={(`/Invoice/${data.stu_id}`)}>

//           <button type="submit">Submit</button></Link>
//         </form>
//       ))}

//     </div>
//   );
// }

// export default FeeCollectionForm;



// import React, { useEffect, useState } from "react";
// import "./payfees.css";
// import axios from "axios";
// import config from "../../config";
// import { useNavigate, useParams } from "react-router";
// import { Link } from "react-router-dom";

// function FeeCollectionForm() {
//   const { stu_id } = useParams();
//   const [payfee, setPayfee] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${config.apiURL}/feeAllocation/payfeestud/${stu_id}`)
//       .then((res) => {
//         setPayfee(res.data);
//         console.log("fees data", res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [stu_id]);

//   const [formData, setFormData] = useState({
//     payingfee: 0,
//     feedate: new Date().toISOString().slice(0, 10),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name === 'payingfee' ? parseFloat(value) : value,
//     }));
//   };

//   const calculateRemainingFees = (remainingfee) => {
//     if (isNaN(remainingfee)) {
//       return 0; // Default to 0 if remainingfee is not a number
//     }
//     return remainingfee - formData.payingfee;
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { payingfee, feedate } = formData;
  
//     if (isNaN(payingfee) || payingfee <= 0) {
//       alert('Invalid paying amount');
//       return;
//     }
  
//     try {
//       for (const data of payfee) {
//         const remainingfee = calculateRemainingFees(data.remainingfee);
        
//         // Make sure remainingfee is not null or undefined
//         if (remainingfee == null) {
//           alert('Invalid remaining fee calculation');
//           return;
//         }
  
//         const formDataToSend = {
//           stu_id: data.stu_id,
//           stu_name: data.stu_name,
//           payingfee,
//           remainingfee,
//           feedate,
//         };
  
//         console.log(formDataToSend);
//         await axios.post(`${config.apiURL}/feeslogdata`, formDataToSend);
  
//         // Navigate to invoice page with stu_id after successful submission
//         navigate(`/Invoice/${data.stu_id}`);
//       }
//     } catch (err) {
//       console.error('Error saving fees data:', err);
//       alert('Failed to submit fees data');
//     }
//   };
  


//   return (
//     <div className="fee-collection">
//       <h2>Fee Collection</h2>

//       {payfee.map((data) => (
//         <form onSubmit={handleSubmit} key={data.stu_id}>
//           <div className="form-group">
//             <label>Name</label>
//             <input type="text" value={data.stu_name} readOnly />
//           </div>
//           <div className="form-group">
//             <label>Class</label>
//             <input type="text" value={data.cls_name} readOnly />
//           </div>
//           <div className="form-group">
//             <label>Date</label>
//             <input
//               type="date"
//               name="date"
//               value={formData.feedate}
//               onChange={handleChange}
//             />
//           </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Sr. No.</th>
//                 <th>Particulars</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td><label>Tuition fees</label></td>
//                 <td><input type="text" value={data.tution_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td><label>Transport fees</label></td>
//                 <td><input type="text" value={data.transport_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td><label>ECA fees</label></td>
//                 <td><input type="text" value={data.additional_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td><label>1st Installment fees</label></td>
//                 <td><input type="text" value={data.firstinstallment} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td><label>2nd Installment fees</label></td>
//                 <td><input type="text" value={data.secondinstallment} readOnly /></td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td><label>Paying amount</label></td>
//                 <td><input type="number" name="payingfee" onChange={handleChange} /></td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td><label>Remaining Fees</label></td>
//                 <td><input type="number" value={calculateRemainingFees(data.total_fees)} readOnly /></td>
//               </tr>
//             </tbody>
//           </table>

//           <div className="form-group">
//             <label>Total</label>
//             <input type="text" value={data.total_fees} readOnly />
//           </div>
//           <button type="submit">Submit</button>
// <Link to={(`/Invoice/${data.stu_id}`)}>
//          </Link>
//         </form>
//       ))}
//     </div>
//   );
// }

// export default FeeCollectionForm;



// import React, { useEffect, useState } from "react";
// import "./payfees.css";
// import axios from "axios";
// import config from "../../config";
// import { useNavigate, useParams } from "react-router";

// function FeeCollectionForm() {
//   const { stu_id } = useParams();
//   const [payfee, setPayfee] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${config.apiURL}/feeAllocation/payfeestud/${stu_id}`)
//       .then((res) => {
//         setPayfee(res.data);
//         console.log("fees data", res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [stu_id]);

//   const [formData, setFormData] = useState({
//     payingfee: 0,
//     feedate: new Date().toISOString().slice(0, 10),
//     paymentMethod: "Cash", // Default payment method
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: name === "payingfee" ? parseFloat(value) : value,
//     }));
//   };

//   const calculateRemainingFees = (totalFees) => {
//     return totalFees - formData.payingfee;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { payingfee, feedate, paymentMethod } = formData;

//     if (isNaN(payingfee) || payingfee <= 0) {
//       alert("Invalid paying amount");
//       return;
//     }

//     try {
//       for (const data of payfee) {
//         const remainingfee = calculateRemainingFees(data.total_fees);

//         if (remainingfee < 0) {
//           alert("Invalid remaining fee calculation");
//           return;
//         }

//         const formDataToSend = {
//           stu_id: data.stu_id,
//           stu_name: data.stu_name,
//           payingfee,
//           remainingfee,
//           feedate,
//           paymentMethod, // Add payment method to the data sent to backend
//         };

//         console.log(formDataToSend);
//         await axios.post(`${config.apiURL}/feeAllocation/feeslogdata`, formDataToSend);

//         navigate(`/Invoice/${data.stu_id}`);
//       }
//     } catch (err) {
//       console.error("Error saving fees data:", err);
//       alert("Failed to submit fees data");
//     }
//   };

//   return (
//     <div className="fee-collection">
//       <h2>Fee Collection</h2>

//       {payfee.map((data) => (
//         <form onSubmit={handleSubmit} key={data.stu_id}>
//           <div className="form-group">
//             <label>Name</label>
//             <input type="text" value={data.stu_name} readOnly />
//           </div>
//           <div className="form-group">
//             <label>Class</label>
//             <input type="text" value={data.cls_name} readOnly />
//           </div>
//           <div className="form-group">
//             <label>Date</label>
//             <input
//               type="date"
//               name="feedate"
//               value={formData.feedate}
//               onChange={handleChange}
//             />
//           </div>

//           <table>
//             <thead>
//               <tr>
//                 <th>Sr. No.</th>
//                 <th>Particulars</th>
//                 <th>Amount</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Tuition fees</td>
//                 <td><input type="text" value={data.tution_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Transport fees</td>
//                 <td><input type="text" value={data.transport_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>ECA fees</td>
//                 <td><input type="text" value={data.additional_fees} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>1st Installment fees</td>
//                 <td><input type="text" value={data.firstinstallment} readOnly /></td>
//               </tr>
//               <tr>
//                 <td>5</td>
//                 <td>2nd Installment fees</td>
//                 <td><input type="text" value={data.secondinstallment} readOnly /></td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td>Paying amount</td>
//                 <td>
//                   <input
//                     type="number"
//                     name="payingfee"
//                     value={formData.payingfee}
//                     onChange={handleChange}
//                   />
//                 </td>
//               </tr>
//               <tr>
//                 <td></td>
//                 <td>Remaining Fees</td>
//                 <td>
//                   <input
//                     type="number"
//                     value={calculateRemainingFees(data.total_fees)}
//                     readOnly
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div className="form-group">
//             <label>Total</label>
//             <input type="text" value={data.total_fees} readOnly />
//           </div>
          
//           <div className="form-group">
//             <label>Payment Method</label>
//             <select
//               name="paymentMethod"
//               value={formData.paymentMethod}
//               onChange={handleChange}
//             >
//               <option value="Cash">Cash</option>
//               <option value="Credit Card">Credit Card</option>
//               <option value="Bank Transfer">Bank Transfer</option>
//             </select>
//           </div>

//           <button type="submit">Submit</button>
//         </form>
//       ))}
//     </div>
//   );
// }

// export default FeeCollectionForm;



import React, { useEffect, useState } from "react";
import "./payfees.css";
import axios from "axios";
import config from "../../config";
import { useNavigate, useParams } from "react-router";

function FeeCollectionForm() {
  const { stu_id } = useParams();
  const [payfee, setPayfee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${config.apiURL}/feeAllocation/payfeestud/${stu_id}`)
      .then((res) => {
        setPayfee(res.data);
        console.log("fees data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stu_id]);

  const [formData, setFormData] = useState({
    payingfee: 0,
    feedate: new Date().toISOString().slice(0, 10),
    paymentMethod: "Cash", // Default payment method
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "payingfee" ? parseFloat(value) : value,
    }));
  };

  const calculateRemainingFees = (totalFees) => {
    return totalFees - formData.payingfee;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { payingfee, feedate, paymentMethod } = formData;

    if (isNaN(payingfee) || payingfee <= 0) {
      alert("Invalid paying amount");
      return;
    }

    try {
      for (const data of payfee) {
        const remainingfee = calculateRemainingFees(data.total_fees);

        if (remainingfee < 0) {
          alert("Invalid remaining fee calculation");
          return;
        }

        const formDataToSend = {
          stu_id: data.stu_id,
          stu_name: data.stu_name,
          payingfee,
          remainingfee,
          feedate,
          paymentMethod, // Add payment method to the data sent to backend
        };

        console.log(formDataToSend);
        const response = await axios.post(`${config.apiURL}/feeAllocation/feeslogdata`, formDataToSend);

        if (response.status === 201) {
          const { feeslogid } = response.data;
          navigate(`/Invoice/${feeslogid}`);
        } else {
          alert("Failed to submit fees data");
        }
      }
    } catch (err) {
      console.error("Error saving fees data:", err);
      alert("Failed to submit fees data");
    }
  };

  return (
    <div className="fee-collection">
      <h2>Fee Collection</h2>

      {payfee.map((data) => (
        <form onSubmit={handleSubmit} key={data.stu_id}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={data.stu_name} readOnly />
          </div>
          <div className="form-group">
            <label>Class</label>
            <input type="text" value={data.cls_name} readOnly />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="feedate"
              value={formData.feedate}
              onChange={handleChange}
            />
          </div>

          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Particulars</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Tuition fees</td>
                <td><input type="text" value={data.tution_fees} readOnly /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Transport fees</td>
                <td><input type="text" value={data.transport_fees} readOnly /></td>
              </tr>
              <tr>
                <td>3</td>
                <td>ECA fees</td>
                <td><input type="text" value={data.additional_fees} readOnly /></td>
              </tr>
              <tr>
                <td>4</td>
                <td>1st Installment fees</td>
                <td><input type="text" value={data.firstinstallment} readOnly /></td>
              </tr>
              <tr>
                <td>5</td>
                <td>2nd Installment fees</td>
                <td><input type="text" value={data.secondinstallment} readOnly /></td>
              </tr>
              <tr>
                <td></td>
                <td>Paying amount</td>
                <td>
                  <input
                    type="number"
                    name="payingfee"
                    value={formData.payingfee}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Remaining Fees</td>
                <td>
                  <input
                    type="number"
                    value={calculateRemainingFees(data.total_fees)}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="form-group">
            <label>Total</label>
            <input type="text" value={data.total_fees} readOnly />
          </div>
          
          <div className="form-group">
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      ))}
    </div>
  );
}

export default FeeCollectionForm;
