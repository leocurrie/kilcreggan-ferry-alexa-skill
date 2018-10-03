/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');
const Timetable = require('./timetable.js');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  async handle(handlerInput) {
    const speechText = 'You can ask me about the times of ferries between Gourock and Kilcreggan';
    const reprompt = 'Try asking when the next ferry is'
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(reprompt)
      .withSimpleCard('Kilcreggan Ferry', speechText)
      .getResponse();
  },
};

const GetFerryTimeIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'GetFerryTimeIntent' || handlerInput.requestEnvelope.request.intent.name === 'DestinationIntent');
  },
  handle(handlerInput) {
    let speechText = 'Oops - something went wrong!';
    let repromptText = '';
    let slots = handlerInput.requestEnvelope.request.intent.slots;
    let port = null;
    
    let toOrFrom = 'to';

    if (slots.hasOwnProperty("portName") && slots.portName.hasOwnProperty("value")) {
      port = slots.portName.resolutions.resolutionsPerAuthority[0].values[0].value.id;
    }

    if (slots.hasOwnProperty("toOrFrom") && slots.toOrFrom.hasOwnProperty("value")) {
      toOrFrom = slots.toOrFrom.resolutions.resolutionsPerAuthority[0].values[0].value.id;
    }
 
    if (port != null) {
      let timetable = new Timetable();
      let sailing = null;

      let when = new Date();

      if (toOrFrom === "to") {
        sailing = timetable.getNextDepartureTo(port, when);
      } else {
        sailing = timetable.getNextDepartureFrom(port, when);
      }

      if (sailing === null) {
        speechText = "Sorry, I can't find any sailings " + toOrFrom + " " + port;
      } else {
        speechText = "The next sailing " + toOrFrom + " " + port + " leaves " + sailing.departurePort + " at " + sailing.departureTime.hour + ":" + sailing.departureTime.min + " and arrives in " + sailing.arrivalPort + " at " + sailing.arrivalTime.hour + ":" + sailing.arrivalTime.min;
      }
    } else {

      speechText = "Where would you like to sail to?";
      repromptText = "try saying 'to gourock' or 'to kilcreggan'";
    }

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(repromptText)
      .withSimpleCard('Kilgreggan Ferry', speechText)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can ask for ferry times';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Kilcreggan Ferry', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Kilcreggan Ferry', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GetFerryTimeIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();





  /**
    let persistentAttributes = await handlerInput.attributesManager.getPersistentAttributes();
    if (!persistentAttributes.hasOwnProperty('invocationCount')) {
      persistentAttributes.invocationCount = 0;
    }
    persistentAttributes.invocationCount++;
    handlerInput.attributesManager.setPersistentAttributes(persistentAttributes);
    await handlerInput.attributesManager.savePersistentAttributes();
  }


  .withTableName("KilcregganFerryPersistence")
  .withAutoCreateTable(true)
  
  */