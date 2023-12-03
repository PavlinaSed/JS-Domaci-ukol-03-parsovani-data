//Parsování data - převeďte datum na objekt

const parseDate = (DD,MM,YYYY) => {
    return (`day: ${DD}, month: ${MM}, year: ${YYYY}`)
}

document.body.innerHTML += `${parseDate(18, 2, 1990)}`

/* druhá varianta

function parseDate(DD,MM,YYYY) {
    document.body.innerHTML +=  `day: ${DD}, month: ${MM}, year: ${YYYY}`
}

parseDate(12,3,2013)

*/