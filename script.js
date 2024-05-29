
$(document).ready((e)=>{

    $(document).on( "keydown", function( event ) {
        if ( event.which == 9 ) {
            event.preventDefault();
            $('.links').css('display','flex');
            $('.weaponWheelBody').css('backdrop-filter','blur(5px)');
        }
    });

    $(document).on( "keyup", function( event ) {
        if ( event.which == 9 ) {
            event.preventDefault();
            $('.links').css('display','none');
            $('#loadItemsDiv').empty();
            $('.weaponWheelBody').css('backdrop-filter','blur(0px)');
        }
    });

})

let data = {
    'Pistols': [
        'colt python',
        'glock18',
        'desert eagle'
    ],
    'Automatics': [
        'm4a16',
        'ak-47',
        'ak-74',
        'ump-500',
    ],
    'Rifles': [
        'sanadiro',
        'kisti',
        'rujio',
    ],
    'Melees': [
        'knife',
        'axe',
        'battle axe',
    ],
    'Shotguns': [
        'shovel',
        'lockpick',
        'wrench',
    ]
};

function select(element){
    $(element).css('-webkit-box-shadow', '0px 0px 25px 0px rgba(59, 247, 26, 0.75)');
    $(element).css('-moz-box-shadow', '0px 0px 25px 0px rgba(59, 247, 26, 0.75)');
    $(element).css('box-shadow', '0px 0px 25px 0px rgba(59, 247, 26, 0.75)');
};

function diselect(element) {
    $(element).css('-webkit-box-shadow', '0px 0px 15px 0px rgba(0,0,0,0.75)');
    $(element).css('-moz-box-shadow', '0px 0px 15px 0px rgba(0,0,0,0.75)');
    $(element).css('box-shadow', '0px 0px 15px 0px rgba(0,0,0,0.75)');
}

function getGun(gun){
    console.log(gun); // აგი აგდებს იარაღის სახელს რომელზეც კლიკია
}

function receiveData(jsonData) {
    data = JSON.parse(jsonData);
}

function loadItems(which){

    $('#loadItemsDiv').empty();

    switch (which) {
        case 'Pistols':
            data.Pistols.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/pistol.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
        case 'Automatics':
            data.Automatics.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/automatic.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
        case 'Rifles':
            data.Rifles.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/riffle.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
        case 'Melees':
            data.Melees.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/knife.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
        case 'Shotguns':
            data.Shotguns.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/tools.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
    
        default:
            break;
    }
    

    
}

