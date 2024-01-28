# bookmyshow
    >>React
    >>Tailwind
    >>React-Slick (Carousels)
    >>React-Icons
    >>React-Context-API

# Pages:                                                      HOC's(Layouts):
    >>Home.Page.jsx                                           Default.layout.jsx
    >>Movie.Page.jsx                                          Movie.layout.jsx
    >>Play.Page.jsx                                           Default.layout.jsx

# Components:
    > cast                     cast.Component.jsx
    > Entertainment            EntertainmentCard.Component.jsx
    > HeroCarousel             HeroCarousel.Component.jsx
                               Arrows.Component.jsx
    > MovieHero                MovieHero.Component.jsx
                               MovieInfo.Component.jsx
    > Navbar                   MovieNavbar.Component.jsx
                               Navbar.Component.jsx
    > PaymentModel             Payment.Component.jsx
    > PlayFilters              PlayFilters.Component.jsx
    >Poster                    Poster.Component.jsx
    >PosterSlider              PosterSlider.Component.jsx


 #   cmds:
 > create: npx create-reacr-app .
 > run: npm start
 > Tailwind: npm install -D tailwindcss postcss autoprefixer
             npx tailwindcss init
 > React-Slick: npm install react-slick
                npm install slick-carousel
 > Axios: npm i axios
 > HeadlessUI: npm install @headlessui/react
 > React-Icons: npm install react-icons
 > React Router Dom: npm i react-router-dom

 # Resources
    > https://tailwindcss.com/docs/installation
    > https://react-slick.neostack.com/docs/get-started
    > https://www.npmjs.com/package/axios
    > https://axios-http.com/docs/example
    > https://headlessui.com/react/dialog
    > https://react-icons.github.io/react-icons/

    
    theMovieDb APIKey = 8609c61bad2a183b7a288df6d8d39b61

    # Devops
    > Dev-Development
    > Ops-Operation

    Dev                                               Ops
    (Developer)---------------share code-------------->operations(Testing,scaling and Bug Fixing)

    Dev------sharecode------>Testing team-----|
                                              |------code is ok----->operations
                                              |------code is Not ok------>Dev
    Note: It's a time taking process as the complexity of the application increases here
    # Docker & Kubernetes


### Case Scenario: Team of 3 eemployees
            All have diff OS(Windows,Linux,Mac OS)
Person1                               person2                                           person3
Windows OS                            Linux OS                                          Mac OS
(npm i)----->code 10-12----->(npm i) code 25-30---------------------------------------->code 40-50

>>It works on my machine

##### virtualization
    (I could run virtualOS on top of my real time OS)

            Virtual OS:Linux
        
            Base/Local OS :Windows

>>Resources shared with Virtual OS:[RAM,ROM,GPU]   




Linux                           Unix
(4GB,500GB,2GB)                 (4GB,500GB,2GB)
            Base Windows
        8GB RAM, 1TB ROM, 4GB


# Containerization (Docker)

Linux                                             Unix
                        
                     Docker Engine   
                        
                        Base OS
                        8GB,1TB

# Docker (EC2):
    >Image
    >Containers(Servers)


        >Docker Deamon---->Server
        >Docker Client---->Client
        >Cocker Swarm----->Orchestration

#Kubernetes (Orchestra)
        >Nodes
            >Master Node (Orchestra)
            >Child Node---||
                          ||--POD
                          ||--Development->Keeps close eye on POD