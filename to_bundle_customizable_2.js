window.MyWidgetConfig = window.MyWidgetConfig || {};

// Read the user's configuration
var userConfig = window.MyWidgetConfig;

// Use default values if the user did not provide their own
var widgetConfig = {
  chatBodyBackgroundColor: userConfig.chatBodyBackgroundColor || "white",
  botMessageTextColor: userConfig.botMessageTextColor || "black",
  botMessageBackgroundColor: userConfig.botMessageBackgroundColor || "#fafafa",
  userMessageTextColor: userConfig.userMessageTextColor || "white",
  userMessageBackgroundColor: userConfig.userMessageBackgroundColor || "purple",
  bubbleImageUrl:
    userConfig.bubbleImageUrl ||
    "http://intuitum.ai/wp-content/uploads/2023/07/bubble-chat.png",
  bubbleBackgroundColor: userConfig.bubbleBackgroundColor || "purple",
  closeImageUrl:
    userConfig.closeImageUrl ||
    "http://intuitum.ai/wp-content/uploads/2023/07/close_white.png",
  logoUrl:
    userConfig.logoUrl ||
    "http://intuitum.ai/wp-content/uploads/2023/06/logo_white_accent-min.png",
  fontFamily: userConfig.fontFamily || "'Roboto', sans-serif",
  chatbotHeaderBackgroundColor: userConfig.headerColor || "#fafafa",
  sendButtonBackgroundColor: userConfig.sendButtonBackgroundColor || "white",
  sendButtonBorderColor: userConfig.sendButtonBorderColor || "purple",
  chatbotFooterBackgroundColor:
    userConfig.chatbotFooterBackgroundColor || "#fafafa",
  quickChatBadgeBackgroundColor:
    userConfig.quickChatBadgeBackgroundColor || "purple",
  inputBackgroundColor: userConfig.inputBackgroundColor || "white",
  inputTextPlaceholder:
    userConfig.inputTextPlaceholder || "Type your message...",
  sendButtonImageUrl:
    userConfig.sendButtonImageUrl ||
    "http://intuitum.ai/wp-content/uploads/2023/07/send.png",
  showIntuitumBadge:
    typeof userConfig.showIntuitumBadge === "undefined"
      ? true
      : userConfig.showIntuitumBadge,
  userID: userConfig.userID || "",
  modelName: userConfig.modelName || "",
  isModelPermissive:
    typeof userConfig.isModelPermissive === "undefined"
      ? false
      : userConfig.isModelPermissive,
  openOnStart:
    typeof userConfig.openOnStart === "undefined"
      ? false
      : userConfig.openOnStart,

  chatBotTitleText:
    userConfig.chatBotTitleText || "Ask anything about Intuitum",
};

console.log("CONSOLE LOGGING FROM JAVASCRIPT");
console.log(widgetConfig.openOnStart);

