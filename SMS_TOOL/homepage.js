const APILINK = 'http://localhost:8000/api/v1/tool/';

const list = document.getElementById("list");
const addNew = document.getElementById("addNew");

const div_new = document.createElement("div");

div_new.innerHTML = `
    <div class="column">
      <div class="card">
        Add Year 
        <input type="text" id="yearList" value=""> 
        <a href="#" onclick="saveYear('new_year')" class="button"> Save </a>
      </div>
    </div>
  </div>
`
addNew.appendChild(div_new)


returnYears(APILINK);
function returnYear(url){
    fetch(url).then(res => res.json())
    .then (function(data){
        console.log(data.results)
        data.results.forEach(year => {
            const yearNum = document.createElement('div');
            yearNum.innerHTML =`
            <div class="column">
              <div class="card" id="${year._id}">
              <p>${year.year} <a href="#"onclick="editReview('${year._id}','${year.year}'')">Edit</a> 
              <a href="#" onclick="deleteReview('${year._id}')">Delete</a> 
              </p>
              </div>
            </div>
          </div>
        `
            list.appendChild("yearNum");
        });
    });
}

// // form.addEventListener("submit", (e) => {
// //     e.preventDefault();

    
// // })

