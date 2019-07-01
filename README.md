# Booking Module

Abode.ly's Booking Microservice is the frontend component that allows users to browse the availability of and book an accommodation. [Click here to interact with a deployed version of this component](http://13.57.229.84:3003/bookings/1).

The component was built using React.js, Redux, Styled Components, Express/Node, and MySQL (using mock data for demo purposes). The microservice makes calls to the `/bookings/:bookingid/reserve` API on initial render and as the user browses the calendar.

There are a breadth of event handlers that allow the user to progress seamlessly through their booking experience, dynamically updating pricing and textual information as stay details are modified.

The booking component is optimized for page load performance, with an overall load time of 0.5s and a Google PageSpeed Score of 99 achieved through:
- Minification and brotli compression of static files to reduce payload sizes and script parse time.
- Splitting the payload of rendering the calendar to provide an initial month upon first load, and subsequent data as the user browses to it.

### Booking Module Microservice main:<br />
<img src="https://dzwonsemrish7.cloudfront.net/items/2X2G0V0M1u2w362M2s1K/Image%202019-06-26%20at%2012.08.47%20PM.png" alt="Booking Module defaults to a single guest and no selected dates" width="437px" height="395px">

### Pricing dynamically updates as users select reservation dates and more guests than the threshold:<br />
<img src="https://dzwonsemrish7.cloudfront.net/items/3Y2T3v2m0p2c3X40261R/BookingModuleDynamicPricing%20(3).gif" alt="Booking Module dynamically updates price if guests exceed the threshold" width="420px" height="680px">

### Accommodation-specific maximum guest logic prevents adding more guests than allowed with dynamically updated labels:<br />
<img src="https://dzwonsemrish7.cloudfront.net/items/321h0k1a342q0H3b3i2m/GuestLogic.gif" alt="Booking Module dynamically updates guest and infant labels without allowing more than the maximum guests" width="437px" height="650px">
  
## Installation

  To install the latest version:
  ```sh
  git clone https://github.com/abode-ly/booking_module
  ```

## Getting started

After navigating to the booking module folder, run the following commands:

### Using Docker:

```sh
docker-compose build
docker-compose up
```

### Without Docker
  
  ```sh
  npm install
  npm run seed
  npm run build
  npm start
  ```
  
  Then, browse to localhost at port 3003 with a path of '/bookings/num', where num is the accommodation id you want to review. Note: the maximum accommodation id that will be served is 100.

  ```sh
  localhost:3003/bookings/1
  ```

## About Abode.ly

[Abode.ly](https://github.com/abode-ly) is a platform for users to rent accommodations. The project started in April 2019 meant to mimic the frontend behavior of other accomodation platforms. Upon completion of the frontend development, the team moved on to other individual projects.