const css = `

#intuitum-quick-replies{
  background-color:${widgetConfig.chatBodyBackgroundColor}
}

  #intuitum-chatbot-messages .intuitum-chatbot-message {
    max-width: 80%;
    padding: 12px;
    margin: 5px;
    border-radius: 16px;
    color: ${widgetConfig.botMessageTextColor};
    overflow-wrap: break-word;
    font-size:0.75rem;
    
}

#intuitum-chatbot-messages .intuitum-chatbot-message.user {
    align-self: flex-end;
    background-color: ${widgetConfig.userMessageBackgroundColor};
    color: ${widgetConfig.userMessageTextColor};
}

#intuitum-chatbot-messages .intuitum-chatbot-message.bot {
    align-self: flex-start;
    background-color: ${widgetConfig.botMessageBackgroundColor};
    color: ${widgetConfig.botMessageTextColor};
    border: 0.5px solid black;
}

#intuitum-chatbot.active {
    display: flex !important;
}

#intuitum-chatbot.hidden {
    display: none !important;
}

#intuitum-chatbot-body {
    background-color: white;
}

#intuitum-chat-bubble {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: ${widgetConfig.bubbleBackgroundColor};
    background-size: cover;
    background-image: url(${widgetConfig.bubbleImageUrl});
        background-size: 55%;
            background-position: center;
            background-repeat: no-repeat;
    overflow: hidden;
    cursor: pointer;
    position: fixed;
    bottom: 20px;
    right: 20px;
    transform: rotate(0deg);
        /* No rotation initially */
        transition: background 0.15s ease-in-out, transform 0.15s ease-in-out;
        /* Add transition for transform */
}

#intuitum-chat-bubble.open {
    background-image: url(${widgetConfig.closeImageUrl});
    background-size:40%;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(360deg);
}

#intuitum-chatbot {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    /* Position the chat interface at the top left of the chat bubble */
    bottom: 4.5rem;
    /* height of bubble plus margin */
    right: 3.5rem;
    font-family: 'Roboto', sans-serif;

}


#intuitum-chatbot-button {
    background-color: ${widgetConfig.sendButtonBackgroundColor};
    
}

.btn-primary.intuitum-send-button{
    --bs-btn-border-color: ${widgetConfig.sendButtonBorderColor} !important;
    --bs-btn-active-border-color: purple !important;
}

.intuitum-hidden {
    display: none;
}

#intuitum-chatbot-footer {
    background-color: ${widgetConfig.chatbotFooterBackgroundColor};
    border-radius: 0 0 .75rem .75rem;
        /*TL TR BR BL*/
}

#intuitum-chatbot-header {
    border-radius: .75rem .75rem 0 0;
        /*TL TR BR BL*/
}

.intuitum-bot-icon {
    position: absolute;
    bottom: -2vh;
    /* Adjust this to fit the icon size */
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
}

.intuitum-bot-container {
    display: relative;
    align-items: flex-start;
    position: relative;
}

.intuitum-chatbot-message {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    flex-direction: row;
}

#intuitum-quick-replies{
  justify-items: center;
  justify-content:center;
  text-align:center;
}

.intuitum-chatbot-message.user {
    justify-content: flex-end;
}

.intuitum-chatbot-message.bot {
    justify-content: flex-start;
}

.intuitum-bot-text {
    order: 2;
    display: inline-block;
    vertical-align: middle;
    horizontal-align: middle;
}

.intuitum-badge{
    background-color: ${widgetConfig.quickChatBadgeBackgroundColor} !important;
    border-radius: .75rem !important;
    }

@media screen and (min-width: 576px) {
    #intuitum-chatbot {
        width: 50%;
        max-width: 500px;
    }
}

@media screen and (max-width: 576px) {
    #intuitum-chatbot {
        width: 100%;
        max-width: 100%;
        right: 2%;
    }

    #intuitum-quick-replies {
        flex-direction: column;
        align-items: flex-start;
    }
}


`;

const html = `

   <div> 
    <div id="intuitum-chat-bubble" class="position-fixed d-flex justify-content-center align-items-center"
        style="bottom: 1.5rem; right: 1.5rem; z-index: 9999999">
    </div>

    <div id="intuitum-chatbot" class="position-fixed d-none flex-column "
        style="width: 95%; max-width: 475px; height: 70vh; border-radius: .75rem; z-index: 9999999">
<div id="intuitum-chatbot-header" class="d-flex align-items-center justify-content-center text-light p-2"
    style="background-color: ${widgetConfig.chatbotHeaderBackgroundColor}; height: auto;">
    <span  style="font-size: 1.25rem; padding-left: 2%; text-align: center; color:black; font-weight:bold;" class="pb-8"><img class="intuitum-logo" style="height:5rem !important;" src="${widgetConfig.logoUrl}"><br>${widgetConfig.chatBotTitleText}</span>
        
</div>

        <div id="intuitum-chatbot-body" class="p-2 overflow-auto flex-grow-1">

            <div id="intuitum-chatbot-messages" class="d-flex flex-column align-items-start w-100"></div>
        </div>
        <div class="d-flex justify-content-center" style="background-color:${widgetConfig.chatBodyBackgroundColor};">
            <div id="loading-indicator" class="spinner-grow spinner-grow-sm text-secondary text-center mx-auto" role="status"
                style="display: none;">
            </div>
            <div id="quick-replies-container" class="justify-content-center d-flex text-center">
  <div id="intuitum-quick-replies" class="d-flex flex-wrap justify-content-center pb-2">
                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">What is Intuitum?</span>
                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">How does Intuitum work?</span>
                    <span class="intuitum-badge badge m-1 p-2 cursor-pointer text-center" style="cursor: pointer; font-size: 0.7rem; font-weight: 400 !important;">What deployment options are available for Intuitum models?</span>
                </div>
                </div>
        </div>
        <div id="intuitum-chatbot-footer" class="p-2" style="background-color:${widgetConfig.chatbotFooterBackgroundColor}">
            <form id="chatbot-form" class="d-flex align-items-center">
                <input id="chatbot-input" type="text" class="form-control flex-grow-1 mr-2 pr-2"
                    style="border-radius: .25rem; background-color:${widgetConfig.inputBackgroundColor};" placeholder="${widgetConfig.inputTextPlaceholder}">
                <button id="intuitum-chatbot-button" class="btn btn-primary ms-2 intuitum-send-button" type="submit">
                    <img src=${widgetConfig.sendButtonImageUrl} alt="Send" width="20px" height="20px">
                    
                </button>
                
            </form>
            <div id="intuitum-badge"><p style="color: black; font-size: 0.7rem; font-weight: 300 !important; text-align: center; margin-bottom: 0; padding-top: 2%;">Powered by Intuitum</p></div>
           
        </div>
    </div>
    </div>
  

`;

