import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {                
                quiz:{
                    popupTitle: "WELCOME!",
                    RSVPsubheader: "Here you can confirm that you will join us. Not so fast, cowboy... Before getting access and being able to confirm, you need to pass a test of 15 questions; once the test is completed, some magic will activate the RSVP below. If you think it's too many questions, we honestly don't care: we spent a lot of hours coding them, so they are mandatory, full stop. Make us happy.",
                    RSVPsubheader2: "P.D.: Are you wondering what the hell is this RSVP? Don't worry, Elia didn't know either. It stands for Répondez S'il Vous Plaît, which in good manners is used to require an answer to the invitation; this is exactly what you can provide in the RSVP. Let's start with the quiz, and the most important thing: have fun!", 
                },
                navigation: {                
                    "Log in": "Log in",
                    "Sign Out": "Sign Out",
                    "User List": "User List",                    
                    Home: "Home",
                    Logistics: "The Wedding",
                    Wall: "Chat with us",
                    RSVP: "RSVP"
                },
                home: {
                    "Welcome": "Welcome",
                    "CountDownEnded": "They are already married!!!",
                    "countDownIntro": "Countdown to the wedding ",
                    days: "days"
                },             
                userList: {
                    "List of Users": "List of Users",
                    "Username": "Username",
                    "Email": "Email"                   
                },
                wall: {
                    "Send Message": "Send Message",
                    "Text": "Text",
                    "Enter a message": "Enter your message here. Remember that each message generates a notification email, so don't use this chat like WhatsApp!",
                    "Request": "Request",
                    "New Message": "New Message",
                    "popOverChat": "Only you, Elia and Silvia are able to see this chat, and you will receive a notification via email for every new message received. You won't miss anything"
                },
                login:{
                    fullName: "Full Name",
                    signUp: "Sign Up",
                    confirmPassword: "Confirm password",                    
                    emailAddress: "Email address",
                    enterMail: "Enter email",
                    password: "Password",
                    enterPassword: "Enter password",
                    signIn: "Sign In",
                    noAccount: "Don't have an account?",
                    forgotPassword: "Don't remember your password?",
                    resetPassword: "Reset Password",
                    passwordReset: "Reset Password",
                    mailSent: "The instructions for resetting the password have been sent to your email",
                    weddingCode:"Wedding Code",
                    wrongCode:" The Wedding code is incorrect :-( ",
                    validateCode:"Validate Code",
                    hiNewUser: "Hi {{username}}",
                    confirmYourName: "Review your name, we need it for knowing who you are :-)"
                },
                logistics:{
                  
                }               
            },
            it: {                
                quiz:{
                    popupTitle: "BENVENUTO!",
                    RSVPsubheader: "Su questa pagina potrai confermarci che ci sarai. No, non così in fretta... Prima di accedere alla sezione di conferma, c'è una prova da superare: un quiz di 15 domande che, una volta completate, come per magia attiveranno l'accesso al RSVP. Se le domande ti sembrano troppe, sinceramente non ce ne può fregà de' meno: ci abbiamo messo un sacco a programmarle quindi sono obbligatorie e basta. Facci contenti.",
                    RSVPsubheader2: "P.S.: Ti stai chiedendo che diamine è l'RSVP? Tranquillo/a, nemmeno Elia lo sapeva. È la sigla di Répondez S'il Vous Plaît, con cui nel galateo si indica la cortese richiesta di confermare o meno la propria partecipazione; questo è esattamente quello che potrai fare nella nostra sezione RSVP. Ora bando alle ciance, inizia sto benedetto quiz!",                 
                },
                navigation: {                
                    "Log in": "Log In",
                    "Sign Out": "Scollegati",
                    "User List": "User List",                    
                    Home: "Home",
                    Logistics: "Il Matrimonio",
                    Wall: "Chatta con noi",
                    RSVP: "RSVP"
                },
                home: {
                    "Welcome": "Welcome",
                    "CountDownEnded": "Sono già sposati!!!",
                    "countDownIntro": "Countdown to the wedding ",
                    days: "giorni"
                },             
                userList: {
                    "List of Users": "List of Users",
                    "Username": "Username",
                    "Email": "Email"
                },
                wall: {
                    "Send Message": "Invia il tuo messaggio",
                    "Text": "Testo",
                    "Enter a message": "Scrivi il tuo messaggio. Ogni messaggio genera un'e-mail di notifica, perciò non usare la chat come se fosse WhatsApp!",
                    "New Message": "Nuovo messaggio",
                    "popOverChat": "La chat è visibile solo a te, Elia e Silvia, e ad ogni messaggio ricevuto ti arriverà un'e-mail. Non ti puoi perdere nulla"
                },
                login:{
                    fullName: "Nome Completo",
                    signUp: "Registrati",
                    confirmPassword: "Conferma la tua password",                    
                    emailAddress: "Email",
                    enterMail: "Scrivi la tua email",
                    password: "Password",
                    enterPassword: "Scrivi la tua password",
                    signIn: "Log In",
                    noAccount: "Non hai un account?",
                    forgotPassword: "Hai dimenticato la password?",
                    resetPassword: "Reimposta Password",
                    passwordReset: "Reimposta Password",
                    mailSent: "Ti abbiamo inviato un'email con le istruzioni per reimpostare la password",
                    weddingCode:"Codice segreto",
                    wrongCode:"Il codice segreto è sbagliato :-( ",
                    validateCode:"Verifica il codice",
                    hiNewUser: "Ciao {{username}}",
                    confirmYourName: "Revisa che il tuo nome di Google ci permetta di capire chi sei :-)"
                },
                logistics:{
                }              
            },
            es: {                
                quiz:{
                    popupTitle: "BIENVENIDO!",
                    RSVPsubheader: "En esta página podrás confirmarnos que vendrás. No, no tan rápido... Antes de poder acceder a la sección para confirmar, hay que superar una prueba: un test de 15 preguntas que, una vez completadas, por arte de magia activarán el acceso al RSVP. Si te parecen muchas preguntas, sinceramente no nos importa: hemos tardado muchas horas para programarlas, con lo cual son obligatorias y punto. Haznos felices.",
                    RSVPsubheader2: "P.D.: ¿Te estás preguntando qué es el RSVP? Tranquilo/a, ni siquiera Elia lo sabía. Es el acrónimo de Répondez S'il Vous Plaît, y según las buenas maneras indica la amable petición a los invitados de confirmar su participación; eso es lo que vas a poder hacer en nuestra sección de RSVP. Dale, basta perder tiempo, ¡empieza este quiz!", 
                },
                navigation: {                
                    "Log in": "Log In",
                    "Sign Out": "Desconectar",
                    "User List": "User List",                    
                    Home: "Home",
                    Logistics: "La boda",
                    Wall: "Chat con los novios",
                    RSVP: "RSVP"
                },
                home: {
                    "Welcome": "Welcome",
                    "CountDownEnded": "Ya se han casado!!!",
                    "countDownIntro": "Countdown to the wedding ",
                    days: "días"
                },             
                userList: {
                    "List of Users": "List of Users",
                    "Username": "Username",
                    "Email": "Email"
                },
                wall: {
                    "Send Message": "Envía tu mensaje",
                    "Text": "Texto",
                    "Enter a message": "Escribe tu mensaje. Recuerda que cada mensaje genera un email de notificación, así que por favor no uses este chat como si fuera WhatsApp!",
                    "New Message": "Nuevo mensaje",
                    "popOverChat": "El chat es visible solamente para ti, Elia y Silvia, y vas a recibir una notificación por email a cada mensaje nuevo recibido. No te perderás nada"
                },
                login:{
                    fullName: "Nombre Completo",
                    signUp: "Regístrate",
                    confirmPassword: "Confirma la contraseña",                    
                    emailAddress: "Email",
                    enterMail: "Escribe tu email",
                    password: "Contraseña",
                    enterPassword: "Escribe tu contraseña",
                    signIn: "Log In",
                    noAccount: "¿No tienes cuenta?",
                    forgotPassword: "¿Olvidaste la contraseña?",
                    resetPassword: "Resetear contraseña",
                    passwordReset: "Resetear contraseña",
                    mailSent: "Te hemos enviado un email con la instrucciones para resetear tu contraseña",
                    weddingCode:"Código secreto",
                    wrongCode:"El código secreto no es correcto :-( ",
                    validateCode:"Valida el código",
                    hiNewUser: "Hola {{username}}",
                    confirmYourName: "Comprueba si el nombre que tienes en Google lo podamos entender :-)"
                },
                logistics:{
                }                
            }                  
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations", "navigation", "home"],
        defaultNS: "navigation",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ","
        },

        react: {
            wait: true
        }
    });

export default i18n;