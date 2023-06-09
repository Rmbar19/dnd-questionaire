import '/home/ryan/Projects/dnd-questionaire/dnd-questionnaire/src/survey-library/build/survey-react/defaultV2.min.css';
import {useState, react, useCallback} from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
// ...

// const surveyJson = {
//     pages: [{
//       name: "PersonalDetails",
//       elements: [{
//         type: "text",
//         name: "FirstName",
//         title: "Enter your first name:"
//       }, {
//         type: "text",
//         name: "LastName",
//         title: "Enter your last name:"
//       }, {
//         type: "panel",
//         name: "Contacts",
//         state: "collapsed",
//         title: "Contacts (optional)",
//         elements: [{
//           type: "text",
//           name: "Telegram",
//           title: "Telegram:"
//         }, {
//           type: "text",
//           name: "GitHub",
//           title: "GitHub username:"
//         }]
//       }]
//     }]
//   };

const SURVEY_ID = 1;
const surveyJson = {
    pages:  [{
        elements: [{
            type:'html',
            html:"<h2 color='black'>This is a 20 question survey for our D&D campaign! Please take a moment to answer for a better experience.</h2>"
        }]
    }, {
        elements: [{
        name: "Doyoubelieveyourcharactersmoralityisabsoluteorcanitbeswayedbycircumstances?",
        title: "Do you believe your character's morality is absolute or can it be swayed by circumstances?",
        type: "text",
        }, {
            name: "Doesyourcharacterbelieveindoingwhateverittakestoachievetheirgoalsevenifitgoesagainsttheirmoralcode?",
            title: "Does your character believe in doing whatever it takes to achieve their goals, even if it goes against their moral code?",
            type: "text",
            isRequired: false
        }, {
            name: "Isyourcharacterwillingtocompromisetheirpersonalbeliefsforthebenefitofthegrouporthemission?",
            title: "Is your character willing to compromise their personal beliefs for the benefit of the group or the mission?",
            type: "text",
            isRequired: false
        }, {
            name: "Wouldyourcharacterinterveneiftheysawaninnocentpersonindangerevenifitcouldpotentiallyexposethemtodangeraswell?",
            title: "Would your character intervene if they saw an innocent person in danger, even if it could potentially expose them to danger as well?",
            type: "text",
            isRequired: false
        }, ], 
    },  {
        elements: [{
            name: "Doesyourcharacterrespectthelawsandnormsofsocietyeveniftheydisagreewiththemonapersonallevel?",
            title: "Does your character respect the laws and norms of society, even if they disagree with them on a personal level?",
            type: "text",
            isRequired: false
        }, {
            name: "Doesyourcharacterbelieveinkarmaortheideathattheiractionshaveconsequencesthatwillcomebacktotheminthefuture?",
            title: "Does your character believe in karma or the idea that their actions have consequences that will come back to them in the future?",
            type: "text",
            isRequired: false
        }, {
            name: "Isyourcharacterwillingtotakealifeifnecessary?",
            title: "Is your character willing to take a life if necessary?",
            type: "text",
            isRequired: false
        }, {
            name: "Wouldyourcharacterstealfromtherichtogivetothepoor?",
            title: "Would your character steal from the rich to give to the poor?",
            type: "text",
            isRequired: false
        }, ],
    }, {
        elements: [{
            name: "Isyourcharacterlikelytolietoprotectsomeonesfeelingsortoavoidconflict?",
            title: "Is your character likely to lie to protect someone's feelings or to avoid conflict?",
            type: "text",
            isRequired: false
        }, {
            name: "Doesyourcharacterbelievethatsomepeopleareinnatelygoodorevilordotheybelievepeopleareshapedbytheirexperiences?",
            title: "Does your character believe that some people are innately good or evil, or do they believe people are shaped by their experiences?",
            type: "text",
            isRequired: false
        }, {
            name: "Wouldyourcharacterforgivesomeonewhobetrayedthem?",
            title: "Would your character forgive someone who betrayed them?",
            type: "text",
            isRequired: false
        }, {
            name: "Doesyourcharacterbelieveinredemptionandsecondchances?",
            title: "Does your character believe in redemption and second chances?",
            type: "text",
            isRequired: false
        }, ],
    }, {
        elements: [{
            name: "Wouldyourcharacterputtheirownlifeatrisktosaveastranger?",
            title: "Would your character put their own life at risk to save a stranger?",
            type: "text",
            isRequired: false
        }, {
            name: "Doesyourcharacterbelievethateveryonedeservestobetreatedwithrespectandkindnessregardlessoftheiractions?",
            title: "Does your character believe that everyone deserves to be treated with respect and kindness, regardless of their actions?",
            type: "text",
            isRequired: false
        }, {
            name: "Isyourcharacterwillingtosacrificetheirownhappinessforthehappinessofothers?",
            title: "Is your character willing to sacrifice their own happiness for the happiness of others?",
            type: "text",
            isRequired: false
        }, {
            name: "True/False:Yourcharacterbelievesthatendsjustifythemeans",
            title: "True/False: Your character believes that ends justify the means",
            type: "text",
            isRequired: false
        }, ],
    }, {
        elements: [{
            name: "True/False:Yourcharacterbelievesthateveryoneregardlessoftheiractionsiscapableofredemption.",
            title: "True/False: Your character believes that everyone, regardless of their actions, is capable of redemption.",
            type: "text",
            isRequired: false
        }, {
            name: "True/False:Yourcharacterwouldbreakthelawiftheybelieveditwastherightthingtodo.",
            title: "True/False: Your character would break the law if they believed it was the right thing to do.",
            type: "text",
            isRequired: false
        }, {
            name: "True/False:Yourcharacterbelievesinastrictcodeofconductandwillnotdeviatefromit,evenunderduress.",
            title: "True/False: Your character believes in a strict code of conduct and will not deviate from it, even under duress.",
            type: "text",
            isRequired: false
        }, {
            name: "True/False:Yourcharacterbelievesthatoneshouldalwaysprioritizetheneedsofthemanyovertheneedsofthefewortheone.",
            title: "True/False: Your character believes that one should always prioritize the needs of the many over the needs of the few or the one.",
            type: "text",
            isRequired: false
        }, ]
    }],
    showQuestionNumbers: "on",
    pageNextText: "Forward",
    completeText: "Submit",
    showPrevButton: false,
    firstPageIsStarted: true,
    startSurveyText: "Take the Survey",
    completedHtml: "Thank you for your feedback!",

  };  



const Questionaire = () => {

    const survey = new Model(surveyJson);
    const visiblePageIndex = survey.currentPage

   
    // A page instance
    

    // A zero-based index of the desired page in the `visiblePages` array
   

    // A page name
    survey.currentPage = "myCurrentPage";
    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results)
    }, [])
    const surveyComplete = useCallback((sender) => {
        saveSurveyResults(
           "http://localhost:4000/add",
            sender.data
        )
    }, []);

    // survey.start();
 
    // const navigatedForward = survey.nextPage();
    // if (!navigatedForward) {
    //     // alert("Navigation failed!")
    // }

    // const navigatedBack = survey.prevPage();
    // if (!navigatedBack) {
    //     // alert("Navigation failed!")
    // }

    // const completedSuccessfully = survey.completeLastPage();
    // if (!completedSuccessfully) {
    //     alert("Check the answers for validation errors")
    // }


    survey.onComplete.add(surveyComplete);


    return (
        <Survey model={survey}/>
    )
}

function saveSurveyResults(url, json) {
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.addEventListener('load', () => {
    // Handle "load"
  });
  request.addEventListener('error', () => {
    // Handle "error"
  });
  console.log(json)
  request.send(JSON.stringify(json));
}
  export default Questionaire