// Create a container for your widget
const widgetContainer = document.createElement("div");

// Create a shadow root
const shadowRoot = widgetContainer.attachShadow({ mode: "open" });

// Create a style tag, insert your CSS into it
const style = document.createElement("style");
style.textContent = css;
shadowRoot.appendChild(style);

// Create a link for Bootstrap CSS
const bootstrapLink = document.createElement("link");
bootstrapLink.rel = "stylesheet";
bootstrapLink.href =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
bootstrapLink.integrity =
  "sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM";
bootstrapLink.crossOrigin = "anonymous";
shadowRoot.appendChild(bootstrapLink);

// Create a link for Google Fonts
const fontsLink = document.createElement("link");
fontsLink.rel = "stylesheet";
fontsLink.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap";
shadowRoot.appendChild(fontsLink);

// Check if jQuery is already loaded in the main document
if (!window.jQuery) {
  // jQuery is not loaded, so create a script element for it
  const jqueryScript = document.createElement("script");
  jqueryScript.src =
    "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";

  // Append the script element to the shadowRoot
  shadowRoot.appendChild(jqueryScript);
}

// Insert your HTML into the shadow root
const widgetHTML = document.createElement("div");
widgetHTML.innerHTML = html;
shadowRoot.appendChild(widgetHTML);

// Append the widget container to the body of the document
document.body.appendChild(widgetContainer);

var selectedLanguage = "english"; // Initial language/ Initial flags

var dropdownItems = shadowRoot.querySelectorAll(".dropdown-item");

attachClickToQuickReplies();

for (var i = 0; i < dropdownItems.length; i++) {
  dropdownItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    selectedLanguage = this.getAttribute("data-language");

    shadowRoot.getElementById("selectedLanguage").textContent =
      selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1);

    console.log("Selected language: " + selectedLanguage);
  });
}

let chatInterfaceOpen = false;

// Your JavaScript goes here

let isTyping = false;

function updateWidgetConfig(config) {
  Object.assign(widgetConfig, config);
  // Re-render the widget with the updated configuration
  renderWidget();
}

if (widgetConfig.openOnStart) {
  var chatbot = shadowRoot.getElementById("intuitum-chatbot");
  chatbot.classList.remove("d-none"); // Show chat interface
  chatbot.classList.add("d-flex", "flex-column"); // Format chat interface
  shadowRoot.getElementById("intuitum-chat-bubble").classList.add("open"); // Change chat bubble to 'close chat' style
  chatInterfaceOpen = true;
}

if (!widgetConfig.showIntuitumBadge) {
  shadowRoot.getElementById("intuitum-badge").classList.add("intuitum-hidden");
}

