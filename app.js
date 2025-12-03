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


async function newPass(e) {
    e.preventDefault();

    console.log("Button is clicked!!!!");

    if (!newPassInp.value && !conPassInp.value) {
        console.log("Input is Empty!!");
        Swal.fire({
            title: "Password fields required!",
            text: "Please enter New password and Confirm password.",
            icon: "warning",
            background: "#f9fbfc",
            color: "#003b46",
            confirmButtonColor: "#003b46",
            confirmButtonText: "OK",
            padding: "20px",
            borderRadius: "15px",
            customClass: {
                popup: "glass-alert"
            }
        })

        return;
    }

    if (newPassInp.value !== conPassInp.value) {

        console.log("Passwords are not equal!!");

        Swal.fire({
            title: "Password Do Not Match",
            text: "The New Password and Confirm Password fields must be identical..",
            icon: "warning",
            background: "#f9fbfc",
            color: "#003b46",
            confirmButtonColor: "#003b46",
            confirmButtonText: "OK",
            padding: "20px",
            borderRadius: "15px",
            customClass: {
                popup: "glass-alert"
            }
        })

        return;
    }


try {

    const { data, error } = await supaBase.auth.updateUser({
        password: newPassInp.value
    });

    if (error) {
        console.log(error.message);
        Swal.fire({
            title: "Updation Failed!",
            text: error.message,
            icon: "error",
            draggable: true,
            background: "#f9fbfc",
            color: "#003b46",
            confirmButtonColor: "#003b46",
            confirmButtonText: "OK",
            padding: "20px",
            borderRadius: "15px",
            customClass: {
                popup: "glass-alert"
            }
        }).then(() => {
            newPassInp.value = "";
            conPassInp.value = "";
        })


    } else {
        Swal.fire({
            title: "Success!",
            text: "Your password has been updated successfully. Redirecting to login.",
            icon: "success",
            draggable: true,
            timer: 3000,
            showConfirmButton: false,
            background: "#f9fbfc",
            color: "#003b46",
            padding: "20px",
            borderRadius: "15px",
            customClass: {
                popup: "glass-alert"
            }

        })
            .then(() => {
                location.href = 'https://azkaazeem.github.io/Login-page/';
            });
    }

} catch (err) {
    console.log(err)
    Swal.fire({
        title: "System error!",
        html: `Something went wrong internally! <br></br> <b>${err.message || "Unknown error"}</b>`,
        icon: "error",
        background: "#f9fbfc",
        color: "#003b46",
        confirmButtonColor: "#003b46",
        confirmButtonText: "Report issue",
        padding: "20px",
        borderRadius: "15px",
        customClass: {
            popup: "glass-alert"
        }
    }).then(() => {
            newPassInp.value = "";
            conPassInp.value = "";

    })
}
}

ubdBtn.addEventListener("click", newPass)


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

        console.log("Cutie Eye Icon is clicked!!!!");


    }

    toggle && toggle.addEventListener("click", toggIcon)
}

)


