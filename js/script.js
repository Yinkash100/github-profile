window.onload = ()=> {
    //===toggles the visibility of the navigation dropdowns===//
    document.getElementById('nav-toggle')
        .addEventListener('click', ()=>{
            document.getElementById('mobile-nav').classList.toggle('show-ddown')
        })
    document.getElementById('repo-toggle').addEventListener('click', ()=>{
        document.getElementById('repo-ddown').classList.toggle('hide')
    })
    document.getElementById('profile-toggle').addEventListener('click', ()=>{
        document.getElementById('profile-ddown').classList.toggle('hide')
    })


    //===toggles the visibility of the repositrory filter dropdown===//
    document.getElementById('type-select').addEventListener('click', ()=>{
        document.getElementById('type-ddown').classList.toggle('hide')
    })
    document.getElementById('type-ddown-close').addEventListener('click', ()=>{
        document.getElementById('type-ddown').classList.toggle('hide')
    })

    document.getElementById('language-filter-toggle').addEventListener('click', ()=>{
        document.getElementById('language-ddown').classList.toggle('hide')
    })
    document.getElementById('language-ddown-close').addEventListener('click', ()=>{
        document.getElementById('language-ddown').classList.toggle('hide')
    })

    document.getElementById('sort-filter-toggle').addEventListener('click', ()=>{
        document.getElementById('sort-ddown').classList.toggle('hide')
    })
    document.getElementById('sort-ddown-close').addEventListener('click', ()=> {
        document.getElementById('sort-ddown').classList.toggle('hide')
    })

    //======Helps fix the repository nav at certain scroll height==//
    const tabContainer = document.getElementById('tabs-container');
    const tabsProfile = document.getElementById('tabs-profile');
    const tabContainerSM = document.getElementById('tabs-container-sm');
    window.onscroll = function() {

        // fix or unfix nav tabs on large screen
        if (window.scrollY > 60) {
            tabContainer.classList.add("fixed");
        } else {
            tabContainer.classList.remove("fixed");
        }

        // add/remove profile from fixed tab (large screen)
        if(window.scrollY > 275){
            tabsProfile.classList.remove("hide")
        }
        else{
            tabsProfile.classList.add("hide")
        }

        // fix or unfix nav tabs on mobile devices
        if (window.scrollY > 495) {
            tabContainerSM.classList.add("fixed");
        } else {
            tabContainerSM.classList.remove("fixed");
        }
    };

}