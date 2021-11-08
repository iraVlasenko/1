


/*


git status

git add .

>git commit -m "2"

git push

Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (1/1), done.
Writing objects: 100% (2/2), 223 bytes | 223.00 KiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/iraVlasenko/1.git
   696d6ff..3844e37  main -> main

D:\Users\student\Desktop\front 10\08.11.21\1>Задачка, перебрать массив и изменить в нем данные, результат вывести в консольку
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
