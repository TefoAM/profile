console.log("it's working");

let theme = localStorage.getItem('theme');

if (theme == null){
    setTheme('light');
} else{
    setTheme(theme);
}


let themeDots = document.getElementsByClassName('theme-dot');

for (var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode;
        console.log('Option clicked: ', mode);
        setTheme(mode);
        }
    );
}

function setTheme(mode){
    switch(mode){
        case 'light':{
            document.getElementById('theme-style').href = 'style.css';
            document.getElementById('git').src = 'images/git-black.png';
            document.getElementById('website').src = 'images/this-white.png';
            changeColors('light');
            break;
        }
        case 'blue':
            document.getElementById('theme-style').href = 'blue.css';
            document.getElementById('git').src = 'images/git-white.png';
            document.getElementById('website').src = 'images/this-blue.png';
            changeColors('blue');
            break;
        case 'green':
            document.getElementById('theme-style').href = 'green.css';
            document.getElementById('website').src = 'images/this-green.png';
            changeColors('green');
            break;
        case 'purple':
            document.getElementById('theme-style').href = 'purple.css';
            document.getElementById('git').src = 'images/git-white.png';
            document.getElementById('website').src = 'images/this-purple.png';
            changeColors('purple');
            break;
    }

    localStorage.setItem('theme', mode)
}

function changeColors(mode){
    document.getElementById('top').style.backgroundImage = 'url(images/bg-'+mode+'.jpg)';
    document.getElementById('bottom').style.backgroundImage = 'url(images/bg-'+mode+'.jpg)';
    document.getElementById('contact-form').style.backgroundImage = 'url(images/bg-'+mode+'.jpg)';

}

//document.getElementsByClassName('s1').style.backgroundImage = 'url(images/bg-blue-purple.jpg)';