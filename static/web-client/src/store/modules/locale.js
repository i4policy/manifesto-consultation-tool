export default {
    state: {
        english: {
            blank: "Can't be blank",
            cant_be_same: "Old password and New password can't be the same",
            change_password: "Change Password",
            comment: "Comment",
            email_registered: "Email already registered",
            email: "Email",
            enter_email: "Enter your email...",
            enter_name: "Enter Your Name...",
            enter_new_password: "Enter your new password",
            enter_old_password: "Enter your old password",
            enter_password: "Enter your password...",
            enter_phone: "Enter Your Phone Number...",
            forgot_password: "Forgot Password?",
            highlight: "Highlight text to start annotating",
            home: "Home",
            invalid_email_or_password: "Invalid email or password",
            invalid_email: "Invalid Email Address",
            invalid_password: "Password must be 8 to 512 characters!",
            languages: "Languages",
            login: "Login",
            logout: "Logout",
            name_length: "Name must be 2 to 100 characters",
            name: "Name",
            new_password: "New Password",
            old_password: "Old Password",
            password: "Password",
            phone_number: "Phone Number",
            phone_registered: "Phone number already registered",
            please_comment: "Please provide your comment",
            register: "Register",
            remember_me: "Remember me",
            request_password_reset: "Request Password Reset",
            request_reset: "Request Reset",
            reserved: "All Rights Reserved.",
            reset_msg: "Please check your email for your password reset instructions!",
            save: "Save",
            swipe: "swipe to navigate between sections",
            whole_document: "Please provide your comment for the whole document",
            with_facebook: "Continue With Facebook",
            with_google: "Continue With Google"
        },
        french: {
            blank: "Ne peut pas être vide",
            cant_be_same: "Ancien mot de passe et Nouveau mot de passe ne peuvent pas être les mêmes",
            change_password: "Changer le mot de passe",
            comment: "commentaire",
            email_registered: "Email déjà enregistré!",
            email: "Email",
            enter_email: "Entrer votre Email...",
            enter_name: "Entrez votre nom...",
            enter_new_password: "Entrez votre nouveau mot de passe",
            enter_old_password: "Entrez votre ancien mot de passe",
            enter_password: "Tapez votre mot de passe...",
            enter_phone: "Entrez votre numéro de téléphone...",
            forgot_password: "Mot de passe oublié?",
            highlight: "Mettez en surbrillance le texte pour commencer à annoter",
            home: "Accueil",
            invalid_email_or_password: "email ou mot de passe invalide",
            invalid_email: "Adresse e-mail invalide",
            invalid_password: "Le mot de passe doit comporter entre 8 et 512 caractères!",
            languages: "les langues",
            login: "S'identifier",
            logout: "Connectez - Out",
            name_length: "Le nom doit comporter entre 2 et 100 caractères.",
            name: "prénom",
            new_password: "nouveau mot de passe",
            old_password: "ancien mot de passe",
            password: "mot de passe",
            phone_number: "Numéro de téléphone",
            phone_registered: "Numéro de téléphone déjà enregistré!",
            please_comment: "S'il vous plaît fournir votre commentaire?",
            register: "Registre",
            remember_me: "souviens-toi de moi",
            request_password_reset: "Demander la réinitialisation du mot de passe",
            request_reset: "demande de réinitialisation",
            reserved: "Tous les droits sont réservés.",
            reset_msg: "S'il vous plaît vérifier votre email pour vos instructions de réinitialisation de mot de passe!",
            save: "sauvegarder",
            swipe: "glisser pour naviguer entre les sections",
            whole_document: "Merci de fournir votre commentaire pour l'ensemble du document",
            with_facebook: "continuer avec Facebook",
            with_google: "continuer avec Google",
        },
        arabic: {
            
        }
    },
    getters: {
        i18n: (state, getter, rootState) => {
            return function(key) {
                return state[rootState.settings.locale][key];
            }
        }
    }
}