async function getBotResponse(userMessage) {
  if (userMessage.trim() !== "") {
    const backendUrl = "https://30ca-34-91-178-166.ngrok-free.app"; // replace with your backend url
    const url = `${backendUrl}/query`;

    const headers = {
      "Content-Type": "application/json",
    };

    const userID_ = widgetConfig.userID; // assuming dummy userID value
    const selectedModelName = widgetConfig.modelName; // assuming dummy model name
    const selectedChatLanguage = "en"; // assuming dummy chat language
    const isModelPermissive = widgetConfig.isModelPermissive;

    const requestBody = {
      submitted_query: userMessage,
      user_id: userID_,
      model_name: selectedModelName,
      selected_language: selectedChatLanguage,
      is_model_permissive: isModelPermissive,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseBody = await response.json();

        let result = responseBody["bot_response"];

        if (result.startsWith("1. ")) {
          result = result.substring(3);
        }

        if (result === "") {
          result =
            selectedChatLanguage === "en"
              ? "Hmmm. It seems like I don't quite understand. Could you maybe try rephrasing that for me?"
              : "Hmmm. Es scheint, als würde ich das nicht ganz verstehen. Könnten Sie vielleicht versuchen, das für mich umzuformulieren?";
        }

        if (
          result ===
          "Our servers are currently at capacity, please try again later!"
        ) {
          result =
            selectedChatLanguage === "de"
              ? "Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal."
              : result;
        }

        return result;
      } else {
        let result =
          "Our Servers are currently at capacity, please try again later!";

        result =
          selectedChatLanguage === "de"
            ? "Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal."
            : result;

        return result;
      }
    } catch (error) {
      console.error("Error:", error);
      let result =
        "Whoops, something seems to have gone wrong. We are working our hardest to get it fixed as soon as possible! Why not look back later and try again?";

      result =
        selectedChatLanguage === "en"
          ? result
          : "Unsere Server sind aktuell überlastet. Bitte probiere es später nochmal.";

      return result;
    }
  }
  return null;
}

shadowRoot
  .getElementById("intuitum-chat-bubble")
  .addEventListener("click", function () {
    var chatbot = shadowRoot.getElementById("intuitum-chatbot");
    if (!chatInterfaceOpen) {
      chatbot.classList.remove("d-none"); // Show chat interface
      chatbot.classList.add("d-flex", "flex-column"); // Format chat interface
      this.classList.add("open"); // Change chat bubble to 'close chat' style
      chatInterfaceOpen = true;
    } else {
      chatbot.classList.remove("d-flex", "flex-column"); // Hide chat interface
      chatbot.classList.add("d-none");
      this.classList.remove("open"); // Change 'close chat' style back to chat bubble
      chatInterfaceOpen = false;
    }
  });

if (widgetConfig.openOnStart) {
  var chatbot = shadowRoot.getElementById("intuitum-chatbot");
  var chatbubble = shadowRoot.getElementById("intuitum-chat-bubble");
  chatbot.classList.remove("d-none"); // Show chat interface
  chatbot.classList.add("d-flex", "flex-column"); // Format chat interface
  chatbubble.classList.add("open"); // Change chat bubble to 'close chat' style
  chatInterfaceOpen = true;
}

shadowRoot
  .getElementById("chatbot-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (isTyping) {
      return;
    }

    shadowRoot
      .getElementById("intuitum-quick-replies")
      .classList.remove("d-flex");
    shadowRoot
      .getElementById("intuitum-quick-replies")
      .classList.add("intuitum-hidden");

    var submitButton = shadowRoot.getElementById("intuitum-chatbot-button");
    submitButton.disabled = true; // Disable submit button

    var input = shadowRoot.getElementById("chatbot-input");
    var messagesContainer = shadowRoot.getElementById(
      "intuitum-chatbot-messages"
    );
    var loadingIndicator = shadowRoot.getElementById("loading-indicator");

    var scrollContainer = shadowRoot.getElementById("intuitum-chatbot-body");

    // Disable input and show loader
    input.disabled = true;
    loadingIndicator.style.display = "block";

    // Add user message to chat
    var userMessageElement = document.createElement("div");
    userMessageElement.classList.add("intuitum-chatbot-message", "user");
    userMessageElement.textContent = input.value;
    messagesContainer.appendChild(userMessageElement);
    scrollContainer.scrollTop = scrollContainer.scrollHeight;

    var userInput = input.value;

    // Clear the input
    input.value = "";

    (async function () {
      // Get bot response
      var botMessage = await getBotResponse(userInput);

      loadingIndicator.style.display = "none";

      // Create a new div to contain the message and the icon
      var botContainer = document.createElement("div");
      botContainer.classList.add("intuitum-bot-container");

      // Add bot response to chat with typing effect
      var botMessageElement = document.createElement("div");
      botMessageElement.classList.add("intuitum-chatbot-message", "bot");

      // Add bot icon
      var botIconElement = document.createElement("img");
      botIconElement.src = widgetConfig.logoUrl; // Replace with the path to your bot profile picture
      botIconElement.classList.add("intuitum-bot-icon");
      botContainer.appendChild(botIconElement); // Add the bot icon directly inside the botContainer

      botContainer.appendChild(botMessageElement);
      messagesContainer.appendChild(botContainer);

      // Create a separate element for the bot message
      var botTextElement = document.createElement("span");
      botTextElement.classList.add("intuitum-bot-text");
      botMessageElement.appendChild(botTextElement);

      // Start typing
      isTyping = true;

      var i = 0;
      var intervalId = setInterval(function () {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;

        if (i < botMessage.length) {
          botTextElement.textContent += botMessage[i];
          i++;
        } else {
          clearInterval(intervalId);
          // Finished typing
          isTyping = false;
        }
      }, 50); // Adjust this value to speed up or slow down the typing effect
    })();

    // Enable input and hide loader
    input.disabled = false;
    submitButton.disabled = false; // Enable submit button
  });

