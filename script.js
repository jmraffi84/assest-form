let form = document.querySelector('form')
let personGender = document.querySelectorAll(".checkgen")

function check(e){
 let data = e.getAttribute('value')
  if(data=='false'){
    e.setAttribute('value','true')
    // console.log(data);
  }else{
    e.setAttribute('value','false')
  }
}
function gen(e){
 let chooseData = e.getAttribute('value')
 if(chooseData=='false'){
  e.setAttribute('value','true')
 }else{
  e.setAttribute('value','false')
 }
}
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  // console.log('please fill all')
  let fname = document.querySelector('input[placeholder="Name"]')
  let lname = document.querySelector('input[placeholder="LastName"]')
  let address1 = document.querySelector('input[placeholder="FlatNo"]')
  let pincode = document.querySelector('input[placeholder="PinCode"]')
  let gender = document.querySelectorAll('input[type="radio"]')
  let food = document.querySelectorAll('input[type="checkbox"]')
  let state = document.querySelector('input[placeholder="State"]')
  let country = document.querySelector('input[placeholder="Country"]')

  // let count = 0;

  console.log(gender)
for(let i of gender){
  if(i.getAttribute('value') == 'true'){
  let genoutput = document.querySelector(`[for="${i.getAttribute('for')}"]`)
  genoutput = genoutput.innerText;
  console.log(genoutput)
  }
}
// let count =0
  for(let i of food){
    // count++;
    if(i.getAttribute('value') == 'true'){
    //   count++;
        let output = document.querySelector(`[for="${i.getAttribute('for')}"]`)
        output = output.innerText;
        console.log(output);
      }else{
        i.getAttribute('value') == 'false'
      }

  }

  
  // if(fname.value =='' && pincode.value=='' ){

    let tr_data = document.createElement('tr')

    let td1 = document.createElement('td')
        td1.innerText = fname.value;
        tr_data.append(td1)
    
    let td2 = document.createElement('td')
        td2.innerText = lname.value;
        tr_data.append(td2)

    let td3 = document.createElement('td')
        td3.innerText = address1.value;
        tr_data.append(td3)
    let td4 = document.createElement('td')
        td4.innerText = pincode.value;
        tr_data.append(td4)

    let td5 = document.createElement('td')
        td5.innerText = gender.value;
        tr_data.append(td5)

    let td6 = document.createElement('td')
        td6.innerText = food.value;
        tr_data.append(td6)
    let td7 = document.createElement('td')
        td7.innerText = state.value;
        tr_data.append(td7)
    let td8 = document.createElement('td')
        td8.innerText = country.value;
        tr_data.append(td8)

    let body = document.querySelector('tbody')
        body.append(tr_data)




        // let wholedoc = document.querySelector('.parent')
        // // console.log(wholedoc)
        // let pareel = document.createElement('p')
        // pareel.classList.add('.successMsg') 
        // // console.log(pareel) 
        
        // pareel.innerText ='Please check all fiels are completed*'
        // pareel.style.color = 'red'
        // console.log(pareel)
        // wholedoc.append(pareel);
        // console.log(wholedoc) 

      
  // }else{
    
    // let wholedoc = document.querySelector('.parent')
    // console.log(wholedoc)
    // let pareel = document.createElement('p')
    // pareel.classList.add('.successMsg') 
    // // console.log(pareel) 
    
    // pareel.innerText ='Your data shared successfully'
    // // pareel.innerText.style.color = 'red'
    // console.log(pareel)
    // wholedoc.append(pareel);
    // console.log(wholedoc)
  // }
    
  
  fname.value = '';
  lname.value='';
  address1.value='';
  pincode.value='';
  food.value='';
  state.value='';
  country.value='';
 }) 