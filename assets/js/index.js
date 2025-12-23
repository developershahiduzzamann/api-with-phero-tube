
function loadCatagories (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) =>{
        displayCatagories(data.categories)
    })
}

function  loadCard (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => {
        loadMainCard(data.videos)
    })
}

function displayCatagories (catagoris){
    const catagoryContainer = document.getElementById("catagori-container");
    for(const cat of catagoris){
        const catagoyiDiv = document.createElement("div");
        catagoyiDiv.innerHTML = `
        <button class="btn bg-[#D3D3D3] text-base inter font-medium hover:bg-red-500 hover:text-white">${cat.category}</button>
        `;
        catagoryContainer.append(catagoyiDiv)
    }
}

function loadMainCard(cards){
    const videoContainer = document.getElementById("video-container");
    for(const card of cards){
        const videoCard = document.createElement("div")
        videoCard.innerHTML = `
            <div class="w-[312px] h-[325px]">
                <div>
                    <div class="relative md:relative">
                        <img class="h-[200px] w-[312px] rounded-md" src="${card.thumbnail}" alt="">
                    </div>
                    <div class="bg-black inline-block text-white px-1 rounded-sm absolute  top-[21rem] right-[97rem]">
                        <h3 class="inter">3hrs 56 min ago</h3>
                    </div>
                </div>
                <div class="flex items-center gap-2 mt-5">
                    <img src="${card.profile_picture}" alt="">
                    <h2 class="font-bold text-base w-[260px]">Building a Winning UX Strategy Using the Kano Model</h2>
                </div>
                <div class="flex items-center gap-2 mt-3 ml-12">  
                    <h3 class="inter text-sm">Awlad Hossain</h3>
                    <img src="./assets/images/Group 3.png" alt="">
                </div>
                <div class="mt-3 ml-12">
                    <h3 class="inter text-sm">91K views</h3>
                </div>
            </div>
        `
        videoContainer.append(videoCard)
    }
}



loadCatagories ()
loadCard()