let url = "https://jsonplaceholder.typicode.com/comments"
let data = []

let getData = async () => {
let res = await fetch(url)
res = await res.json()
return res
}

let main = async () => {
    data = await getData();
    // console.log(data);
    renderDom(0)
    showButtons(1)

}
main()

let renderDom = (index) => {
    let cont  = document.getElementById("container")
 cont.innerHTML = null

//  index  = 0, for page 1
//  index  = 1, for page 2

let start = 10 * index // 0,10
// let end =   10 * (index+1) - 1  // 9
// or 
 let end = start + 10

let per_page_data = data.slice(start,end)
per_page_data.forEach(({id,name}) => {
    let p = document.createElement("p")
    p.innerText = `${id} ${name}`
    cont.append(p)

})
showButtons(index+1)
}

let showButtons = (pageClicked) => {
  let btns =document.getElementById("btn")
 btns.innerHTML = null

 let start = 1

 if(pageClicked > 4)
 {
     start = pageClicked -1
 }
 for(let  i = start; i <= start + 9; i++ )
 {
     let b = document.createElement("button")
     b.innerText = i
     b.onclick = () => {
         renderDom(i-1)
     }
     btns.append(b)
 }
}