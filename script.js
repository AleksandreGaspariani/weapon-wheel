
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
    'pistols': [
        'colt python',
        'glock18',
        'desert eagle'
    ],
    'automatics': [
        'm4a16',
        'ak-47',
        'ak-74',
        'ump-500',
    ],
    'riffles': [
        'sanadiro',
        'kisti',
        'rujio',
    ],
    'melees': [
        'knife',
        'axe',
        'battle axe',
    ],
    'tools': [
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

function loadItems(which){

    $('#loadItemsDiv').empty();

    switch (which) {
        case 'pistols':
            data.pistols.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/pistol.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
        case 'automatics':
            data.automatics.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/automatic.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
        case 'riffles':
            data.riffles.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/riffle.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
        case 'melees':
            data.melees.forEach(element => {
                $('#loadItemsDiv').append(`
                    <div class="d-flex flex-column justify-content-end align-items-center each_item_top" onmouseenter="select(this)" onmouseleave="diselect(this)" onclick="getGun('`+element+`')">
                        <img src="images/knife.svg" alt="" width="70px" height="70px">
                        <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 12px;">`+element+`</p>
                    </div>  
                `);
            });
        break;
        case 'tools':
            data.tools.forEach(element => {
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

