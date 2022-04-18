const menu=[
    {
        id:1,
        name:"canjeero",
        price:250,
        category:"quraac",
        image:"f1.jpg",


    },
    {
        id:2,
        name:"bariis",
        price:350,
        category:"qado",
        image:"f2.jpg",
        

    },
    {
        id:3,
        name:"cambuulo",
        price:350,
        category:"casho",
        image:"f3.jpg",
        

    },
    {
        id:4,
        name:"casiro",
        price:350,
        category:"shaah",
        
        image:"f4.jpg",
        

    },
    {
        id:5,
        name:"casiro",
        price:350,
        category:"shaah",
        
        image:"f4.jpg",
        

    },
    {
        id:6,
        name:"casiro",
        price:350,
        category:"shaah",
        
        image:"f4.jpg",
        

    },
    {
        id:7,
        name:"casiro",
        price:350,
        category:"shaah",
        
        image:"f4.jpg",
        

    },
    {
        id:8,
        name:"casiro",
        price:350,
        category:"shaah",
        
        image:"f4.jpg",
        

    },
]
let cont=document.querySelector('.container')
// loop the array object
menu.forEach(x =>{

cont.innerHTML+=`
<div class="Child">
<img src="${x.image}">
<div  class="innerchild">
<p>${x.name}</p>
<p>${x.price}</p>

</div>
<p class="category">${x.category}</p>

</div>

`

})








let bar=document.querySelector('.bars')
let nav=document.querySelector('nav')
bar.addEventListener('click',function(){
    // nav.style.display="block"
    nav.classList.toggle('show')
})
let fa=document.querySelector('.farari')
bar.addEventListener('click',function(){
    fa.classList.toggle('cmo')
})
let kaku=document.querySelector('.eng')
bar.addEventListener('click',function(){
    kaku.classList.toggle('manow')
})