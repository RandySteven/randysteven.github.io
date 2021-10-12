fetch('../json/experience.json')
    .then(res => res.json())
    .then(res => {
        let experiences = res.experiences
        let getExperience = document.getElementById('experiences')
        let datas = ""
        experiences.forEach(experience => {
            datas += getExperienceJSON(experience)
        })
        getExperience.innerHTML = '<div class="row">' + datas + "</div>"
    })
    .catch(err => console.log(err))

fetch('../json/skill.json')
    .then(res => res.json())
    .then(res => {
        let skills = res.skills
        let getSkill = document.getElementById('skills1')
        let datas = ""
        for(let i = 0 ; i < 4 ; i++){
            datas += getSkillJSON(skills[i])
        }
        getSkill.innerHTML = `<div class="row">` + datas + `</div>`
    })
    .catch(err => console.log(err))

fetch('../json/skill.json')
    .then(res => res.json())
    .then(res => {
        let skills = res.skills
        let getSkill = document.getElementById('skills2')
        let datas = ""
        for(let i = 4 ; i < 8 ; i++){
            datas += getSkillJSON(skills[i])
        }
        getSkill.innerHTML = `<div class="row">` + datas + `</div>`
    })
    .catch(err => console.log(err))

const getExperienceJSON = (experience) => {
    return `
        <div class="col-sm-3">
            <div class="card" style="width: 15rem;">
                <img src="${experience.img}" class="card-img-top">
                <h6 class="text-center">${experience.experience}</h6>
                <div class="card-body">
                  <p class="card-text">${experience.desc}</p>
                </div>
            </div>
        </div>
    `
}

const getSkillJSON = (skill) => {
    return `
        <div class="col-sm-3">
            <div class="card" style="width: 17rem;height: 20rem">
                <img src="${skill.img}" class="card-img-top" height="100" alt="...">
                <h6 class="text-center">${skill.skill}</h6>
                <div class="card-body">
                    <p class="card-text">${skill.desc}</p>
                </div>
            </div>
        </div>
    `
}