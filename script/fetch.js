
//const url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
let getData = async (url)=>{
    let res = await fetch(url);
    let data = await res.json();
   // console.log(data.meals)
    //append(data.meals)
    return data;
}
//getData()

let append = (data,container)=>{
   // console.log(data)
    data.forEach(({strMeal,strMealThumb,strIngredient1,strIngredient2,strIngredient3})=>{
    let div = document.createElement("div")
    let p = document.createElement("p");
    p.innerText = strMeal;
    let p1 = document.createElement("p");
    p1.innerText = "Ingredients : "+strIngredient1+","+strIngredient2+","+strIngredient3;
    let img = document.createElement("img");
    img.src = strMealThumb;
    div.append(img,p,p1)
    container.append(div)
  })
}

export {getData,append}