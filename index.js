const images = [

    {
        pic: "./apple.png",
        title: "A for",
        name:"Apple",

    },

 {
        pic: "./ball.png",
     title: "B for",
        name:"Ball",

    },
 
  {
        pic: "./car.png",
      title: "C for",
        name:"Car",

    },
  
   {
        pic: "./dol.png",
       title: "D for",
       name: "Dolphin",

    },
   
    {
        pic: "./ele.png",
        title: "E for",
        name:"Elephant",

    },
     {
        pic: "./flo.png",
         title: "F for",
        name:"Flower",

    },
      {
        pic: "./grapes.png",
          title: "G for",
        name:"Giraffe",

    },

    

];

index = 0;


const imgDiv = document.getElementById("imgDiv");
const title = document.getElementById("title");
const name1 = document.getElementById("name");
 const nextBtn = document.getElementById("nextBtn");

const preBtn=document.getElementById("preBtn");






function showImg() {

    const pictureDiv = document.getElementById("pictureDiv");
    const btnOne = document.getElementById("btnOne");

    pictureDiv.classList.remove("d-none");
    btnOne.classList.add("d-none");

    loadImg();

    function loadImg() {

        



        if (index == 6 || index== 0) {
           
            if (index == "6") {
                nextBtn.classList.add("d-none");
                welcome();
            }
            else {
                preBtn.classList.add("d-none");
                welcome();
            }

            
        }

        else {
            welcome();
        }
       



    }





    function welcome() {
        


         const Image = images[index];


       
        title.innerText = Image.title;
        name1.innerText = Image.name;
 

        imgDiv.innerHTML =
            `
        <img src="${Image.pic}" class="img-fluid" style="width: 300px; height: 300px;" >
        
        `
    }

   
nextBtn.addEventListener("click", () => {
    
    index++;
    preBtn.classList.remove("d-none");
    loadImg();

    
    

})

    preBtn.addEventListener("click", () => {
        
        index--;
        nextBtn.classList.remove("d-none");
        loadImg();

    })


}


