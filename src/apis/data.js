const data = [
  {
      id : "1-western-sculpture",
      type: "Western Sculpture",
      region: "Europe",
      catagories: "Arts & Culture",
      imgHeaders: "https://images.unsplash.com/photo-1603966187872-3a0f1432057e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNjdWxwdHVyZXN8ZW58MHx8MHx8fDA%3D",
      imgCover: "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2N1bHB0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
      history: "Western sculpture, three-dimensional artistic forms produced in what is now Europe and later in non-European areas dominated by European culture (such as North America) from the Metal Ages to the present. Like painting, Western sculpture has tended to be humanistic and naturalistic, concentrating upon the human figure and human action studied from nature. Early in the history of the art there developed two general types: statuary, in which figures are shown in the round, and relief, in which figures project from a ground.",
      britannicaLink: "https://www.britannica.com/art/Western-sculpture"
  },

  {
      id : "2-egyptian-sculpture",
      type: "Egyptian Sculpture",
      region: "North Africa",
      catagories: "Arts & Culture",
      imgHeaders: "https://images.unsplash.com/photo-1562679299-266edbefd6d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxFZ3lwdCUyMHNjdWxwdHVyZXN8ZW58MHx8MHx8fDA%3D",
      imgCover: "https://images.unsplash.com/photo-1663790703294-0136c2a69749?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fEVneXB0JTIwc2N1bHB0dXJlc3xlbnwwfHwwfHx8MA%3D%3D",
      history: "Egyptian artists, whose skills are best exemplified in sculpture, regarded themselves essentially as craftspeople. Owing to their discipline and highly developed aesthetic sense, however, the products of their craft deserve to rank as art outstanding by any standards. Much of the surviving sculpture is funerary—i.e., statues for tombs. Most of the remainder was made for placing in temples—votive for private persons and ritual for royal and divine representations. Royal colossi were ritual and also served to proclaim the grandeur and power of the king. By itself, however, a statue could represent no one unless it carried an identification in hieroglyphs.",
      britannicaLink: "https://www.britannica.com/art/Egyptian-art/Sculpture"
  },

  {
      id : "3-igbo-sculpture",
      type: "Igbo Sculpture",
      region: "West Africa",
      catagories: "Arts & Culture",
      imgHeaders: "https://images.unsplash.com/photo-1703883374092-3e0b71b31139?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgCover: "https://images.unsplash.com/photo-1703883272240-c7c5ce9ab2c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      history: "On both sides of the Niger, but mainly to the east, live the Igbo. Traditionally they have lived in small and often isolated settlements scattered through the forest. Only on the northern and western edges of the area, under influence from Igala and Benin, are hereditary rulers found. In Igbo society there is strong social pressure toward individual distinction, and men can move upward through successive grades by demonstrating their achievements and their generosity. One of the traditional representations of this was the ikenga, that part of oneself enabling personal achievement, with cult figures representing the attributes of distinction.",
      britannicaLink: "https://www.britannica.com/art/African-art/Igbo"
  },

  {
      id : "4-indian-sculpture",
      type: "indian Sculpture",
      region: "India",
      catagories: "Arts & Culture",
      imgHeaders: "https://images.unsplash.com/photo-1564497471489-06030928f0aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgCover: "https://images.unsplash.com/photo-1616377009507-c8111f07aced?q=80&w=1581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      history: "Sculpture was the favoured medium of artistic expression on the Indian subcontinent. Indian buildings were profusely adorned with it and indeed are often inseparable from it. The subject matter of Indian sculpture was almost invariably abstracted human forms that were used to instruct people in the truths of the Hindu, Buddhist, or Jain religions.",
      britannicaLink: "https://www.britannica.com/art/Indian-sculpture"
  },

  {
      id : "5-east-asian-sculpture",
      type: "East-Asian Sculpture",
      region: "East-Asian",
      catagories: "Arts & Culture",
      imgHeaders: "https://images.unsplash.com/photo-1528866310106-4459b39622ed?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgCover: "https://images.unsplash.com/photo-1630935743957-b4907f899613?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      history: "From ancient times, China has been the dominant and referential culture in East Asia. Although variously developed Neolithic cultures existed on the Korean Peninsula and on the Japanese archipelago, archaeological evidence in the form of worked stone and blades from the Paleolithic and Neolithic periods suggests an exchange between the early East Asian cultures and the early introduction of Chinese influence.",
      britannicaLink: "https://www.britannica.com/art/East-Asian-arts/The-visual-arts"
  },
  {
      id : "6-ghotic-architecture",
      type: "Gothic architecture",
      region: "Europe",
      catagories: "Arts & Culture",
      imgHeaders: "https://images.prismic.io/hoo-website/05aa9891-5e7a-4fe7-9d01-50fbe91d7c21_gothic-architecture-uk.jpg?auto=compress,format",
      imgCover: "https://i.pinimg.com/564x/5b/d9/7f/5bd97fb350c69be84f54f35829298924.jpg",
      history: "Gothic architecture, architectural style in Europe that lasted from the mid-12th century to the 16th century, particularly a style of masonry building characterized by cavernous spaces with the expanse of walls broken up by overlaid tracery. In the 12th–13th century, feats of engineering permitted increasingly gigantic buildings. The rib vault, flying buttress, and pointed (Gothic) arch were used as solutions to the problem of building a very tall structure while preserving as much natural light as possible. Stained-glass window panels rendered startling sun-dappled interior effects. One of the earliest buildings to combine these elements into a coherent style was the",
      britannicaLink: "https://www.britannica.com/art/Gothic-architecture"
  },
  {
      id : "7-african-architecture",
      type: "African architecture",
      region: "Africa",
      catagories: "Arts & Culture",
      imgHeaders: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/1997_277-16A_Agadez_hotel.jpg/1024px-1997_277-16A_Agadez_hotel.jpg",
      imgCover: "https://images.westend61.de/0001558060pw/grosse-moschee-von-agadez-unesco-welterbestaette-agadez-niger-afrika-RHPLF19771.jpg",
      history: "African architecture, the architecture of Africa, particularly of sub-Saharan Africa. In North Africa, where Islam and Christianity had a significant influence, architecture predominates among the visual arts. Included here are the magnificent mosques built of mud in Djenné and Mopti in Mali, the rock-hewn churches of Ethiopia, and the Islamic monuments of coastal eastern Africa. Discussions of architecture in sub-Saharan Africa focus chiefly on housing in villages, rural mosques, and the mélange of colonial and modern influences that characterize urban areas.",
      britannicaLink: "https://www.britannica.com/art/African-architecture"
  },
]
export default data;