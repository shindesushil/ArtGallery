
let menuOn = false;

const toggleMenu = () => {

    if(menuOn)
    {
        document.getElementById('mombileMenu').style.width = '0px';
        document.getElementById('mombileMenu').style.display = 'none'; 
        menuOn = false
    }
    else
    {
        document.getElementById('mombileMenu').style.width = '70%';
        document.getElementById('mombileMenu').style.display = 'block';
        menuOn = true;
    }
   
   

}

