import React, { useState, useMemo} from 'react'
import { Measurements } from '../../data/data'


  const columns = [
    {
        label: "client Name",
        key: "clientName",
    },
    {
        label: "Measurement Name",
        key: "measurementName",
    },
    {
        label: "Date Taken",
        func: (trx) => dateFormat(trx?.measurementDate),
    },
    {
        label: "Input Type",
        key: "measurementMethod",
    },
    {
        label: "Gender",
        key: "measurementGender",
    },       
    {   label: "Actions", 
        key: "method",
        isAction: true,
        position: "top",
        func: (trx) => <ActionComponent trx={trx} />,
    },
];

const UseMemo = () => {
  const [measurementData, setMeasurementData] = useState(Measurements)


  // console.log(measurementData)


//   const data = measurementData.map(item => {
//     const clientData = item.client;
//     const measurementsData = item.measurements;

//     const clientName = `${clientData.firstName} ${clientData.lastName}`;
//     const userEmail = clientData.email;
//     const measurementName = measurementsData.name;
//     const measurementMethod = measurementsData.method;
//     const measurementDate = measurementsData.date;
//     const measurementGender = measurementsData.gender;
//     const measurementId = measurementsData.measurementId;
//     const outfitBuyerId = measurementsData.outfitBuyerId;


//     return {
//         clientName,
//         userEmail,
//         measurementName,
//         measurementMethod,
//         measurementGender,
//         measurementDate,
//         measurementId,
//         outfitBuyerId
//     };
// });



// console.log(data) 







const mappedData = useMemo(() => {
  return measurementData?.map((item, index) => {
     const clientData = item.client;
     const measurementsData = item.measurements;


     return {
       clientName: `${clientData.firstName} ${clientData.lastName}`,
       userEmail: clientData?.email,
       measurementName: measurementsData?.name,
       measurementDate: measurementsData?.date,
       measurementMethod: measurementsData?.method,
       measurementGender: measurementsData?.gender,
       measurementId: measurementsData?.measurementId,
       outfitBuyerId: measurementsData.outfitBuyerId,
     }

   })
 }, [measurementData])



 console.log(mappedData)







  // console.log(Measurements)
  return (
    <div>
      <h1>UseMemo Example</h1>

    </div>
  )
}

export default UseMemo
