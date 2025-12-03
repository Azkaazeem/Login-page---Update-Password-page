

                       // SHOW/HIDE PASSWORD TOGGLE



        let toggles = document.querySelectorAll(".toggle-password");

        toggles.forEach(toggle => {
             function toggIcon(){
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
     
      
  