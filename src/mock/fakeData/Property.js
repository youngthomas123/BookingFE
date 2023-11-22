

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
];

const picture =[
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1503594384566-461fe158e797?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1677735108001-cd9b99efd5ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1560026301-88340cf16be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1592595896616-c37162298647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1623298317883-6b70254edf31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1597084440749-0235e60882d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1633683914992-ded93eb8b18a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1682093015381-77a5b2183023?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1589129140837-67287c22521b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1567428485548-c499e4931c10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1680100256127-e73d3f1f3376?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGhvdXNlfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661963209358-0f4d5f509d10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1598714805247-5dd440d87124?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1522050212171-61b01dd24579?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1590354893781-90ed27ce7ce9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1626222628055-fb92dd194160?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1609757754057-8a8e17eb73b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGhvdXNlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1611602132416-da2045990f76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1617375069407-77ada5579d6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxob3VzZXxlbnwwfHwwfHx8MA%3D%3D",

];



const properties = [
    {
        propertyId: 1,
        type: "apartment",
        description: "Spacious apartment with a view",
        name: "City View Apartment",
        priceForNight: 150,
        landlordId: 14,
        photos:[
            picture[0],
            picture[1],
            picture[2],
            picture[3],
            //extra
            
          
          
           

          



        ],
        location : address[0]
    },
    {
        propertyId: 2,
        type: "villa",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        name: "Sunset Villa",
        priceForNight: 300,
        landlordId: 15,
        photos:[
            picture[4],
            picture[5],
            picture[6],
            picture[7],



        ],
        location :address[1]
    },
    {
        propertyId: 3,
        type: "cottage",
        description: "Cozy cottage near the woods",
        name: "Woodland Retreat",
        priceForNight: 90,
        landlordId: 16,
        photos:[
            picture[8],
            picture[9],
            picture[10],
            picture[11],



        ],
        location :address[2]
    },
    {
        propertyId: 4,
        type: "penthouse",
        description: "Luxury penthouse with skyline view",
        name: "Skyline Heights",
        priceForNight: 500,
        landlordId: 17,
        photos:[
            picture[12],
            picture[13],
            picture[14],
            picture[15],



        ],
        location :address[3]
    },
    {
        propertyId: 5,
        type: "cabin",
        description: "Rustic cabin in the mountains",
        name: "Mountain Hideaway",
        priceForNight: 120,
        landlordId: 18,
        photos:[
            picture[16],
            picture[17],
            picture[18],
            picture[19],



        ],
        location :address[4]
    },
    {
        propertyId: 6,
        type: "townhouse",
        description: "Modern townhouse in the city center",
        name: "Urban Nest",
        priceForNight: 180,
        landlordId: 19,
        photos:[
            picture[20],
            picture[21],
            picture[22],
            picture[23],



        ],
        location :address[5]
    },
    {
        propertyId: 7,
        type: "chalet",
        description: "Traditional alpine chalet",
        name: "Alpine Haven",
        priceForNight: 250,
        landlordId: 20,
        photos:[
            picture[24],
            picture[25],
            picture[26],
            picture[27],



        ],
        location :address[6]
    },
    {
        propertyId: 8,
        type: "beach house",
        description: "Relaxing beachfront property",
        name: "Sandy Shores Retreat",
        priceForNight: 220,
        landlordId: 21,
        photos:[
            picture[28],
            picture[29],
            picture[30],
            picture[31],



        ],
        location :address[7]
    },
    {
        propertyId: 9,
        type: "apartment",
        description: "Modern studio apartment",
        name: "Downtown Loft",
        priceForNight: 100,
        landlordId: 22,
        photos:[
            picture[32],
            picture[33],
            picture[34],
            picture[35],



        ],
        location :address[8]
    },
    {
        propertyId: 10,
        type: "cottage",
        description: "Quaint cottage by the lake",
        name: "Lakeside Serenity",
        priceForNight: 80,
        landlordId: 23,
        photos:[
            picture[36],
            picture[37],
            picture[38],
            picture[39],



        ],
        location :address[9]
    },
    {
        propertyId: 11,
        type: "farmhouse",
        description: "Charming farmhouse with a garden",
        name: "Green Acres Farmhouse",
        priceForNight: 150,
        landlordId: 24,
        photos:[
            picture[40],
            picture[41],
            picture[42],
            picture[43],



        ],
        location :address[10]
    },
    {
        propertyId: 12,
        type: "bungalow",
        description: "Secluded bungalow in the forest",
        name: "Forest Haven",
        priceForNight: 200,
        landlordId: 25,
        photos:[
            picture[44],
            picture[45],
            picture[46],
            picture[47],



        ],
        location :address[11]
    },
    {
        propertyId: 13,
        type: "apartment",
        description: "Riverside apartment with a view",
        name: "River Vista",
        priceForNight: 130,
        landlordId: 26,
        photos:[
            picture[48],
            picture[49],
            picture[50],
            picture[51],



        ],
        location : address[12]
    }
          
    
    
];






export { properties, address };

