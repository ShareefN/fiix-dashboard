import React from 'react';
import { AppBar, Card, CardContent, Toolbar, Typography, Icon } from '@material-ui/core';

function ContractorDetails(props){
  return(
    <React.Fragment>
    <div className="md:flex max-w-2xl pt-24 pl-24">
      <div className="flex flex-col flex-1 md:pr-32">
        <Card className="w-full mb-16">
          <AppBar position="static" elevation={0}>
            <Toolbar className="pl-16 pr-8">
              <div className="flex items-center w-full">
                <div className="flex items-center">
                  <Typography variant="subtitle1" color="inherit" className="flex-1">
                    Contractor Details
                  </Typography>
                </div>
              </div>
              <div className="flex w-full justify-end pr-24">
              <Icon className="cursor-pointer">edit</Icon>
            </div>
            </Toolbar>
          </AppBar>
          <CardContent className="flex flex-row pb-0">
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Name</Typography>
              <Typography>--</Typography>
            </div>
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Email</Typography>
              <Typography>--</Typography>
            </div>
          </CardContent>
          <CardContent className="flex flex-row pb-0">
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Phone</Typography>
              <Typography>--</Typography>
            </div>
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Location</Typography>
              <Typography>--</Typography>
            </div>
          </CardContent>
          <CardContent className="flex flex-row pb-0">
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Time In</Typography>
              <Typography>--</Typography>
            </div>
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Time Out</Typography>
              <Typography>--</Typography>
            </div>
          </CardContent>
          <CardContent className="flex flex-row pb-0">
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Category</Typography>
              <Typography>--</Typography>
            </div>
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Rating</Typography>
              <Typography>--</Typography>
            </div>
          </CardContent>
          <CardContent className="flex flex-row pb-0">
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Notes</Typography>
              <Typography>--</Typography>
            </div>
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Contractor Since</Typography>
              <Typography>--</Typography>
            </div>
          </CardContent>
          <CardContent className="flex flex-row pb-0">
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Id Image</Typography>
              <Typography>--</Typography>
            </div>
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Non-Criminal Image</Typography>
              <Typography>--</Typography>
            </div>
          </CardContent>
          <CardContent className="flex flex-row pb-0">
            <div className="w-full mb-24">
              <Typography className="font-bold mb-4 text-15">Reviews</Typography>
              <Typography>--</Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </React.Fragment>
  )
}

export default ContractorDetails;