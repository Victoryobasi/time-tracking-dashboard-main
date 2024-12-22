document.getElementById('daily').addEventListener('click', daily);
document.getElementById('weekly').addEventListener('click', weekly);
document.getElementById('monthly').addEventListener('click', monthly);

const white1 = document.getElementById("daily");
  const  white2 = document.getElementById("weekly");
  const  white3 = document.getElementById("monthly");

async function daily() {


    white1.style.color = 'white';
    if (white1.style.color === 'white') {
        white2.style.color = 'hsl(236, 100%, 87%)';
        white3.style.color = 'hsl(236, 100%, 87%)';
    }
    

        const response = await fetch('data.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data);
        // console.log(data[0].timeframes.daily.current) 
         const obj1 = data[0].timeframes.daily
         obj2 = data[1].timeframes.daily
         obj3 = data[2].timeframes.daily
         obj4 = data[3].timeframes.daily
         obj5 = data[4].timeframes.daily
         obj6 = data[5].timeframes.daily
        

         const work = document.getElementById('work');
         work.innerHTML = `<h1>${obj1.current} hrs</h1>`;

         const play = document.getElementById('play');
         play.innerHTML = `<h1>${obj2.current} hrs</h1>`;

         const Study = document.getElementById('Study');
         Study.innerHTML = `<h1>${obj3.current} hrs</h1>`;

         const exercise = document.getElementById('exercise');
         exercise.innerHTML = `<h1>${obj4.current} hrs</h1>`;

         const social = document.getElementById('social');
         social.innerHTML = `<h1>${obj5.current} hrs</h1>`;

         const selfCare = document.getElementById('selfCare');
         selfCare.innerHTML = `<h1>${obj6.current} hrs</h1>`;





         const workprevious = document.getElementById('workprevious');
         workprevious.innerHTML = `<p> last week - ${obj1.previous}hrs</p>`

         const playprevious = document.getElementById('playprevious');
         playprevious.innerHTML = `<p> last week - ${obj2.previous}hrs</p>`

         const studyprevious = document.getElementById('studyprevious');
         studyprevious.innerHTML = `<p> last week - ${obj3.previous}hrs</p>`

         const exerciseprevious = document.getElementById('exerciseprevious');
         exerciseprevious.innerHTML = `<p> last week - ${obj4.previous}hrs</p>`

         const socialprevious = document.getElementById('socialprevious');
         socialprevious.innerHTML = `<p> last week - ${obj5.previous}hrs</p>`

         const selfCarePrevious = document.getElementById('selfCarePrevious');
         selfCarePrevious.innerHTML = `<p> last week - ${obj6.previous}hrs</p>`
    })
    }

    async function weekly() {

         white2.style.color = 'white';

    if (white2.style.color = 'white'){
        white1.style.color = 'hsl(236, 100%, 87%)';
        white3.style.color = 'hsl(236, 100%, 87%)';
    };
        const response = await fetch('data.json')
        .then(function (res) {
             return res.json();
         })
         .then(function (data){
            console.log(data);
            const obj1 = data[0].timeframes.weekly
            obj2 = data[1].timeframes.weekly
            obj3 = data[2].timeframes.weekly
            obj4 = data[3].timeframes.weekly
            obj5 = data[4].timeframes.weekly
            obj6 = data[5].timeframes.weekly


             const work = document.getElementById('work');
                work.innerHTML = `<h1>${obj1.current} hrs</h1>`;

                const play = document.getElementById('play');
                play.innerHTML = `<h1>${obj2.current} hrs</h1>`;

                const Study = document.getElementById('Study');
                Study.innerHTML = `<h1>${obj3.current} hrs</h1>`;

                const exercise = document.getElementById('exercise');
                exercise.innerHTML = `<h1>${obj4.current} hrs</h1>`;

                const social = document.getElementById('social');
                social.innerHTML = `<h1>${obj5.current} hrs</h1>`;

                const selfCare = document.getElementById('selfCare');
                selfCare.innerHTML = `<h1>${obj6.current} hrs</h1>`;



                 const workprevious = document.getElementById('workprevious');
                    workprevious.innerHTML = `<p> last week - ${obj1.previous}hrs</p>`

                    const playprevious = document.getElementById('playprevious');
                    playprevious.innerHTML = `<p> last week - ${obj2.previous}hrs</p>`

                    const studyprevious = document.getElementById('studyprevious');
                    studyprevious.innerHTML = `<p> last week - ${obj3.previous}hrs</p>`

                    const exerciseprevious = document.getElementById('exerciseprevious');
                    exerciseprevious.innerHTML = `<p> last week - ${obj4.previous}hrs</p>`

                    const socialprevious = document.getElementById('socialprevious');
                    socialprevious.innerHTML = `<p> last week - ${obj5.previous}hrs</p>`

                    const selfCarePrevious = document.getElementById('selfCarePrevious');
                    selfCarePrevious.innerHTML = `<p> last week - ${obj6.previous}hrs</p>`

         })
    }

    async function monthly() {

         white3.style.color = 'white';

    if (white3.style.color = 'white'){
        white1.style.color = 'hsl(236, 100%, 87%)';
        white2.style.color = 'hsl(236, 100%, 87%)';
    };

        const response = await fetch('data.json')
        .then(function (res) {
             return res.json();
         })
         .then(function (data){
            console.log(data);
            const obj1 = data[0].timeframes.monthly
            obj2 = data[1].timeframes.monthly
            obj3 = data[2].timeframes.monthly
            obj4 = data[3].timeframes.monthly
            obj5 = data[4].timeframes.monthly
            obj6 = data[5].timeframes.monthly



            const work = document.getElementById('work');
                work.innerHTML = `<h1>${obj1.current} hrs</h1>`;

                const play = document.getElementById('play');
                play.innerHTML = `<h1>${obj2.current} hrs</h1>`;

                const Study = document.getElementById('Study');
                Study.innerHTML = `<h1>${obj3.current} hrs</h1>`;

                const exercise = document.getElementById('exercise');
                exercise.innerHTML = `<h1>${obj4.current} hrs</h1>`;

                const social = document.getElementById('social');
                social.innerHTML = `<h1>${obj5.current} hrs</h1>`;

                const selfCare = document.getElementById('selfCare');
                selfCare.innerHTML = `<h1>${obj6.current} hrs</h1>`;



                 const workprevious = document.getElementById('workprevious');
                    workprevious.innerHTML = `<p> last week - ${obj1.previous}hrs</p>`

                    const playprevious = document.getElementById('playprevious');
                    playprevious.innerHTML = `<p> last week - ${obj2.previous}hrs</p>`

                    const studyprevious = document.getElementById('studyprevious');
                    studyprevious.innerHTML = `<p> last week - ${obj3.previous}hrs</p>`

                    const exerciseprevious = document.getElementById('exerciseprevious');
                    exerciseprevious.innerHTML = `<p> last week - ${obj4.previous}hrs</p>`

                    const socialprevious = document.getElementById('socialprevious');
                    socialprevious.innerHTML = `<p> last week - ${obj5.previous}hrs</p>`

                    const selfCarePrevious = document.getElementById('selfCarePrevious');
                    selfCarePrevious.innerHTML = `<p> last week - ${obj6.previous}hrs</p>`


         })
    }

//     function updateChart(data) {
 
    
    