function attachClickToQuickReplies() {
  console.log("Attaching to quick replies");
  let quickReplies = shadowRoot.querySelectorAll(".intuitum-badge");
  quickReplies.forEach((badge) => {
    console.log("RUNNING");
    badge.addEventListener("click", function () {
      if (isTyping) {
        return;
      }

      var userInput = this.textContent;

      console.log(shadowRoot.getElementById("intuitum-quick-replies"));

      shadowRoot
        .getElementById("intuitum-quick-replies")
        .classList.remove("d-flex");
      shadowRoot
        .getElementById("intuitum-quick-replies")
        .classList.add("intuitum-hidden");

      var input = shadowRoot.getElementById("chatbot-input");
      var messagesContainer = shadowRoot.getElementById(
        "intuitum-chatbot-messages"
      );
      var loadingIndicator = shadowRoot.getElementById("loading-indicator");

      var scrollContainer = shadowRoot.getElementById("intuitum-chatbot-body");
      scrollContainer.scrollTop = scrollContainer.scrollHeight;

      // Disable input and show loader
      input.disabled = true;
      loadingIndicator.style.display = "block";

      // Add user message to chat
      var userMessageElement = document.createElement("div");
      userMessageElement.classList.add("intuitum-chatbot-message", "user");
      userMessageElement.textContent = userInput;
      messagesContainer.appendChild(userMessageElement);

      // You could refactor this part into a separate function to avoid duplicating the same code here and in the form submit event
      (async function () {
        var botMessage = await getBotResponse(userInput);

        loadingIndicator.style.display = "none";

        // Create a new div to contain the message and the icon
        var botContainer = document.createElement("div");
        botContainer.classList.add("intuitum-bot-container");

        // Add bot response to chat with typing effect
        var botMessageElement = document.createElement("div");
        botMessageElement.classList.add("intuitum-chatbot-message", "bot");
        botContainer.appendChild(botMessageElement);

        // Add bot icon
        var botIconElement = document.createElement("img");
        botIconElement.src = widgetConfig.logoUrl;
        botIconElement.classList.add("intuitum-bot-icon");
        botContainer.appendChild(botIconElement);

        messagesContainer.appendChild(botContainer);

        // Create a separate element for the bot message
        var botTextElement = document.createElement("span");
        botTextElement.classList.add("intuitum-bot-text");
        botMessageElement.appendChild(botTextElement);

        // Start typing
        isTyping = true;

        var i = 0;
        var intervalId = setInterval(function () {
          scrollContainer.scrollTop = scrollContainer.scrollHeight;

          if (i < botMessage.length) {
            botTextElement.textContent += botMessage[i];
            i++;
          } else {
            clearInterval(intervalId);

            // Finished typing
            isTyping = false;
          }
        }, 50);

        // Enable input and hide loader
        input.disabled = false;
        submitButton.disabled = false; // Enable submit button

        shadowRoot.getElementById("chatbot-input").value = ""; // Clear the input
        shadowRoot.getElementById("chatbot-button").disabled = false; // Enable submit button
        shadowRoot.getElementById("chatbot-input").disabled = false; // Enable input
      })();
    });
  });
}
