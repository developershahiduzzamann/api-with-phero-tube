
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

const musicVideo = (id)=>{
    const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
    .then(response => response.json())
    .then(data => loadMainCard(data.category))
};


function displayCatagories (catagoris){
    const catagoryContainer = document.getElementById("catagori-container");
    for(const cat of catagoris){
        const catagoyiDiv = document.createElement("div");
        catagoyiDiv.innerHTML = `
        <button onclick ="musicVideo(${cat.category_id})" class="btn bg-[#D3D3D3] text-base inter font-medium hover:bg-red-500 hover:text-white">${cat.category}</button>
        `;
        catagoryContainer.append(catagoyiDiv)
    }
}


const  loadMainCard=(cards)=>{
    const videoContainer = document.getElementById("video-container");  
        videoContainer.innerHTML = "";
    if(cards.length === 0){
        videoContainer.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center mt-36 text-center">
                <img src="./assets/images/Icon.png" alt="">
                <h1 class="inter font-bold text-[32px]">Oops!! Sorry, There is no <span class="block text-center">content here</span></h1>
            </div>
        `;
    return;
    }
        cards.forEach((card) =>{
        const videoCard = document.createElement("div")
        
        videoCard.innerHTML = `
            <div class="w-[312px] h-[325px]">
                <div class="relative">
                    <img class="w-[312px] h-[200px] object-cover rounded-md" src="${card.thumbnail}" alt="">
                    <h3 class="inter absolute bg-black text-white px-1 rounded-sm bottom-4 right-4">3hrs 56 min ago</h3> 
                </div>
                <div class="flex items-center gap-2 mt-5">
                    <div class="h-[40px] w-[40px] object-cover rounded-full">
                        <img class="rounded-full h-[40px] w-[40px] object-cover" src="${card.authors[0].profile_picture}" alt="">
                    </div>
                    <h2 class="font-bold text-base w-[260px]">${card.title}</h2>
                </div>
                <div class="flex items-center gap-2 mt-3 ml-12">  
                    <h3 class="inter text-sm">${card.authors[0].profile_name}</h3>
                    <img src="./assets/images/Group 3.png" alt="">
                </div>
                <div class="mt-3 ml-12">
                    <h3 class="inter text-sm">${card.others.views} Views</h3>
                </div>
            </div>
        `
        videoContainer.appendChild(videoCard)
        })
            
       
}

loadCatagories ()





