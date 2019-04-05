
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
            //this question's choice affects NZ0102,NZ0103,NZ0104 
            relatedQuestions:{        
              NZ0102:1,       //if player choice is a value of 1, we ask NZ0102,
              NZ0103:1,       //" same as above"
              NZ0104:1        
            },
            skipQuestion:false
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
            relatedQuestions:{
              NZ0103:1,
              NZ0104:1
            },
            skipQuestion:false
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
            askAgain:true,
            skipQuestion:false
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
            ],
            skipQuestion:false
          },
        ],    //END OF THE GATHERING Q'S
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
            ],
            relatedQuestions:{
              NZ0202:1,
            },
            skipQuestion:false
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
            ] //END OF THE MIDNIGHT MASKS Q'S
          }
        ],
      },
      "The Devourer Below":{
        title:"The Devourer Below",
        user_resolution:null,
        user_answers:[],
        total_questions:5,
        questions:[
          {
            qString:"Agenda reached full doom?",
            type:"radio",
            id:'NZ0301',
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
            relatedQuestions:{
              NZ0302:1,
              NZ0304:1
            }
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
            qString:"What was the fate of Arkham?",
            type:"radio",
            id:'NZ0304',
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
          },
          {
            qString:"Which encounter set did you play with?",
            type:"radio",
            id:'NZ0305',
            choices:[
              {
                description:"Agents of Yog-Sothoth",
                value:0
              },
              {
                description:"Agents of Shub-Niggurath",
                value:1
              },
              {
                description:"Agents of Cthulhu",
                value:2
              },
              {
                description:"Agents of Hastur",
                value:3
              }
            ]
          }
        ],
      },
      /*
      *
      * DUNWICH
      * 
      */
     //TO DO: ADD Q'S BEFORE ANY SCENARIO
     //1. DID THE PLAYER START WITH EXTRACURRICULAR ACTIVITIES OR THE HOUSE ALWAYS WINS FIRST?
     //2.
     "Dunwich Prologue":{                 //ask this question if dunwich is CHOSEN
      title:"Dunwich Prologue",
      user_resolution:null,
      user_answers:[],
      total_questions:1,
      questions:[
        {
          qString:"Did you...",              
          type:"radio",
          id:'DW0101',
          choices:[
            {
              description:"Find Dr. Warren Rice",
              value:0
            },
            {
              description:"Find Dr. Morgan",
              value:1
            }
          ]
        },
      ],
    },
      "Extracurricular Activities":{
        title:"Extracurricular Activities",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        questions:[
          {
            qString:"Agenda reached full doom?",              //unconscious for several hours, Prof Warren Rice kidnapped, students were rescued
            type:"radio",
            id:'DW0101',
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
            qString:"All investigators resigned or defeated",   //RICE WAS KIDNAPPED, 
            type:"radio",                                       //FAILED TO SAVE THE STUDENTS
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
            qString:"Did Jazz Mulligan survive?",   //RICE WAS KIDNAPPED, 
            type:"radio",                                       //FAILED TO SAVE THE STUDENTS
            id:'DW0103',
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
            qString:"Did you....",
            type:"radio",
            id:'DW0104',
            choices:[
              {
                description:"Find and rescued Professor Rice",      //students NOT saved
                value:0
              },
              {
                description:"Rescued the students",                 //students saved, Prof Rice kidnapped
                value:1
              },
              {
                description:"Defeated the Experiment  ",            //students NOT saved, Prof Rice kidnapped
                value:2
              }
            ]
          }
        ],
      },
      "The House Always Wins":{
        title:"The House Always Wins",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        questions:[
          {
            qString:"Agenda reached full doom?",              //investigators unconscious for several hours, O'Bannion has a bone to pick...., Dr. Morgan Kidnapped
            type:"radio",
            id:'DW0201',
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
            qString:"All investigators resigned or defeated",   //Morgan WAS KIDNAPPED, 
            type:"radio",                                       //FAILED TO SAVE THE STUDENTS
            id:'DW0202',
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
            qString:"Did you \"Cheat\" ? ",    
            type:"radio",                                       
            id:'DW0203',
            choices:[
              {
                description:"YES",
                value:0
              },
              {
                description:"NO",
                value:1
              }
            ]
          },
          {
            qString:"Did you.... ",
            type:"radio",
            id:'DW0204',
            choices:[
              {
                description:"Find and rescued Professor Morgan",      //O'BANNION has a bone to pick....
                value:0
              },
              {
                description:"Rescued Peter Clover",                 //show this option only if HAW is first
                value:1
              },
              {
                description:"Defeated the Experiment  ",            //students NOT saved, Prof Rice kidnapped
                value:2
              }
            ]
          }
        ],
      }
      ,
      "The Miskatonic Museum":{
        title:"The Miskatonic Museum",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        questions:[
          {
            qString:"Agenda reached full doom?",              //failed to retrieve necronomicon
            type:"radio",
            id:'DW0301',
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
            qString:"All investigators resigned or defeated",   //failed to retrieve necronomicon
            type:"radio",                                       
            id:'DW0302',
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
            qString:"How did you get into the Miskatonic Museum? ",    
            type:"radio",                                       
            id:'DW0303',
            choices:[
              {
                description:"Convince security guard \"Adam Lynch\" to let you in",   
                value:0
              },
              {
                description:"Broke down the front door",                              //this leads to Adam Lynch dying, Harold Walstead is gained
                value:1
              }
            ]
          },
          {
            qString:"Did you.... ",
            type:"radio",
            id:'DW0304',
            choices:[
              {
                description:"Find and KEEP the necronomicon",      //R2
                value:0
              },
              {
                description:"Destroyed the necronomicon",                 //show this option only if HAW is first
                value:1
              }
            ]
          },
          {
            qString:"Did Adam Lynch die? ",             //if DW0303 is 0, we ask this question
            type:"radio",
            id:'DW0305',
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
            qString:"Did Harold Walsted die? ",             //if DW0303 is 1, we ask this question
            type:"radio",
            id:'DW0306',
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
          }
        ],
      }
  }