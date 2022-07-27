axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(successFunction).catch(failfureFunction);

function successFunction(response1){
   for(let i=0;i<response1[`data`].length;i++ ) {
       
        document.body.insertAdjacentHTML(`beforeend`, `<h3> user number ${i+1}: ${response1[`data`][i][`title`]}</h3> 
        <p> ${response1[`data`][i][`body`]}</p>`);
        console.log(`success`);
    } 
console.log(`success 2`);
}

function failfureFunction(error) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1> failed</h1>`);
console.log(`failed`)
}