const express = require('express');
const router = express.Router();
/* GET home page */
const homelist = (req, res) => {
    // Your existing data and logic

    res.render('services-list', {
        title: 'safety car zone',
        pageHeader: {
            title: 'Car Services',
            strapline: 'Safety Car Zone'
        },
        servicesList: [
            {
                title: 'Car Wash',
                description: 'make it shine like new',
                imageUrl: 'https://static.langimg.com/photo/imgsize-103878,msid-96686021/navbharat-times.jpg'
            },
            {
                title: 'Car Repair',
                description: 'Got car troubles? We have got you covered.',
                imageUrl:'https://img.freepik.com/free-photo/muscular-car-service-worker-repairing-vehicle_146671-19605.jpg?w=2000'
            },
            {
                title: 'Denting and Painting',
                description: 'Restore your cars appearance.We will fix dents and scratches',
                imageUrl: 'https://okcarhub.com/storage/2023/04/car-denting-and-painting-01.webp'
            },
            {
                title: 'AC service and repair',
                imageUrl:'https://5.imimg.com/data5/SELLER/Default/2023/8/331316667/FI/DE/WZ/23613888/hyundai-i10-heat-radiator-500x500.jpg'
            },
            {
                title: 'Batteries',
                imageUrl:'https://www.carfitexperts.com/wp-content/uploads/2021/05/1704377137-.jpg'
            },
            {
                title: 'windshield & lights',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCBhacPTVq5UuV8N7bt0SmODIFOvqPFd8LgNIuuzF3qpZ8lC0yshNvVTHljqP7B1KCDM&usqp=CAU'
            },
            {
                title: 'clucth and body parts',
                imageUrl:'https://carorbis.com/wp-content/uploads/2022/02/Role-of-the-clutch-in-your-vehicle.png'
            },
            {
                title: 'suspension and fitments',
                imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6FVMLEjCKYDsV4L5JTju_Y8Mbql29NbFVT2MS65YqeVthSQgBzGRQsogA_e8wtRhTAzA&usqp=CAU'
            },
            {
                title: 'Insurances',
                imageUrl:'https://img.freepik.com/premium-vector/red-car-with-insurance-policy-clipboard-contract-guarantee-repairs-event-road_502272-1243.jpg'
            },
            // You can continue adding more service objects as needed
        ]
    });
};


// Route for the About page
router.get('/about', (req, res) => {
    // Define the pageHeader object
    const pageHeader = {
      title: 'About Us',
      strapline: 'Your trusted partner for car services'
    };
  
    // Render the About page view and pass the pageHeader object
    res.render('about', {
      title: 'About Us',
      pageHeader: pageHeader
      // You can pass any other data needed for the About page here
    });
  });
  
  
  // Export the router
module.exports = router;
const bookAppointment = (req, res) => {
    // Extract and process the form data (e.g., store in a database)
    const { name, email, service, date, time } = req.body;

    // You can perform validation and database operations here
    // For simplicity, let's assume you store the data in an array
    const appointment = {
        name,
        email,
        service,
        date,
        time,
    };

    // Redirect or render a confirmation page
    res.render('appointment-confirmation', {
        title: 'Appointment Confirmation',
        pageHeader: {
            title: 'Appointment Confirmation',
            strapline: 'Your appointment has been scheduled',
        },
        appointment, // Pass the appointment data to the confirmation page
    });
};

module.exports = {
    bookAppointment,
};



module.exports = {
    homelist,
};