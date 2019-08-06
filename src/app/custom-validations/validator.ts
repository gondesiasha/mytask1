import { AbstractControl, FormGroup } from '@angular/forms';


export function zipcodeValidator(control: AbstractControl) {

    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp('^[0-9]{6}$');

        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }

    return null;
}

export function passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const cnfpassValue = control.value;

        const passControl = control.root.get('password');
    
        if (passControl) {
            const passValue = passControl.value;
            
            if (passValue !== cnfpassValue || passValue === '') {
                return {
                    isError: true
                };
            }
        }
    }

    return null;
}

// export function checkvalidator(control: AbstractControl) {
//     console.log(control, control.value, control.root.get('check'))
//     // if(control.value)
//     // {
//     const data = control.root.get('check');
//     if (data) {
//         const data1 = data.value;
//         console.log(data1)
//         if (data1 === true) {
//             if (control.value === null || control.value === undefined || control.value === '') {
//                 return {
//                     'name_error': 'name is required'
//                 };
//             }


//         } else {
//             return false;
//         }
//     }

//     // }
//     // return null;
// }
