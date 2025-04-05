import React from "react";
import { Avatar } from "@mui/material";
import { Rating, Box, Typography, Grid } from "@mui/material";

const ProductReviewCard = ({ item }) => {
  const [value, setValue] = React.useState(4.5);
  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          
          
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">
               
                Ram
              </p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
            <div>


              
              <Rating
                value={4.5}

                name="half-rating"
                defaultValue={2.5}
                readOnly
                precision={0.5}

              />
            </div>
            <p>
              
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, nulla suscipit. Aperiam necessitatibus reiciendis tempore, nihil soluta id vel facilis autem alias? Nulla nobis voluptatibus, ipsa quasi omnis laudantium quod.
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;