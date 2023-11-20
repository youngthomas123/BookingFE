

const address = 
[
    "911 Hillside Dr, Kodiak, Alaska 99615, USA",
    "919 Stimple Ct, Fairbanks, Alaska 99712, USA",
    "2921 Ashley Ave, Montgomery, Alabama 36109, USA",
    "1005 Woodlands Cv, Helena, Alabama 35080, USA",
    "4315 Golf Club Dr, Auburn, Alabama 36830, USA",
    "2600 Melody Ln, Sedona, Arizona 86336, USA",
    "2050 W Dunlap Ave #D17, Phoenix, Arizona 85021, USA",
    "4117 Bridgeport Rd, Santa Maria, California 93455, USA",
    "4118 Constellation Rd, Lompoc, California 93436, USA",
    "477 Reposo St, San Jacinto, California 92582, USA",
    "2856 Lotus Pl, Loveland, Colorado 80537, USA",
    "800 Bayshore Rd, Nokomis, Florida 34275, USA",
    "800 Independence Dr, Homestead, Florida 33034, USA",
    "17506 Golf Club Dr, Crosby, Texas 77532, USA",
]


const properties = [
    {
        propertyId: 1,
        type: "apartment",
        description: "Spacious apartment with a view",
        name: "City View Apartment",
        priceForNight: 150,
        landlordId: 14,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location : address[0]
    },
    {
        propertyId: 2,
        type: "villa",
        description: "Luxurious villa with pool",
        name: "Sunset Villa",
        priceForNight: 300,
        landlordId: 15,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[1]
    },
    {
        propertyId: 3,
        type: "cottage",
        description: "Cozy cottage near the woods",
        name: "Woodland Retreat",
        priceForNight: 90,
        landlordId: 16,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[2]
    },
    {
        propertyId: 4,
        type: "penthouse",
        description: "Luxury penthouse with skyline view",
        name: "Skyline Heights",
        priceForNight: 500,
        landlordId: 17,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[3]
    },
    {
        propertyId: 5,
        type: "cabin",
        description: "Rustic cabin in the mountains",
        name: "Mountain Hideaway",
        priceForNight: 120,
        landlordId: 18,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[4]
    },
    {
        propertyId: 6,
        type: "townhouse",
        description: "Modern townhouse in the city center",
        name: "Urban Nest",
        priceForNight: 180,
        landlordId: 19,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[5]
    },
    {
        propertyId: 7,
        type: "chalet",
        description: "Traditional alpine chalet",
        name: "Alpine Haven",
        priceForNight: 250,
        landlordId: 20,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[6]
    },
    {
        propertyId: 8,
        type: "beach house",
        description: "Relaxing beachfront property",
        name: "Sandy Shores Retreat",
        priceForNight: 220,
        landlordId: 21,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[7]
    },
    {
        propertyId: 9,
        type: "apartment",
        description: "Modern studio apartment",
        name: "Downtown Loft",
        priceForNight: 100,
        landlordId: 22,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[8]
    },
    {
        propertyId: 10,
        type: "cottage",
        description: "Quaint cottage by the lake",
        name: "Lakeside Serenity",
        priceForNight: 80,
        landlordId: 23,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[9]
    },
    {
        propertyId: 11,
        type: "farmhouse",
        description: "Charming farmhouse with a garden",
        name: "Green Acres Farmhouse",
        priceForNight: 150,
        landlordId: 24,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[10]
    },
    {
        propertyId: 12,
        type: "bungalow",
        description: "Secluded bungalow in the forest",
        name: "Forest Haven",
        priceForNight: 200,
        landlordId: 25,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location :address[11]
    },
    {
        propertyId: 13,
        type: "apartment",
        description: "Riverside apartment with a view",
        name: "River Vista",
        priceForNight: 130,
        landlordId: 26,
        photos :{
            img1 : "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
            img2 : "https://www.livehome3d.com/assets/img/social/how-to-design-a-house.jpg",
            img3 : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            img4 : "https://i.pinimg.com/550x/92/88/4f/92884fe1c0975ea4a74ac4b45add96e7.jpg",

        },
        location : address[12]
    }
          
    
    
];






export { properties, address };

