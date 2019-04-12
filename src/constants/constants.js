
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
                //increment NZ0103a
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
            },
            skipQuestion:false
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
            ],
            skipQuestion:false
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
            askAgain:true,
            skipQuestion:false
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
            ],
            skipQuestion:false
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
            ],
            skipQuestion:false
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
          qString:"Did you try to ...",              
          type:"radio",
          id:'DW0001',
          choices:[
            {
              description:"Find Dr. Warren Rice",
              value:0
            },
            {
              description:"Find Dr. Morgan",
              value:1
            }
          ],
          relatedQuestions:{
            DW0104:0,
            DW0204:1,              //if investigators tried to find Dr. Morgan first, we ask DW0204 ' Did investigators rescued Dr. Morgan
            DW0205:0              //if investigators tried to find Dr. Rice first, we ask 'DW0205', Did investigators rescue Peter Clover
          },
          skipQuestion:false
        },
      ],
    },
      "Extracurricular Activities":{
        title:"Extracurricular Activities",
        user_resolution:null,
        user_answers:[],
        total_questions:7,
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
            ],
            relatedQuestions:{
              DW0102:1
            },
            skipQuestion:false
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
            ],
            relatedQuestions:{
              DW0104:1,
              DW0105:1,
              DW0106:1,
              DW0107:1,
            },
            skipQuestion:false
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
            ],
            skipQuestion:false
          },
          {
            qString:"Did you rescue Dr. Rice?",
            type:"radio",
            id:'DW0104',
            choices:[
              {
                description:"Warren Rice was kidnapped",      //students NOT saved
                value:0
              },
              {
                description:"Saved Warren Rice",                 //students saved, Prof Rice kidnapped
                value:1
              }
            ],
            relatedQuestions:{
              DW0105:1
            }
          },
          {
            qString:"Did try to save the students OR fight the Experiment?",
            type:"radio",
            id:'DW0105',
            choices:[
              {
                description:"Tried to save the students?",      //students NOT saved
                value:0
              },
              {
                description:"Tried to fight the experiment",                 //students saved, Prof Rice kidnapped
                value:1
              }
            ],
            relatedQuestions:{
              DW0106:0,
              DW0107:1
            },
            skipQuestion:false
          },
          {
            qString:"Did the investigators manage to save the students",
            type:"radio",
            id:'DW0106',
            choices:[
              {
                description:"Succeeded in saving the students",      //students NOT saved
                value:0
              },
              {
                description:"Failed to save the students",                 //students saved, Prof Rice kidnapped
                value:1
              }
            ],
            skipQuestion:false
          },
          {
            qString:"Did the investigators defeat the experiment?",
            type:"radio",
            id:'DW0107',
            choices:[
              {
                description:"Succeeded in defeating the experiment",      //students NOT saved
                value:0
              },
              {
                description:"Failed to defeat the experiment",                 //students saved, Prof Rice kidnapped
                value:1
              }
            ],
            skipQuestion:false
          },
          {
            qString:"Did the investigators defeat the experiment?",       
            type:"radio",
            id:'DW0108',
            choices:[
              {
                description:"Succeeded in defeating the experiment",      //students NOT saved
                value:0
              },
              {
                description:"Failed to defeat the experiment",                 //students saved, Prof Rice kidnapped
                value:1
              }
            ],
            skipQuestion:false
          },
          {
            qString:"Did the investigators defeat Wizard of Yog-Sothoth?",              //if defeated, gain 1 exp
            type:"radio",
            id:'DW0109',
            choices:[
              {
                description:"Defeated the Wizard of Yog-Sothoth",      
                value:0
              },
              {
                description:"Wizard got away",                 
                value:1
              }
            ],
            skipQuestion:false
          }
        ],
      },
      "The House Always Wins":{
        title:"The House Always Wins",
        user_resolution:null,
        user_answers:[],
        total_questions:6,
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
            ],
            relatedQuestions:{
              DW0202:1
            },
            skipQuestion:false
          },
          {
            qString:"All investigators resigned or defeated BEFORE discovering fate of Dr. Morgan?",   //Morgan WAS KIDNAPPED, 
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
            ],
            skipQuestion:false,
            relatedQuestions:{
              DW0204:1
            }
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
            ],
            skipQuestion:false
          },
          {
            qString:"Did investigators wake up and rescue Dr. Morgan? ",
            type:"radio",
            id:'DW0204',
            choices:[
              {
                description:"Found and rescued Dr. Morgan",      //O'BANNION has a bone to pick....
                value:0
              },
              {
                description:"Could not find Dr. Morgan",                 //show this option only if HAW is first
                value:1
              }
            ],
            skipQuestion:false
          },
          {
            qString:"Did the investigators rescue Peter Clover? ",
            type:"radio",
            id:'DW0205',
            choices:[
              {
                description:"Rescued Mr. Clover before La Bella Luna collapsed",      //O'BANNION has a bone to pick....
                value:0
              },
              {
                description:"Failed to save Mr. Clover",                 //show this option only if HAW is first
                value:1
              }
            ],
            skipQuestion:false
          },
          {
            qString:"Defeated Servant of the Lurker?",
            type:"radio",
            id:'DW0207',
            choices:[
              {
                description:"YES",      //O'BANNION has a bone to pick....
                value:0
              },
              {
                description:"NO",                 //show this option only if HAW is first
                value:1
              }
            ],
            skipQuestion:false
          },
          {
            qString:"Defeated Club Club Pit Boss?",
            type:"radio",
            id:'DW0208',
            choices:[
              {
                description:"YES",      //O'BANNION has a bone to pick....
                value:0
              },
              {
                description:"NO",                 //show this option only if HAW is first
                value:1
              }
            ],
            skipQuestion:false
          }
        ],
      },
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
            ],
            skipQuestion:false,
            relatedQuestions:{

            }
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
            ],
            skipQuestion:false,
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
            ],
            relatedQuestions:{
              DW0305:0,
              DW0306:1
            },
            skipQuestion:false,
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
            ],
            skipQuestion:false,
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
            ],
            skipQuestion:false,
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
            ],
            skipQuestion:false,
          }
        ],
      },
      "The Essex County Express":{
        title:"The Essex County Express",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        questions:[
          {
            qString:"Agenda reached full doom?",              
            type:"radio",
            id:'DW0401',
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
            skipQuestion:false,
            relatedQuestions:{
              DW0402:0,
              DW0404:1
            }
          },
          {
            qString:"All investigators resigned or defeated",   //todo, check necronomicon
            type:"radio",                                       
            id:'DW0402',
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
            skipQuestion:false,
            relatedQuestions:{
              DW0404:1
            }
          },
          {
            qString:"Did you steal the luggage?",    
            type:"radio",                                       
            id:'DW0403',
            choices:[
              {
                description:"Stole passenger luggage",   
                value:0
              },
              {
                description:"Didn't take passenger luggage",                              //this leads to Adam Lynch dying, Harold Walstead is gained
                value:1
              }
            ],
            skipQuestion:false,
          },
          {
            qString:"How many helpless passengers perished?",
            type:"radio",
            id:'DW0405',
            choices:[
              {
                description:"1 passenger",      //R2
                value:0
              },
              {
                description:"2 passengers",                 //show this option only if HAW is first
                value:1
              },
              {
                description:"3 passengers",                 //show this option only if HAW is first
                value:2
              }
            ],
            skipQuestion:false,
          },
          {
            qString:"Did you manage to restart the engine? ",
            type:"radio",
            id:'DW0404',
            choices:[
              {
                description:"Restarted the engine.",      //R2
                value:0
              },
              {
                description:"Failed to restart the engine",                 //show this option only if HAW is first
                value:1
              }
            ],
            skipQuestion:false,
          },
        ],
      },
      "Blood on the Altar":{
        title:"Blood on the Altar",
        user_resolution:null,
        user_answers:[],
        total_questions:4,
        questions:[
          {
            qString:"Agenda reached full doom?",              //if 0, R2
            type:"radio",
            id:'DW0501',
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
            skipQuestion:false,
            relatedQuestions:{
              DW0502:1
            }
          },
          {
            qString:"All investigators resigned or defeated",         //todo, check necronomicon
            type:"radio",                                       
            id:'DW0502',
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
            skipQuestion:false, 
            relatedQuestions:{
              DW0503:1,
              DW0504:1
            }
          },
          {
            qString:"Did you.....",    
            type:"radio",                                       
            id:'DW0503',
            choices:[
              {
                description:"Put Silas Bishop out of his misery",   
                value:0
              },
              {
                description:"Found another way...",                              //this leads to Adam Lynch dying, Harold Walstead is gained
                value:1
              }
            ],
            relatedQuestions:{
              DW0504:1
            },
            skipQuestion:false,
          },
          {
            qString:"Instead of putting Silas to death...",
            type:"radio",
            id:'DW0504',
            choices:[
              {
                description:"Banish Silas Bishop with journal found",      //R2
                value:0
              },
              {
                description:"Restored Silas Bishop with Necronomicon",                 //show this option only if HAW is first
                value:1
              }
            ],
            skipQuestion:false,
          },
          {
            qString:"Check off all who were sacrificed to Yog-Sothoth ",             //if DW0303 is 0, we ask this question
            type:"checkbox",                                                        // todo check if Dr. Morgan/Dr.Rice/Dr.Armitage was kidnapped
            id:'DW0505',
            choices:[
              {
                description:"Zebulon Whateley",      
                value:0
              },
              {
                description:"Earl Sawyer",                 
                value:1
              },
              {
                description:"Dr. Armitage",                 
                value:2
              },
              {
                description:"Dr.Morgan",                //check DW0204    
                value:3
              },
              {
                description:"Dr.Rice",                  //DW0104   
                value:4
              }
            ],
            skipQuestion:false,
          }
        ],
      }
  }

