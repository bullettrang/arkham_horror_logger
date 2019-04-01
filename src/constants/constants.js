
export const data ={
      /*
      *
      *
      * NIGHT OF ZEALOT
      * 
      */
      "The Gathering":{
        title:"The Gathering",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        questions:[
          {
            id:'NZ0101',
            qString:"Agenda reached full doom?",
            type:"radio",
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ],
          },
          {
            qString:"All investigators resigned or defeated",
            type:"radio",
            id:'NZ0102',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ],
          },
          {
            qString:"Ghoul priest defeated?",
            type:"radio",
            id:'NZ0103',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ],
            askAgain:true
          },
          {
            qString:"House was burnt down?",
            type:"radio",
            id:'NZ0104',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ]
          },
        ],
      },
      "The Midnight Masks":{
        title:"The Midnight Masks",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        questions:[
          {
            qString:"Agenda reached full doom?",
            type:"radio",
            id:'NZ0201',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ]
          },
          {
            qString:"All investigators resigned or defeated",
            type:"radio",
            id:'NZ0202',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ]
          },
          {
            qString:"Ghoul priest defeated in this scenario?",
            type:"radio",
            id:'NZ0203',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ],
            askAgain:true
          },
          {
            qString:"Cultists Interrogated: ",
            type:"checkbox",
            id:'NZ0204',
            choices:[
              {
                description:"Wolf Man Drew",
                value:0,
                key:'checkbox0'
              },
              {
                description:"Herman Collins",
                value:1,
                key:'checkbox1'
              },
              {
                description:"Peter Warren",
                value:2,
                key:'checkbox2'
              },
              {
                description:"Victoria Devereux",
                value:3,
                key:'checkbox3'
              },
              {
                description:"Ruth Turner",
                value:4,
                key:'checkbox4'
              },
              {
                description:"Masked Hunter",
                value:5,
                key:'checkbox5'
              }
            ]
          }
        ],
      },
      "The Devourer Below":{
        title:"The Devourer Below",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        id:'NZ0301',
        questions:[
          {
            qString:"Agenda reached full doom?",
            type:"radio",
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ]
          },
          {
            qString:"All investigators resigned or defeated",
            type:"radio",
            id:'NZ0302',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ]
          },
          {
            qString:"Ghoul priest defeated in this scenario?",
            type:"radio",
            id:'NZ0203',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ],
            askAgain:true
          },
          {
            qString:"What was the fate of Arkham?",
            type:"radio",
            id:'NZ0303',
            choices:[
              {
                description:"Stopped the Ritual",
                value:0
              },
              {
                description:"Repelled Umordhoth",
                value:1
              },
              {
                description:"Sacrificed Lita Chandler",
                value:2
              }
            ]
          }
        ],
      },
      /*
      *
      *
      * DUNWICH
      * 
      */
      "Extracurricular Activities":{
        title:"Extracurricular Activities",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        id:'DW0101',
        questions:[
          {
            qString:"Agenda reached full doom?",
            type:"radio",
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ]
          },
          {
            qString:"All investigators resigned or defeated",
            type:"radio",
            id:'DW0102',
            choices:[
              {
                description:"TRUE",
                value:0
              },
              {
                description:"FALSE",
                value:1
              }
            ]
          },
          {
            qString:"What was the fate of Arkham?",
            type:"radio",
            id:'DW0103',
            choices:[
              {
                description:"Stopped the Ritual",
                value:0
              },
              {
                description:"Repelled Umordhoth",
                value:1
              },
              {
                description:"Sacrificed Lita Chandler",
                value:2
              }
            ]
          }
        ],
      }
  }