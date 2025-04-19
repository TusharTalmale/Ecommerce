import * as React from "react";
import { Grid, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../Redux/Customers/Order/Action";
// import AddressCard from "../address/AddressCard";









export default function AddDeliveryAddressForm({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(store => store.auth);
  const [selectedAddress, setSelectedAdress] = useState(null);

  console.log("auth", auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };

    console.log("auth jwt ", jwt);
    dispatch(createOrder({ address, jwt, navigate }));
    // after perfoming all the opration
    handleNext();
  };

  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address:item, jwt, navigate }));
    handleNext();
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
        {Array.isArray(auth.user?.addresses) && auth.user.addresses.map((item) => (
  <div
    key={item.id}
    onClick={() => setSelectedAdress(item)}
    className="p-5 py-7 border-b cursor-pointer"
  >
    <AddressCard address={item} />
    {selectedAddress?.id === item.id && (
      <Button
        sx={{ mt: 2 }}
        size="large"
        variant="contained"
        color="primary"
        onClick={() => handleCreateOrder(item)}
      >
        Deliverd Here
      </Button>
    )}
  </div>
))}

        </Box>
      </Grid>
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ padding: ".9rem 1.5rem" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Deliverd Here
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}



















// export default function AddDeliveryAddressForm({ handleNext }) {
// //   const [selectedAddress, setSelectedAddress] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);

//     const address = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       streetAddress: data.get("address"),
//       city: data.get("city"),
//       state: data.get("state"),
//       zipCode: data.get("zip"),
//       mobile: data.get("phoneNumber"),
//     };

//     handleNext();
//   };

//   return (
//     <Grid container spacing={4}>
//       <Grid item xs={12} lg={5}>
//         <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
//           {/* Render address list dynamically when available */}
//           {/* Example: auth.user?.addresses.map((item) => ( */}
//           {/* Uncomment and modify when integrating with data */}
//           {/* <div key={item.id} onClick={() => setSelectedAddress(item)} className="p-5 py-7 border-b cursor-pointer"> */}
//           <div>
//             <AddressCard  /> 
//             <Button sx={{ mt: 2 }} size="large" variant="contained" color="primary">
//               Delivered Here
//             </Button>
//            </div>
//           {/* )) */}
//         </Box>
//       </Grid>
//       <Grid item xs={12} lg={7}>
//         <Box className="border rounded-md shadow-md p-5">
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField required id="firstName" name="firstName" label="First Name" fullWidth />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField required id="lastName" name="lastName" label="Last Name" fullWidth />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField required id="address" name="address" label="Address" fullWidth multiline rows={4} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField required id="city" name="city" label="City" fullWidth />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField required id="state" name="state" label="State/Province/Region" fullWidth />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField required id="zip" name="zip" label="Zip / Postal code" fullWidth />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField required id="phoneNumber" name="phoneNumber" label="Phone Number" fullWidth />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button sx={{ padding: ".9rem 1.5rem" }} size="large" type="submit" variant="contained" color="primary">
//                   Delivered Here
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }
