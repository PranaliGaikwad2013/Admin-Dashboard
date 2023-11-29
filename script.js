const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector(".offcanvas-body");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}


let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

 sidebarToggle.addEventListener("click", () => {
sidebar.classList.toggle("close");
     if(sidebar.classList.contains("close")){
          localStorage.setItem("status", "close");
      }else{
         localStorage.setItem("status", "open");
     }
     if(sidebar.classList.contains("close")){
          body.classList.add("overflow-hidden");
          // document.querySelector(".dashboard").style.filter = "brightness(0.5)"
      }
      else{
          body.classList.remove("overflow-hidden");
         // document.querySelector(".dashboard").style.filter = "brightness(1)"

     }
  })
/*=============for side dropdown=========*/
const allDropdown = document.querySelectorAll('.offcanvas-body .side-dropdown');
const menuitems = document.getElementById('offcanvas-body');

allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})
/*=============for profile dropdown=============*/
const profile = document.querySelector('.top .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})
// fro dashboard overlay
function closedashoverlay(){
    let dashOverlay = document.getElementsByClassName("dashboard-overlay");
    console.log(dashOverlay);
}
