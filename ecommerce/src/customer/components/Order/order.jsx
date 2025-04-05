import React from 'react'
import { Box , Grid } from '@mui/material';
import OrderCard from './OrderCard';

const Order = () => {
    const orderStatus = [
        { label: "On The Way", value: "on_the_way" },
        { label: "Delivered", value: "delivered" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Returned", value: "on_the_way" } 
      ];
      

  return (
   
        <Box className="px-10">
       <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
            <Grid item xs={2.5} className=''>
                <div className='"h-auto shadow-lg bg-white border p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'>Filters </h1>

            <div className='space-y-4 mt-10'>
                <h1 className="font-semibold ">ORDER STATUS</h1>             
           {orderStatus.map((option,i)=>(
                <div className='flex items-center' key={i}>
                <input type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'
                defaultValue={option.value} />
                <label 
                htmlFor={option.value}
                className='ml-3 text-sm text-gray-600'
                > {option.label}</label>
                </div>
           ))}
           </div>
           </div>
            </Grid>
            <Grid item xs={9}>
          <Box className="space-y-5 pb-10">
           <div>
            {[1, 1, 1, 1, 1, 1, 1].map(() => (
              <OrderCard  />))}
                </div>  
          </Box>
        </Grid>
        </Grid>

           </Box>
  
  )
}

export default Order