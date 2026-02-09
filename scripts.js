
let currentPageIndex = 0;
let currentLanguage = 'English'; // Default language

const book = document.getElementById('book');


function switchLanguage(language) {
    currentLanguage = language;
    const lang = language.charAt(0).toUpperCase() + language.slice(1);
    $("#changedLanguage").val(lang);


     // Get the selected date from the date picker
     const selectedDate = $("#datePicker").val();

     // Update the image source based on the selected language and date
     const currentImg = $('.page.front').attr('id');
     $("#" + currentImg).find('img').attr('src', 'SSSK_HanumanJi_Messages/' + selectedDate + '_' + currentLanguage + '.png');
}

function createPages() {

    const page = document.createElement('div');
    page.classList.add('page');
    page.classList.add('back');
    page.id = 'page';

    const image = document.createElement('img');
    // image.src = 'images/' + currentLanguage + '/page' + pageNumber + '.png';

    //to get current date
    const today = new Date();
    // Get day, month, and years
    const day = String(today.getDate()).padStart(2, '0'); // Day with leading zero
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Month with leading zero (0-indexed)
    const year = today.getFullYear();
    // Combine into DD-MM-YYYY format
    const formattedDate = `${day}-${month}-${year}`;// Example: dd-mm-yyyy

    const changeLanguage = $("#changedLanguage").val();
    image.src = 'SSSK_HanumanJi_Messages/' + formattedDate + '_'+changeLanguage+'.png';
    // console.log(image.src);
    // image.alt = 'Page ' + pageNumber;
    // Dynamically add the onerror attribute
    image.onerror = function () {
         this.src = 'https://srisathyasaikuteer.com/images/english/page1.jpg';
       // this.src = 'SSSK_HanumanJi_Messages/HanumanJi.jpg';
    };

    page.appendChild(image);

    book.appendChild(page);

    const lastPage = document.getElementById('page');
    lastPage.style.display = 'block';
    lastPage.classList.remove('back');
    lastPage.classList.add('front');
}

$("#datePicker").datepicker({
    changeMonth: true,  // Enables dropdown for months
    changeYear: true,   // Enables dropdown for years
    yearRange: "1900:2100", // Year range for the dropdown
    dateFormat: "dd-mm-yy",  // Format of the selected date
    
    onSelect: function() {
        const currentImg = $('.page.front').attr('id');
        //alert($("#"+currentImg).html());
        // Update the image source based on the selected date and current language
        const changeLanguage = $("#changedLanguage").val();
        $("#"+currentImg).find('img').attr('src', './SSSK_HanumanJi_Messages/'+ $(this).val() +'_' + currentLanguage  + '.png');
    }
}).datepicker("setDate", new Date()); 

// Initialize the book with default language
createPages();



