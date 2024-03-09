var EmojiContainer = document.getElementById("Emoji_container");
var Search_field = document.getElementById("search_Field");

function displayEmojies(d=''){

    let filterData = emojiList.filter(e=>{
        if(e.description.indexOf(d) != -1){
            return true;
        }
        if(e.aliases.find(elem =>elem === d)){
            return true;
        }
        if(e.tags.find(elem=>elem===d)){
            return true;

        }
    })

    EmojiContainer.innerHTML = '';
    
    filterData.forEach(e=>{

    let new_row = document.createElement("tr");
    let emojee = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_desc = document.createElement("td");

   
    emojee.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_desc.innerText = e.description;

    new_row.appendChild(emojee);
    new_row.appendChild(new_aliases);   
    new_row.appendChild(new_desc);

    EmojiContainer.appendChild(new_row);
    emojee.style.paddingLeft = "50px"
    emojee.style.paddingRight = "50px"
    emojee.style.paddingtop = "50px"
    EmojiContainer.textalign = "center"

    console.log(new_row);
 
     

    })

    


}

// window.addEventListener('load',displayEmojies);
//  ***Above and below mentioned funcations are same just  writing format is different
function searchData(a){
    var Evalue = a.target.value;
    console.log(Evalue); 
    displayEmojies(Evalue)
}

window.addEventListener('load',displayEmojies); 
Search_field.addEventListener('keyup',searchData)


window.onload = () => displayEmojies();
// Search_field.addEventListener('keyup',searchData)
// window.addEventListener('load',displayEmojies); 