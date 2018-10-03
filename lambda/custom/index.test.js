const va = require("virtual-alexa");
let alexa = null;

beforeAll(() => {
    alexa = va.VirtualAlexa.Builder()
        .handler("./index.handler")
        .interactionModelFile("../../models/en-GB.json")
        .create();
});

it("Should load a virtual alexa", () => {
    expect(alexa).toBeDefined();
});

it("should play launch greeting", async () => {
    let payload = await alexa.launch();
    let speechOutput = payload.response.outputSpeech.ssml;
    expect(speechOutput).toContain("ask me about the times of ferries");
});

/**
it("should do something something", async () => {
    await alexa.launch();
    let payload = await alexa.utter("whens the next ferry");
    let speechOutput = payload.response.outputSpeech.ssml;
    expect(speechOutput).toContain("Where would you like to sail to?");
});
**/
