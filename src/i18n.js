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
                    RSVP: "RSVP",
                    About: "Backstage",
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
                    loginGoogleIntro: "Alternatively, you can sign in with your Google account:",
                    resetPassword: "Reset Password",
                    passwordReset: "Reset Password",
                    popOverLogin: "Remember that if you choose to login with Google, you will trigger a popup managed by Google, not by us",
                    mailSent: "The instructions for resetting the password have been sent to your email",
                    weddingCode:"Wedding Code",
                    wrongCode:" The Wedding code is incorrect :-( ",
                    validateCode:"Validate Code",
                    hiNewUser: "Hi {{username}}",
                    confirmYourName: "Review your name, we need it for knowing who you are :-)"
                },
                logistics:{
                  
                },
                about:{
                    silvia1: "- Elia, what should we use to create our wedding page? Joy, Zankyou…?",
                    elia1: "- I beg your pardon?!",
                    silvia2: "- Oh dear, you don’t want to do it from scratch, do you?",
                    elia2: "- Sure I do! A developer like me would never ever use a website built by someone else!",
                    challenge: " It was with this conversation about pride, some weeks ago, that our adventure began: build our webpage from scratch. Yes, you got it, we didn’t use a single template: from the Favicon to the Chat, we practically coded it all.",
                    suggestion: "No need of lying here, this website cost us a lot of hours and made us sweat (literally: we did this when there was the heat wave). For this reason, if you have some suggestions, we can’t guarantee we will have the strength to apply them, but you can still try to send them through the chat.",
                    learnings: "Building a website also taught (or reminded) us a lot of things: that two is better than one, and it’s better to suffer together than alone; that appearances sometimes don’t matter, and Java has nothing to do with JavaScript; that some other times, they do matter, and suddenly you lose an hour trying to paint a button in blue; that if someone is important, it’s best to let them know (in CSS, using !important); that before pushing, you always have to pull; that security is important, and if you thought no one was controlling you, you were wrong, because Git Guardian is always there; that with the appropriate means, miracles can be done, because Elia with a RAM and a solid HD made Windows10 start in less than 10 seconds; that if you want it, you can do it, and even if you never coded, you can become a JS Ninja; that needs are relative, because you can survive only on beer and chips.",
                    conclusion: "But the best thing this little project confirmed, is that we are still able to have a lot of fun with little, and together we are the best. Check out our pictures if you don't believe us",
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
                    RSVP: "RSVP",
                    About: "Backstage",
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
                    loginGoogleIntro: "In alternativa, puoi fare il login con il tuo account Google",
                    popOverLogin: "Ricordati che se scegli il login con Google, si aprirà un popup di Google, che noi non amministriamo (controlla la url del popup se non ti fidi!)",
                    cookiesInfo: "Come il resto del mondo, anche il nostro sito usa i cookie, speriamo che tu sia d'accordo",
                    mailSent: "Ti abbiamo inviato un'email con le istruzioni per reimpostare la password",
                    weddingCode:"Codice segreto",
                    wrongCode:"Il codice segreto è sbagliato :-( ",
                    validateCode:"Verifica il codice",
                    hiNewUser: "Ciao {{username}}",
                    confirmYourName: "Controlla che il tuo nome di Google ci permetta di capire chi sei :-)"
                },
                logistics:{
                },
                about:{
                    silvia1: "- Elia, dove lo facciamo il sito per il nostro matrimonio? Joy, Zankyou…?",
                    elia1: "- Scusa?",
                    silvia2: "- Sì, beh, vorrai mica farlo da zero?!",
                    elia2: "- Ma certo! Ti pare che io, informatico, possa usare un sito fatto da altri?",
                    challenge: "Con questa manifestazione di orgoglio è iniziata, qualche settimana fa, la nostra impresa: fare il nostro sito da zero. Sì, avete letto bene, non è stato usato neanche un template: dalla Favicon alla Chat, è tutta farina del nostro sacco.",
                    suggestion: "Non c’è bisogno di mentire, il sito ci è costato tante ore e tanto sudore (letteralmente: abbiamo beccato proprio i giorni del caldo anomalo). Per questo, se avete dei suggerimenti, non possiamo garantire che avremo le energie per applicarli, ma potete comunque provare a mandarceli attraverso la chat.",
                    learnings: "Fare un sito ci ha anche insegnato (o ricordato) tante cose: che, come diceva la pubblicità del Maxibon, 2 is megl che 1, e meglio soffrire in due che da soli; che le apparenze a volte non contano, e Java non c’entra nulla con JavaScript; che altre volte invece sì che contano, ed ecco che puoi perdere un’ora cercando di colorare un bottone di blu; che se qualcuno è importante, è meglio farglielo sapere (in CSS, utilizzando !important); che prima di fare push, devi sempre fare pull; che la sicurezza è importante, e se pensavi che nessuno ti stesse controllando, ti sbagliavi, perché Git Guardian sta sempre all’occhio; che con gli strumenti adatti si possono fare magie, perché Elia con una RAM e un hard disk solido è riuscito a far avviare Windows 10 in meno di 10 secondi; che volere è potere, e anche se non hai mai programmato, puoi diventare una JS Ninja; che le necessità sono relative, dato che si può sopravvivere con birra e patatine in sacchetto.",
                    conclusion: "Ma la cosa più bella che questo progetto ci ha confermato è che siamo ancora capaci di  divertirci con poco, e che assieme siamo inarrestabili. Dai un'occhiata alle nostre foto se non ci credi",
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
                    RSVP: "RSVP",
                    About: "Backstage",
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
                    popOverLogin: "Recuerda que, si eliges entrar con Google, se abrirá una ventana administrada directamente por Google",
                    loginGoogleIntro: "En alternativa, puedes entrar con tu cuenta Google:",
                    mailSent: "Te hemos enviado un email con la instrucciones para resetear tu contraseña",
                    weddingCode:"Código secreto",
                    wrongCode:"El código secreto no es correcto :-( ",
                    validateCode:"Valida el código",
                    hiNewUser: "Hola {{username}}",
                    confirmYourName: "Comprueba si el nombre que tienes en Google lo podemos entender :-)"
                },
                logistics:{
                },
                about:{
                    silvia1: "- Elia, dónde hacemos la web para nuestra boda? Joy, ZankYou…?",
                    elia1: "- El qué???",
                    silvia2: "- Sí, bueno, no querrás hacerla de cero?",
                    elia2: "- Obvio! Tu te crees que yo, informático, tenga que usar una web hecha por otros?",
                    challenge: "Con esta manifestación de orgullo empezó, hace algunas semanas, nuestro reto: hacer nuestra web desde cero. Sí, habéis leído bien, no hemos usado ningún triste template: desde la Favicon al Chat, todo lo hemos hecho nosotros.",
                    suggestion: "No hace falta mentir, eso nos costó tantas horas y tanto sudor (textualmente: hemos pillado justo los días de la ola de calor, imaginaros que queríamos ir a la oficina para tener aire acondicionado). Por lo tanto, si tenéis alguna sugerencia, no podemos garantizar que tengamos las energías para ponerla en práctica, pero igualmente podéis intentar enviaros vuestros comentarios a través del chat.",
                    learnings: "Hacer una web también nos ha enseñado (o recordado) muchas cosas: que dos es mejor que uno, y es mejor sufrir en dos que solos; que el aspecto a veces no es importante, y que Java no tiene nada que ver con JavaScript; que otras veces sí que es importante, y más cuando pierdes una hora intentando colorear un botón de azul; que cuando alguien es importante, es mejor hacérselo saber (en CSS, usando !important); que antes de hacer push, siempre tienes que hacer pull; que la seguridad es importante, y si creías que nadie estuviera controlándote, te equivocabas, porque Git Guardian siempre está ahí; que con los instrumentos adecuados se pueden hacer milagros, porque Elia con una RAM y un disco duro sólido ha conseguido arrancar Windows 10 en menos de 10 segundos; que querer es poder, y aunque no hayas programado en la vida, puedes transformarte en una JS Ninja; que las necesidades son relativas, porque se puede sobrevivir con cerveza y patatas chips.",
                    conclusion: "Pero la cosa mejor que este proyecto nos confirmó, es que todavía somos capaces de pasarlo bien con poca cosa, y que juntos somos lo mejor. Echa un vistazo a nuestras fotos si no te lo crees",
                }                
            }                  
        },
        fallbackLng: "en",
        debug: true,

        // have a common namespace used around the full app
        ns: ["translations", "navigation", "home", "about"],
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