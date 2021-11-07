/*Задачка, перебрать массив и изменить в нем данные, результат вывести в консольку
Исходный массив:
[123, 'voda', ['q', 'w', 'e' ], { a: 'b', v: 'qwe', c: 123} ]
Новый массив
[1234, 'pivo', ['q', 'w', 'e', 'r'], {a: 'b', v: 'qwe', c: 123}]*/

let arr = [123, 'voda', ['q', 'w', 'e' ], { a: 'b', v: 'qwe', c: 123} ];
console.log(`Исходный массив: ${arr}`);

for ( let i=0; i <4 ; i++){
    switch(arr[i]) {
        case 123:  
            arr.splice(i, 1, 1234);
            break;
        case 'voda':  
            arr.splice(i, 1, 'pivo');
            break;
    }
}    
console.log(`Новый массив: ${arr}`);


/*
let arr = [123, 'voda', ['q', 'w', 'e' ], { a: 'b', v: 'qwe', c: 123} ];
console.log(`Исходный массив: ${arr}`);
for (let i = 0; i < 4; i++) {   
    if (arr[i] == 123) {
        arr.splice(i, 1, 1234)      
    }
    else if (arr[i] =='voda' ) {
        arr.splice(i, 1, 'pivo')  
    }
 }
 console.log(`Новый массив: ${arr}`);

*/
