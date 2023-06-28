 MVP:
UserRoute:
    Signup
    Login
    Logout

ServiceRoute:
        ServiceList:
            Map every service :
                Pictures
                User
                Price
                Prestation
                Button details
                Button Edit / Delete only if you're creator  
        
        
        Service Details :
                User
                Date
                Description
                AmountOfPeople
                Location
                Image
                priceByPerson
                Price = Link to Paiement(Bonus)

                
ProfilRoute :
    User Information :
        Organisation
        FUllName
        Occupation
        location
        img
        e-mail

        all ticket own 
    CreateConcert:





Model:
    User:
        userName:
            Required
            text

        E-mail:
            Required
            text

        Password:
            Required
            text

        address:
            Required
            text

    Service:
        Pictures:
            bydefault : ...
            img
        User:
            FullName        John
            E-mail
        Prestation:
            Required        Select : French Food / Italian / Asian 
            text
        place:
            Required        Milano
            text
        description:
            required        I do 10 Years Italian and Thailand Food and work in DUblin
            text

        AmountOfPeople:     Input Select
            Required        
            Number      

        priceByPerson:      160$
            required
            number



        AvailableByDate:
            Date - Bonus
            Boolean
        Maps: Bonus
            img
        

    Reservation:

        userBuy:
            fullName
            Address
            e-mail
            Place
        
        Date

        Description:
            Required
            text

        Result:
            Price
            Order



       

                    -> (FilterAvailable / FilterByPrestation / FilterbyLocation - Bonus)
     -> ServiceList -> ServiceDetails -> ReservationForm
Home -> Account -> Profil : Image / fullName / Address / e-Mail - (MyOrder bonus)
     -> Login
     -> Signup
     -> Logout

If you are not connected
can see = Home - List - Details but not the Button - Login - signup

If you are connected 
can see = Home - List - details with Reservation - Reservation form - Logout - (profil with him Prestation created and him reservation with prestation)



SERVER
    Model:
        User.model.js
        Service.model.js
        Reservation.model.js
    
    Route:
        auth.routes.js:
            - Post/ Signup
            - Post/ Login
            - Get/ Verify
        index.routes.js
            - get /
            
        service.routes.js
            - Post/ Service
            - Get/ Service
            - Get/ Service/:id
            - Put/ Service/:id
            - Delete/ Service/:id
        Reservation.routes.js
            - Get/ Service/:id/reservation
            - Post/ Service/:id/reservation
        Profil.routes.js:
            - Get/ Profil/
    
    Middleware:
            - JWT.Middlewware
            - isLogin
            - isLogout
            - isOwner




CLIENT :
    SRC:
        Components:
            ServiceCard.js
            ReservationCard.js
            AddService
            AddReservation  
            Navbar
            isPrivate
            isOwner
        Context:
            auth.context.js
        Pages:
            HomePage
            LoginPage
            SignupPage
            ServiceList
            ServiceDetails
            Reservation
            CreationService
            EditService
            Profil


    