var audio = new Audio('audio/popsound.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+917330813781'> <div class='socialItem' id='call'><img class='socialItemI' src='gallery/phone.svg'/><label class='number'>7330813781</label></div> </a> <a href='mailto:itzmechusheel@gmail.com'> <div class='socialItem'><img class='socialItemI' src='gallery/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/itzmeChusheel'> <div class='socialItem'><img class='socialItemI' src='gallery/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/7330813781'> <div class='socialItem'><img class='socialItemI' src='gallery/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/Chusheel_srinivas'> <div class='socialItem'><img class='socialItemI' src='gallery/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/Chusheel_singh13'> <div class='socialItem'><img class='socialItemI' src='gallery/insta.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/chusheel-srinivas' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='gallery/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='gallery/resumethumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='gallery/pdf.svg'><label>Chusheel Srinivas singh.pdf</label></div><a href='assets/RESUME_CHUSHEEL_SRINIVAS_SINGH.pdf' download='Chusheel_srinivas_Resume.pdf'><img class='download' src='gallery/download.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.8970071767094!2d79.52826367469588!3d17.983528085359172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fbb37aee6c3%3A0xf1b2c37fcb8fefce!2sNational%20Institute%20of%20Technology%2C%20Warangal%20(NIT%20Warangal)!5e0!3m2!1sen!2sin!4v1717262883900!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>NIT WARANGAL<br>warangal<br>Telangana, INDIA 506004</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}
const responses = [
    "Hello!",
    "How can I help you?",
    "Nice to meet you!",
    "I'm here to assist you.",
    "That's interesting!",
    "Tell me more.",
    "Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.",
];

// Function to get a random response
function getRandomResponse() {
    // Generate a random index within the range of responses
    const index = Math.floor(Math.random() * responses.length);
    // Return the response at the randomly selected index
    sendTextMessage(responses[index]);
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerHTML = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display='none';
}


function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display="flex";
}


function isEnter(event) {
    if (event.keyCode === 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var myLI = document.createElement("li");
    var dateLabel = document.createElement("label");
    
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Chusheel srinivas singh</a>.</span><br><br>I am a student at <span class='bold'>NIT WARANGAL 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing B.Tech degree in Computer Science Engineering.<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>I use <span class='bold'>Arch Linux</span> as daily driver on my HP Pavilion 15-ec0xxx<br>OS:Arch Linux<br>DE:Gnome(More often) Kde(often)<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pusuing B.Tech degree in NIT warangal <br>Passing Year : 2025 <br><br>I have secured 99.1 percentile in JEE mains and obtained 11,001 rank in jee advanved <br> Also , obtained Merit-scholarship certificate from NIT warangal for securing higher rank in academics.");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript from SCRATCH!<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https:\/\/instagram.com/Chusheel_singh13/'><span class='bold'>Chusheel srinivas singh</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Account.<br><br><div class='social'><a target='_blank' href='https://github.com/itzmeChusheel'> <div class='socialItem'><img class='socialItemI' src='gallery/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                getRandomResponse();
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.id="sentlabel"
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    greendiv.appendChild(dateLabel);

    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop= 1000*(s.scrollHeight);
    playSound();
}


function playSound() {
    audio.play();
}