const loadTop10Data =() =>{
    const URL =`https://forbes400.onrender.com/api/forbes400?limit=10`
    fetch(URL)
    .then(res => res.json())
    .then(data => displayData(data));
}

const displayData = (RichesMan) =>{
console.log(RichesMan);
const container = document.getElementById('container-info');
const div = document.createElement('table')
    div.innerHTML =`
    <thead>
      <tr class="mx-20 text-center">
        <th class="mx-14">Image</th>
        <th></th>
        <th>Rank</th>
        <th></th>
        <th>Name</th>
        <th></th>
        <th></th>
        <th>NetWorth</th>
        <th></th>
        <th>Residence</th>
        <th></th>
        <th>Source</th>
      </tr>
    </thead>`;
    container.appendChild(div);
    RichesMan.forEach(rich=>{
        const div = document.createElement('table')
        div.innerHTML =` 
        <tr class="hover border border-indigo-600">
          <td><img class="w-full h-10" src="${rich.squareImage}" alt=""></th>
          <td></td>
          <td></td>
          <td>${rich.rank}</td>
          <td></td>
          <td>${rich.personName}</td>
          <td></td>
          <td>${rich.finalWorth}</td>
          <td></td>
          <td>${rich.countryOfCitizenship}</td>
          <td></td>
          <td>${rich.source}</td>
        </tr>
     
        `;
        container.appendChild(div);
    })
        
   
}


loadTop10Data();