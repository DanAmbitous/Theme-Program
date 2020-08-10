alert('Welcome this in the following box you can choose what font to show, here is the list of the fonts you can use Roboto, Anton, Almarai, Almendra, Black Ops One, Cabin Sketch, Caveat, Chilanka, Codystar, Dancing Script, Ewert, Faster One, Fasthand, GFS Neohellenic, Great Vibes, Kumar One, Fontdiner Swanky, Lobster, Meddon, Monofett, Norican, Notable, Pacifico, Press Start 2P, Roboto Condensed, Sacramento, Shadows Into Light, UnifrakturMaguntia NOTE: Capitalization, spelling and spacing should exactly match the name of the font!'); //Introduction + List of fonts

const theInput = prompt(); //User's input


if (theInput == 'Roboto') {  //Font output
    document.getElementById('paragraph').style.fontFamily = 'Roboto, sans-serif';
} else if (theInput == 'Roboto Condensed') {
    document.getElementById('paragraph').style.fontFamily = 'Roboto Condensed, sans-serif';
} else if (theInput == 'Anton') {
    document.getElementById('paragraph').style.fontFamily = 'Anton, sans-serif';
} else if (theInput == 'Almarai') {
    document.getElementById('paragraph').style.fontFamily = 'Almarai, sans-serif';
} else if (theInput == 'Almendra') {
    document.getElementById('paragraph').style.fontFamily = 'Almendra, sans-serif';
} else if (theInput == 'Black Ops One') {
    document.getElementById('paragraph').style.fontFamily = 'Black Ops One, sans-serif';
} else if (theInput == 'Cabin Sketch') {
    document.getElementById('paragraph').style.fontFamily = 'Cabin Sketch, sans-serif';
} else if (theInput == 'Caveat') {
    document.getElementById('paragraph').style.fontFamily = 'Caveat, sans-serif';
} else if (theInput == 'Chilanka') {
    document.getElementById('paragraph').style.fontFamily = 'Chilanka, sans-serif';
} else if (theInput == 'Codystar') {
    document.getElementById('paragraph').style.fontFamily = 'Codystar, sans-serif';
} else if (theInput == 'Dancing Script') {
    document.getElementById('paragraph').style.fontFamily = 'Dancing Script, sans-serif';
} else if (theInput == 'Ewert') {
    document.getElementById('paragraph').style.fontFamily = 'Ewert, sans-serif';
} else if (theInput == 'Faster One') {
    document.getElementById('paragraph').style.fontFamily = 'Faster One, sans-serif';
} else if (theInput == 'Fasthand') {
    document.getElementById('paragraph').style.fontFamily = 'Fasthand, sans-serif';
} else if (theInput == 'GFS Neohellenic') {
    document.getElementById('paragraph').style.fontFamily = 'GFS Neohellenic, sans-serif';
} else if (theInput == 'Great Vibes') {
    document.getElementById('paragraph').style.fontFamily = 'Great Vibes, sans-serif';
} else if (theInput == 'Kumar One') {
    document.getElementById('paragraph').style.fontFamily = 'Kumar One, sans-serif';
} else if (theInput == 'Fontdiner Swanky') {
    document.getElementById('paragraph').style.fontFamily = 'Fontdiner Swanky, sans-serif';
} else if (theInput =='Lobster') {
    document.getElementById('paragraph').style.fontFamily = 'Lobster, sans-serif';
} else if (theInput =='Meddon') {
    document.getElementById('paragraph').style.fontFamily = 'Meddon, sans-serif';
} else if (theInput =='Monofett') {
    document.getElementById('paragraph').style.fontFamily = 'Monofett, sans-serif';
} else if (theInput =='Norican') {
    document.getElementById('paragraph').style.fontFamily = 'Norican, sans-serif';
} else if (theInput =='Notable') {
    document.getElementById('paragraph').style.fontFamily = 'Notable, sans-serif';
} else if (theInput =='Pacifico') {
    document.getElementById('paragraph').style.fontFamily = 'Pacifico, sans-serif';
} else if (theInput =='Press Start 2P') {
    document.getElementById('paragraph').style.fontFamily = 'Press Start 2P, sans-serif';
} else if (theInput =='Sacramento') {
    document.getElementById('paragraph').style.fontFamily = 'Sacramento, sans-serif';
} else if (theInput =='Shadows Into Light') {
    document.getElementById('paragraph').style.fontFamily = 'Shadows Into Light, sans-serif';
} else if (theInput =='UnifrakturMaguntia') {
    document.getElementById('paragraph').style.fontFamily = 'UnifrakturMaguntia, sans-serif';
} else {
    alert('Incorrect input, refresh and put a correct font name for it work better.')
}