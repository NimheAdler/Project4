//async function to separate the process in defined steps in order to make it clearer.
async function handleSubmit(event, x , y, z, error, text) {
    event.preventDefault();

    //first we will create the const for the response that will await for the info to be fetched in our localhost in order to be given.
    const response = await fetch("http://localhost:8081/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text.value,
        }),
        credentials: "same-origin",
      });

      console.log(response);
      try {
        const data = await response.json();
        console.log(response);
        if( data.agreement === undefined) {
            x.innerHTML = "";
            y.innerHTML = "";
            z.innerHTML = "";
        }
        else{
            x.innerHTML = data.irony;
            y.innerHTML = data.subjectivity;
            z.innerHTML = data.confidence;
            error.innerHTML = "";
        }
        //generic error in case something failed during the process. There is another one in index.html in case the text submited is too short.
      }catch (error) {
        console.log(error);
        error.innerHTML = "Oops...something went wrong!";
      }
    }

export {handleSubmit}