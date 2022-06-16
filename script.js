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
                <div class="js-div" >
                    <img src=${item.flags.png} class="img1" />
                    <div class="details">
                    <p>${item.name.common}</p>
                    <p><span style="font-weight: 800;">Population:</span> ${item.population}</p>
                    <p><span style="font-weight: 800;">Region:</span> ${item.region}</p>
                    <p><span style="font-weight: 800;">Capital:</span> ${item.capital}</p>
                    </div>
                </div>
                `
                div.addEventListener("click", () => {
                    openModal(item)
                })
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
                <div class="js-div" >
                    <img src=${item.flags.png} class="img1" />
                    <div class="details">
                    <p>${item.name.common}</p>
                    <p><span style="font-weight: 800;">Population:</span> ${item.population}</p>
                    <p><span style="font-weight: 800;">Region:</span> ${item.region}</p>
                    <p><span style="font-weight: 800;">Capital:</span> ${item.capital}</p>
                    </div>
                </div>
            `
                div.addEventListener("click", () => {
                    openModal(item)
                })
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
                    <p>${item.name.common || item.name.official}</p>
                    <p><span style="font-weight: 800;">Population:</span> ${item.population}</p>
                    <p><span style="font-weight: 800;">Region:</span> ${item.region}</p>
                    <p><span style="font-weight: 800;">Capital:</span> ${item.capital}</p>
                    </div>
                </div>
            
                `
            div.addEventListener("click", () => {
                console.log("clickj")
                openModal(item)
            })


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


const openModal = (item) => {
    showFiles(item)
    const singleDiv = document.getElementById("single-flag")
    singleDiv.classList.toggle("show-modal")

}
const closeModal = () => {
    const singleDiv = document.getElementById("single-flag")
    singleDiv.classList.toggle("show-modal")
    singleDiv.innerHTML = ""
}


let input = document.getElementById("input")
input.addEventListener("input", () => {
    input.oninput = setTimeout(() => {
        return myFunction(input.value)
    }, 400)
})


let btn = document.getElementById("btn")
const root = document.querySelector(':root')
let darkMode = false
const previousStyle = getComputedStyle(root);
btn.addEventListener("click", function() {
    darkMode = !darkMode
    if (!darkMode) {
        root.style.setProperty("--bg", "white")
        root.style.setProperty("--color", "black")
        root.style.setProperty("--dark", "white")
        root.style.setProperty("--boxShadow", "0 2px 10px 3px rgb(225, 222, 222)")
    } else {
        root.style.setProperty("--bg", "hsl(207, 26%, 17%)")
        root.style.setProperty("--color", "white")
        root.style.setProperty("--dark", "hsl(209, 23%, 22%)")
        root.style.setProperty("--boxShadow", "0 2px 10px 3px rgba(0, 0, 0, 0.2)")
    }

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

function showFiles(item) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="div-js">
        <button onclick="closeModal()" class="button"> <i class="fas fa-arrow-left"></i>Back</button>
        <div class="flex">
            <div class="img-div">
            <img src=${item.flags.png} class="img2" />
            </div>
            <div class="detail">
                <p>${item.name.common}</p>
                <div class="right">
                    <div>
                        <p><span style="font-weight: 700;">Native Name:</span> ${item.name.official}</p>
                        <p><span style="font-weight: 700;">Population:</span> ${item.population}</p>
                        <p><span style="font-weight: 700;">Region:</span> ${item.region}</p>
                        <p><span style="font-weight: 700;">Sub Region:</span> ${item.subregion}</p>
                        <p><span style="font-weight: 700;">Capital:</span> ${item.capital[0]}</p>
                    </div>
                    <div>
                        <p><span style="font-weight: 700;">Top Level Domain:</span> ${item.tld[0]}</p>
                        <p><span style="font-weight: 700;">Currencies:</span> ${Object.entries(item.currencies).map(curr => curr[1].name)}</p>
                        <p><span style="font-weight: 700;">Languages:</span> ${Object.entries(item.languages).map(lang => lang[1])}</p>
                    </div>
                </div>
                <div class="border">
                    <p>Border Countries:</p>
                    ${item?.borders?.length ? `<div>${item.borders[0]}</div>` : ""}
                    ${item?.borders?.length > 1 ? `<div>${item.borders[1]}</div>` : ""}
                    ${item?.borders?.length > 2 ? `<div>${item.borders[2]}</div>` : ""}
                </div>
            </div>
        </div>
        
    </div>
    `

    document.querySelector("#single-flag").appendChild(div);
}