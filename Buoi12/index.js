let saveButtons = document.querySelectorAll('.save-button');

for (let button of saveButtons){
    button.addEventListener('click', function(event){
        let contentID = event.target.dataset.id;
        console.log(`Saving ${contentID}`);
    });
}

// 1. Array of Element
// 2. biến button 
// 3. sự kiện click
// 4. DOM button được nhấn




// i = 5
// item = arr[i]

// for (const item of [[6,1],3,6,2,2]) {
//     console.log(item);
// }


