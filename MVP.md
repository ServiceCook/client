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
        User.model.js ✅
        Service.model.js ✅
        Reservation.model.js ✅
    
    Route:
        auth.routes.js:
            - Post/ Signup ✅
            - Post/ Login ✅
            - Get/ Verify ✅
        index.routes.js
            - get /
            
        service.routes.js
            - Post/ Service ✅
            - Get/ Service ✅
            - Get/ Service/:id ✅
            - Put/ Service/:id ✅
            - Delete/ Service/:id ✅
        Reservation.routes.js
            - Get/ Service/:id/reservation ✅
            - Post/ Service/:id/reservation ✅
        Profil.routes.js:
            - Get/ Profil/ ✅
    
    Middleware:
            - JWT.Middlewware
            - isLogin
            - isLogout
            - isOwner


CLIENT :
    SRC:
        Components:
            ServiceCard.js ✅
            ReservationCard.js ✅
            AddService✅
            AddReservation   ✅
            Navbar ✅
            isPrivate ✅
            isOwner ✅
        Context:
            auth.context.js ✅
        Pages:
            HomePage ✅
            LoginPage ✅
            SignupPage ✅
            ServiceList ✅
            ServiceDetails ✅
            Reservation ✅
            CreationService ✅
            EditService ✅
            Profil
            Review
            Edit Review
            delete Review



Add some rules :

If we are the creator of the Service, you can't reserve your own Service

If you are not inside the same town, you cannot make the reservation





Edit/Delete work want connected to -> Profile page and creator✅

Create service -> return Services pages ✅

Order information get inside List of Order -> In profil✅

List of service create by the user -> Inside profile  Page ✅

Add button inside profil for all profil page✅

Add Cloudinary ✅

Add review page (Commentary with rating) 
with Socket.io



User --> CR
Service --> CRUD
Reservation  --> CR


[ ] field "amountOfPeople"
--> delete from "Service.model"✅

[ ] field  "totalPrice"
--> delete from "Service.model"✅

[ ] delete "date" from "Service.model"
    - v1. chefs can be booked multiple times on the same dates✅

[ ] delete "service" from "User.model"

-----



Bonus:
- responsive
- only owner UD ✅
- images ✅
- Filter By Place / Price / Available / Specialitie
- Review -- instead of a separate model, it can be embedded document in Service.✅
- service availability (not simple) (ex. a service can not be booked if there's a reservation on the same day)







For the WEEK-END :
Finish Review render✅

Test with cloudinary ✅

Looking for Filter ✅

Add price to Service List ✅

Add all information inside Details List ✅

Find idea for the HomePage✅

Reservation =   Add Delete Button / Complete Button / (When you click on the ID you can see the Information of de reservation) ✅

Secure the Road - If you are the creator of your the service, you can't reserve it✅





Ok i just create a little List for tomorrow



Check : 
- Delete/edit function for Review / Service / Reservation ✅

- All the road without login and check the security to send no connected people to login ✅

- try security for Owner service/ review and reservation ✅

- Check if contact Us work ✅

-( Available lock the service and can't see details if we pass in Unavailable )


Need to do:

- Design of Details page ✅

- Add same Background color for all pages ✅

- (Burger Menu)

- Navigate with details page when we Delete or Edit to the same details page ✅

- (Transition Page)

- Add address to the reservation List ✅

- ((Filter decroissant for the list of project))

- Mobile design = 🍾
 