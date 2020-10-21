document.getElementById('area').addEventListener('click', () => {
        
    const inputRadio = document.getElementById('radio').value;
    console.log(inputRadio);

    console.log(typeof(inputRadio));

    if(isNaN(inputRadio)){
        alert("The value introduced is not a number, please type a number into the field");
    } else if ((inputRadio % 1) !== 0) {
        alert("The value introduced is not a natural number, please type a natural number into the field");
    } else if (inputRadio <= 0) {
        alert("The value introduced needs to be greater than 0, please type a natural number greater than 0 into the field");
    }else {
    let sphereArea;
    let sphereText;
    console.log(typeof(sphereArea));

        sphereArea = (4 * (Math.PI) * (Math.pow(inputRadio, 2))); 
        console.log(`The sphere has an Area of ${sphereArea}`);
        sphereText = sphereArea.toString();
        console.log(typeof(sphereText));
        console.log(sphereText);

        document.getElementById('resultado').value = sphereText;

       
    }
}
)

document.getElementById('volume').addEventListener('click', () => {
    
    const inputRadio = document.getElementById('radio').value;
    console.log(inputRadio);

    console.log(typeof(inputRadio));
    if(isNaN(inputRadio)){
        alert("The value introduced is not a number, please type a number into the field");
    } else if ((inputRadio % 1) !== 0) {
        alert("The value introduced is not a natural number, please type a natural number into the field");
    } else if (inputRadio <= 0) {
        alert("The value introduced needs to be greater than 0, please type a natural number greater than 0 into the field");
    }else {
    let sphereVolume;
    let sphereText;
    console.log(typeof(sphereVolume));

        sphereVolume = ((4/3) * (Math.PI) * (Math.pow(inputRadio, 3))); 
        console.log(`The sphere has a Volume of ${sphereVolume}`);
        sphereText = sphereVolume.toString();
        console.log(typeof(sphereText));
        console.log(sphereText);

        document.getElementById('resultado').value = sphereText;
        }
    }
    )            

