let header = document.querySelector('#intro');
let anim = [
    { t: "d", ms: 200 },
    { t: "dr", ms: 200 },
    { t: "dre", ms: 200 },
    { t: "drea", ms: 200 },
    { t: "dread", ms: 100 },
    { t: "dread.", ms: 100 },
    { t: "dread.c", ms: 100 },
    { t: "dread.cl", ms: 100 },
    { t: "dread.clo", ms: 100 },
    { t: "dread.clou", ms: 100 },
    { t: "dread.cloud", ms: 100 },
    { t: "dread.cloud_", ms: 100 },
    { t: "dread.cloud_", ms: 100 },
    { t: "dread.cloud ", ms: 200 },
    { t: "dread.cloud_", ms: 200 },
    { t: "dread.cloud ", ms: 200 },
    { t: "dread.cloud_", ms: 200 },
    { t: "dread.cloud , ms: 200 },
    { t: "dread.cloud", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();
