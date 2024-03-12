let city = document.querySelector("input");
let output = document.querySelector(".Output");
let submit = document.querySelector("#submit");


const options = {
    method: 'GET',

    headers: { 'X-Api-Key': 'M9KvJDgjIBIUPMJbqpCzqg==yapMGrDUAcqamfua' },
};
// let URL = ;


let weather = (event) => {
    event.preventDefault();
    fetch(`https://api.api-ninjas.com/v1/weather?city=${city.value}`, options)
    .then((response) => response.json())
        .then((value) => {
            console.log(value);
            if (value.temp == undefined) {
                alert("City not found!");
                console.log(value.temp);
            }
            else {
                output.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> ${value.temp}°C`;
                let temp = value.temp;
                let body = document.body;
                if(temp <= 10 ){
                    body.style.backgroundColor = "#708090";
                }
                else if(temp >=10 && temp<=30){
                    body.style.backgroundColor = "#F49c75";
                }
                else{
                    body.style.backgroundColor = "#FFAE42";
                }
            }
        })
}
submit.addEventListener("click", weather)