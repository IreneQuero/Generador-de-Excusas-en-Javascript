
    window.onload = function() {
        let excuse = document.querySelector("#excuse");
        let generateExcuse = () => {
            let who = ['the dog','my granma','his turtle','my bird'];
            let action = ['eat','pissed','crushed','broked'];
            let what = ['my homework', 'the keys', 'the car'];
            let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

            let whoIndx = Math.floor(Math.random() * who.length);
            let actionIndx = Math.floor(Math.random() * action.length);
            let whatIndx = Math.floor(Math.random() * what.length);
            let whenIndex = Math.floor(Math.random() * when.length);
            let result =
                who[whoIndx] +
                " " +
                action[actionIndx] +
                " " +
                what[whatIndx] +
                " " +
                when[whenIndex];
            console.log(result);
            return result;
        };
        excuse.innerHTML = generateExcuse();
    };
