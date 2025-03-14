/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      sm: '300px',
      md: '768px',
      lg: '900px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.07em',
      widest: '.1em',
      widest: '.25rem',
    },
    extend: {
 




      animation: {
        wiggle: "wiggle 10s linear infinite",
        wiggli: "wiggle 20s linear infinite",
        wiggle1: "wiggle1 5s ease-in-out infinite",
        wiggle2: "wiggle1 8s ease-in-out infinite",
        random1: "random1 30s ease-in-out infinite",
        random2: "random2 30s ease-in-out infinite",
        random3: "random3 30s ease-in-out infinite",
        random4: "random4 30s ease-in infinite",
        ani: "ani 10s ease-in-out infinite",
        text: "text 2s linear forwards",
        khalt: "khalt 15s ease-in-out infinite",
        wiggon: "wiggon 15s linear infinite",
        wiggin: "wiggin 5s linear infinite",
        spinon: "spinon 2s linear infinite",
        spinin: "spinin 2s linear infinite",
        opac: "opac 3s ease-in-out forwards",
        opac1: "opac1 3s ease-in-out infinite",
        blob1: "blob1 2s ease-in-out forwards",
        blob2: "blob2 2s ease-in-out forwards",
        blob3: "blob3 2s ease-in-out forwards",
        blob4: "blob4 2s ease-in-out forwards",
        kido: "kido 2s ease-in-out forwards",
        floatone: "floatone 1s ease-in-out forwards",
        floattwo: "floattwo 2s ease-in-out forwards",
      },
  
      keyframes: {
        wiggle: {
          "100%":{bottom: "130%", transform: "rotate(360deg)",},
        },

        wiggli: {
          "100%":{bottom: "130%", transform: "rotate(360deg)",},
        },

        wiggle1: {
          
          "0%": {
            transform: "scale(0)",
          },

          "25%": {
            transform: "scale(-1.3)",
          },

          "50%":{
            transform: "translateY(-120px)",
          },

          "75%":{
            transform: "scale(1.3)",
          },

          "100%":{
            transform: "translateY(120px)",opacity: "0"
          },
          
        },


        ani: {
          
          "0%": {
            left: "0%", transform: "rotate(0deg)",
          },

          "25%": {
            left: "87%", transform: "rotate(180deg)",
          },

          "50%":{
            left: "0%", transform: "rotate(-360deg)",
          },

          "75%":{
            left: "87%", transform: "rotate(360deg)",
          },

          "100%":{
            left: "0%", transform: "rotate(-360deg)",
          },
          
        },

        wiggle2: {
          
          "0%": {
            transform: "scale(0)",
          },

          "25%": {
            transform: "scale(-1.3)",
          },

          "50%":{
            transform: "translateY(-120px)",
          },

          "75%":{
            transform: "scale(1.3)",
          },

          "100%":{
            transform: "translateY(120px)",opacity: "0"
          },
          
        },

        kido: {
          "100%":{
            transform: "rotatex(-360deg)",
        },

      },

      floatone: {
        "50%":{
          transform: "scalex(0)",
        },
        "100%":{
          transform: "scalex(1)",
      },

    },

    floattwo: {
      "0%":{
        height: "0%",
      },

      "100%":{
        height: "100%",
      },
      

  },


        random1: {
          "25%":{top: "89%",},
          "50%":{top: "0%",},
          "75%":{top: "90%",},
          "100%":{top: "0%",},
        },

        random2: {
          "25%":{left: "95%",},
          "50%":{left: "0%",},
          "75%":{left: "95%",},
          "100%":{left: "0%",},
        },

        random3: {
          "25%":{right: "95%",},
          "50%":{right: "0%",},
          "75%":{right: "95%",},
          "100%":{right: "0%",},
        },

        random4: {
          "25%":{bottom: "89%",},
          "50%":{bottom: "0%",},
          "75%":{bottom: "90%",},
          "100%":{bottom: "0%",},
        },


        spinon: {
          "25%":{transform: "rotate(-18deg)",},
          "50%":{transform: "rotate(180deg)",},
          "75%":{transform: "rotate(-180deg)",},
          "10%":{transform: "rotate(-180deg)",},
        },

        spinin: {
          "25%":{transform: "rotate(180deg)",},
          "50%":{transform: "rotate(-180deg)",},
          "75%":{transform: "rotate(180deg)",},
          "10%":{transform: "rotate(180deg)",},
        },


        
        
        opac: {
          "100%":{
            opacity: 1,
        },
        
        
        },

        opac1: {
          "100%":{
            opacity: 1,
        },
        
        
        },

        khalt: {
          "100%":{
            top: "110%",
        },
        
        
        },

        

        text: {
          "100%":{
            width: "100%",
        },
        
        
        },


        blob1: {
          "100%":{
            width: "90%",
        },
        
        
        },

        blob2: {
          "100%":{
            width: "88%",
        },
        
        
        },


        blob3: {
          "100%":{
            width: "85%",
        },
        
        
        },


        blob4: {
          "100%":{
            width: "17%",
        },
        
        
        },


        wiggin: {
          "50%":{
            background: "blue",
        },

        "100%":{
            background: "white",
        },
        
        },

        wiggon: {
          "100%":{bottom: "140%", transform: "rotate(-360deg)",},
        },

        

      },


      

      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }


      
      
    }
    


  },

    

    extend: {

      
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
        '100px': '500rem'
      },
      padding: {
        '5px': '5px',
      },
      margin: {
        '5px': '5px',
        '10px': '10px',
      },
      space: {
        '5px': '5px',
      },
      
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
    },

    transitionDuration: {
      '2000': '2000ms',
    },

    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
    transitionDelay: {
      '2000': '2000ms',
    },
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },
   
    
    scale: {
      '175': '1.75',
    },
    rotate: {
      '17': '17deg',
    },
    spacing: {
      '4.25': '17rem',
    },
    translate: {
      '4.25': '17rem',
    },
    skew: {
      '17': '17deg',
    }
  },
  plugins: [],
}

