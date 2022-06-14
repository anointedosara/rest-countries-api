let myFunction = async(input) => {
    try {
        if (input) {
            document.querySelector(".spinner").style.display = "flex"
            let data = await axios.get(`https://restcountries.com/v3.1/name/${input}`)
            console.log(data.data)
            document.querySelector("#flag-container").innerHTML = ""

            data.data.forEach(item => {

                let div = document.createElement("div");
                div.innerHTML = `
                <div class="js-div">
                    <img src=${item.flags.png} class="img1" />
                    <div class="details">
                    <p>${item.name.common}</p>
                    <p><span style="font-weight: 800;">Population:</span> ${item.population}</p>
                    <p><span style="font-weight: 800;">Region:</span> ${item.region}</p>
                    <p><span style="font-weight: 800;">Capital:</span> ${item.capital}</p>
                    </div>
                </div>
            `

                document.querySelector("#flag-container").appendChild(div);
                document.querySelector(".spinner").style.display = "none"
            });
        } else {
            getAll()
        }

    } catch (error) {
        console.log(error)
        document.querySelector("#flag-container").innerHTML = "No country found"
        document.querySelector(".spinner").style.display = "none"
    }
}

let getRegion = async(select) => {
    try {
        if (select) {
            document.querySelector(".spinner").style.display = "flex"
            let data = await axios.get(`https://restcountries.com/v3.1/region/${select}`)
            console.log(data.data)
            document.querySelector("#flag-container").innerHTML = ""

            data.data.forEach(item => {

                let div = document.createElement("div");
                div.innerHTML = `
                <div class="js-div">
                    <img src=${item.flags.png} class="img1" />
                    <div class="details">
                    <p>${item.name.common}</p>
                    <p><span style="font-weight: 800;">Population:</span> ${item.population}</p>
                    <p><span style="font-weight: 800;">Region:</span> ${item.region}</p>
                    <p><span style="font-weight: 800;">Capital:</span> ${item.capital}</p>
                    </div>
                </div>
            `

                document.querySelector("#flag-container").appendChild(div);
                document.querySelector(".spinner").style.display = "none"
            });
        } else {
            getAll()
        }

    } catch (error) {
        console.log(error)
        document.querySelector("#flag-container").innerHTML = "No country found"
        document.querySelector(".spinner").style.display = "none"
    }
}

let getAll = async() => {
    try {
        document.querySelector(".spinner").style.display = "flex"
        let data = await axios.get(`https://restcountries.com/v3.1/all`)
        console.log(data.data)


        data.data.forEach(item => {

            let div = document.createElement("div");
            div.innerHTML = `
                <div class="js-div">
                    <img src=${item.flags.png} class="img1" />
                    <div class="details">
                    <p>${item.name.common}</p>
                    <p><span style="font-weight: 800;">Population:</span> ${item.population}</p>
                    <p><span style="font-weight: 800;">Region:</span> ${item.region}</p>
                    <p><span style="font-weight: 800;">Capital:</span> ${item.capital}</p>
                    </div>
                </div>
            `


            document.querySelector("#flag-container").appendChild(div);
            document.querySelector(".spinner").style.display = "none"
        });





    } catch (error) {
        document.querySelector("#flag-container").innerHTML = "No country found"
        console.log(error)
        document.querySelector(".spinner").style.display = "none"
    }
}

getAll()


let input = document.getElementById("input")

input.addEventListener("input", () => {

    input.oninput = setTimeout(() => {
        return myFunction(input.value)

    }, 400)
})


let click = document.getElementsByClassName("js-div")

for (let i = 0; i < click.length; i++) {

    click[i].addEventListener("click", () => {
        return myFunction(click[i].value)
    })
}

input.addEventListener("input", () => {

    input.oninput = setTimeout(() => {
        return myFunction(input.value)

    }, 400)
})


let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    let jsdiv = document.getElementsByClassName("js-div")
    for (let i = 0; i < jsdiv.length; i++) {
        jsdiv[i].classList.toggle("js")
    }
    document.getElementById("body").classList.toggle("bg")
    document.getElementById("btn").classList.toggle("bg")
    document.querySelector(".div1").classList.toggle("box")
    document.querySelector(".div4").classList.toggle("shadow")
    document.querySelector(".div4 input").classList.toggle("input")
    document.querySelector(".div5").classList.toggle("shadow")
    document.querySelector(".div6").classList.toggle("shade")
    document.querySelector(".stick").classList.toggle("sticky")
    document.querySelector(".region").classList.toggle("shad")
    btn.classList.toggle("none")
    document.querySelector(".navbar").classList.toggle("nav")
})

let drop = document.querySelector(".div5")

drop.addEventListener("click", () => {
    document.querySelector(".div6").classList.toggle("show")
})

let select = document.querySelectorAll(".region")

for (let i = 0; i < select.length; i++) {

    select[i].addEventListener("click", () => {
        getRegion(select[i].textContent)
        document.querySelector(".div6").classList.toggle("show")
    })

}


let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
})