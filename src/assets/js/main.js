
    window.onload = function() {
        let excuse = document.querySelector("#excuse");
        let generateExcuse = () => {
            let who = ['the dog','my granma','his turtle','my bird'];
            let what = ['eat','pissed','crushed','broked'];
            let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

            let whoIndx = Math.floor(Math.random() * who.length);
            let whatIndx = Math.floor(Math.random() * what.length);
            let whenIndex = Math.floor(Math.random() * when.length);
            let result =
                who[whoIndx] +
                " " +
                what[whatIndx] +
                " " +
                when[whenIndex];
            console.log(result);
            return result;
        };
        excuse.innerHTML = generateExcuse();
    };
