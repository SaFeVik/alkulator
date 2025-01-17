const drikkevarerEl = document.querySelector('#alkulator .drikkevarer')
const alkulatorPilsEl = document.querySelector('#alkulator .pils')
const pilsulatorPilsEl = document.querySelector('#pilsulator .pils')
const nyEl = document.querySelector('#alkulator .ny')

const pilsulatorEl = document.querySelector('#pilsulator')
const prisEl = pilsulatorEl.querySelector('.pris')
const prosentEl = pilsulatorEl.querySelector('.prosent')
const mengdeEl = pilsulatorEl.querySelector('.mengde')

prisEl.addEventListener('input', kalkulerPilsulator)
prosentEl.addEventListener('input', kalkulerPilsulator)
mengdeEl.addEventListener('input', kalkulerPilsulator)


nyEl.onclick = nyDrikke

function nyDrikke() {
    const newDrikkevare = document.createElement('div')
    newDrikkevare.className = 'drikkevare'
    newDrikkevare.innerHTML = `
        <div class="box">
            <input type="number" class="antall" value="1">
            <i class="fa fa-arrow-up-wide-short"></i>
        </div>
        <div class="box">
            <input type="number" class="prosent">
            <p>%</p>
        </div>
        <div class="box">
            <input type="number" class="mengde">
            <p>ML</p>
        </div>
        <button class="slett"><i class="fa fa-trash"></i></button>
    `

    drikkevarerEl.appendChild(newDrikkevare)
    oppdaterBokser(newDrikkevare)
}


function oppdaterBokser(drikkevare) {
    const antallEl = drikkevare.querySelector('.antall')
    const prosentEl = drikkevare.querySelector('.prosent')
    const mengdeEl = drikkevare.querySelector('.mengde')
    const slettEl = drikkevare.querySelector('.slett')

    if (first) {
        slettEl.addEventListener('click', () => {
            slettEl.style.backgroundColor = 'red'
            setTimeout(() => {
                slettEl.style.backgroundColor = 'rgb(239,239,239)'
            }, 300)
        })
        first = false
    } else {
        slettEl.addEventListener('click', () => {
            drikkevare.remove()
            kalkulerAlkulator()
        })
    }
    antallEl.addEventListener('input', kalkulerAlkulator)
    prosentEl.addEventListener('input', kalkulerAlkulator)
    mengdeEl.addEventListener('input', kalkulerAlkulator)
}
let first = true
document.querySelectorAll('#alkulator .drikkevare').forEach(oppdaterBokser)


function kalkulerAlkulator() {
    let antallPils = 0
    document.querySelectorAll('#alkulator .drikkevare').forEach(drikkevare => {
        const antallEl = drikkevare.querySelector('.antall')
        const prosentEl = drikkevare.querySelector('.prosent')
        const mengdeEl = drikkevare.querySelector('.mengde')
        if (antallEl.value != "" & prosentEl.value != "" & mengdeEl.value != "") {
            antallPils += antallEl.value * ((prosentEl.value * mengdeEl.value) / 4.5) / 500
        }
    })
    alkulatorPilsEl.innerHTML = `PILS: ${Math.round(antallPils * 100) / 100}`
}

function kalkulerPilsulator() {
    const pris = pilsulatorEl.querySelector('.pris').value
    const prosent = pilsulatorEl.querySelector('.prosent').value/100
    const mengde = pilsulatorEl.querySelector('.mengde').value
    if (pris && prosent && mengde) {
        ppp = Math.round(pris / ((prosent * mengde) / (0.045 * 500)) * 100) / 100
        console.log(ppp)
        pilsulatorPilsEl.innerHTML = `PPP: ${ppp}kr`
    } else {
        pilsulatorPilsEl.innerHTML = "PPP: 0kr"
    }

}