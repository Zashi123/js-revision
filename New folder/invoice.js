let form_container=document.querySelector('.form_container')
let kudar=document.querySelector('#Add')
// const Adding_invoice=()=>{
//     let cont=document.createElement('div')  
//     // <div class="container">
//     cont.className="container"
//     //create  3 inputs
//     let input1=document.createElement('input')
//     input1.type='text'
//     input1.placeholder='Enter name'
//     // second input
//     let input2=document.createElement('input')
//     input2.type='number'
//     input2.placeholder='Enter phone'
//     //third input
//     let input3=document.createElement('input')
//     input3.type='text'
//     input3.placeholder='Enter location'
//     let fa=document.createElement('i')
//     fa.className='fa fa-times'

// //adding child
// cont.appendChild(input1)
// cont.appendChild(input2)
// cont.appendChild(input3)
// cont.appendChild(fa)


// form_container.appendChild(cont)


// }
// kudar.addEventListener('click',Adding_invoice)

kudar.addEventListener('click',function(){
    form_container.innerHTML+=`
    
    <div class="container">
     <input type="text">
     <input type="text">
     <input type="text">
     <i class ="fa fa-times"></i>
 
 </div> <br>
     `
})
form_container.addEventListener('click',function(e){
    // form_container.innerHTML=''
    let target=e.target
    if(target.classList.contains("fa-times"))
    target.parentNode.remove()
    // form_container.innerHTML=''



})

   

