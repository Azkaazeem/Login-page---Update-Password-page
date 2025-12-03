// CONFIGURATION FOR SUPABASE

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
console.log(createClient);
const supaKey = 'https://jzxxnlisarhqbdkqobmy.supabase.co';
const supaUrl = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eHhubGlzYXJocWJka3FvYm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNDEyMzQsImV4cCI6MjA3NjgxNzIzNH0.blYwoj2ObZ0Om5UoARD07HNFk9xXvfKmXIfihRIzf8Q';

const supaBase = createClient(supaKey, supaUrl);



// ADD UPDATE PASSWORD FUNCTIONALITY

let newPassInp = document.getElementById("newPass");
let conPassInp = document.getElementById("confirmPass");
let ubdBtn = document.getElementById("updatePassBtn");

async function newPass() {
try {
    


    const { data, error } = await supaBase.auth.updateUser({
        password: newPassInp.value
    });

    if (error) {
    console.log(error.message);
    
    }else{
        Swal.fire({
                title: 'Success!',
                text: 'Your password has been updated successfully. Redirecting to login...',
                icon: 'success',
                timer: 3000,
                showConfirmButton: false
            }).then(() => {
                // User ko login page par bhej dein
                location.href = 'https://azkaazeem.github.io/Login-page/'; // Isay apne login page ka URL dein
            });
    } 

} catch (error) {
    
}


} 

ubdBtn.addEventListener ("click", newPass)







































// SHOW/HIDE PASSWORD TOGGLE



let toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(toggle => {
    function toggIcon() {
        let id = toggle.getAttribute("data-target");
        let input = document.getElementById(id);

        if (input.type === "password") {
            input.type = "text";
            toggle.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            input.type = "password";
            toggle.classList.replace("fa-eye", "fa-eye-slash");
        }

    }

    toggle && toggle.addEventListener("click", toggIcon)
}

)


