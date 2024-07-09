const drikkevarerEl = document.querySelector('.drikkevarer')
const pilsEl = document.querySelector('#pils')
const nyEl = document.querySelector('#ny')
nyEl.onclick = nyDrikke

function nyDrikke() {
    const newDrikkevare = document.createElement('div')
    newDrikkevare.className = 'drikkevare'
    newDrikkevare.innerHTML = `
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
    const prosentEl = drikkevare.querySelector('.prosent')
    const mengdeEl = drikkevare.querySelector('.mengde')
    const slettEl = drikkevare.querySelector('.slett')

    if (first){
        slettEl.addEventListener('click', () => {
                slettEl.style.backgroundColor = 'red'
                setTimeout(() => {
                    slettEl.style.backgroundColor = 'rgb(239,239,239)'
                }, 300)})
            first = false
            }else{
        slettEl.addEventListener('click', () => {
            drikkevare.remove()
            kalkuler()
    })}
    prosentEl.addEventListener('input', kalkuler)
    mengdeEl.addEventListener('input', kalkuler)
}
let first = true
document.querySelectorAll('.drikkevare').forEach(oppdaterBokser)


function kalkuler() {
    let antallPils = 0
    document.querySelectorAll('.drikkevare').forEach(drikkevare => {
        const prosentEl = drikkevare.querySelector('.prosent')
        const mengdeEl = drikkevare.querySelector('.mengde')
        if (prosentEl.value != "" & mengdeEl.value != ""){
            antallPils += ((prosentEl.value * mengdeEl.value)/4.5)/500
        }
    })
    pilsEl.innerHTML = `ANTALL PILS: ${Math.round(antallPils*100)/100}`
}
