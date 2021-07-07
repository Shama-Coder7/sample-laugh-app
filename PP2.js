

//GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#Joke');
const jokeBtn = document.querySelector('#jokeBtn');
//const jokeBtn2 = document.querySelector('#jokeBtn2');
const jokeBtn3 = document.querySelector('#jokeBtn3');


const generateJokes = async () => {

    try{
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        
      const res  =  await fetch('https://icanhazdadjoke.com', setHeader);
      const data =  await res.json();
      jokes.innerHTML= data.joke;
    }catch(err){
        console.log(`the error is ${err}`);
    }
}

    jokeBtn.addEventListener('click', generateJokes);
    generateJokes();
    