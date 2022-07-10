'use strict'

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

const deepFreeze = obj => {
    Object.freeze(obj)
    for( let key in obj) {
        if(obj[key] instanceof Object) {
            return deepFreeze(obj[key])
        }
    }
}
deepFreeze(user)

console.log(Object.getOwnPropertyDescriptor(user, 'data'));
console.log(Object.getOwnPropertyDescriptor(user.data, 'd'));
console.log(Object.getOwnPropertyDescriptor(user.data.d, 'd1'));