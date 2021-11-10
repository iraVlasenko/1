


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
/*
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

*/
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

const contactList = [
    {
      id: 2,
      first_name: 'Vasya',
      last_name: 'Petrov',
      nick_name: '',
      phone: 093945394,
      group: [
        {
          name: 'friends',
          id: 2
        }
      ],
      actions: null
    },
    {
      id: 1,
      first_name: 'Petya',
      last_name: '',
      nick_name: 'Sizo',
      phone: 09722122,
      group: [
        {
          name: 'best_friends',
          id: 1
        }
      ],
      actions: [
        {
          name: 'missed call',
          value: 3,
          id: 1
        }
      ]
    },
    {
      id: 3,
      first_name: 'Rustem',
      last_name: '',
      nick_name: 'Box',
      phone: 09700000,
      group: [
        {
          name: 'other',
          id: 3
        }
      ],
      actions: [
        {
          name: 'missed call',
          value: 13,
          id: 1
        }
      ]
    }
];
contactList.push  (
  {
    id: 4,
    first_name: 'Ira',
    last_name: 'Vlasenco',
    nick_name: '',
    phone: 09722123,
    group: [
      {
        name: 'best_friends',
        id: 1
      }
    ],
    actions: [
      {
        name: 'missed call',
        value: 3,
        id: 1
      }
    ]
  },
  {
    id: 5,
    first_name: 'Vova',
    last_name: 'Grosu',
    nick_name: '',
    phone: 09722124,
    group: [
      {
        name: 'best_friends',
        id: 1
      }
    ],
    actions: [
      {
        name: 'missed call',
        value: 3,
        id: 1
      }
    ]
  },
  {
    id: 6,
    first_name: 'Ihor',
    last_name: 'Kopcha',
    nick_name: '',
    phone: 09722156,
    group: null,
    actions:null,
  },


)


function SortArray(x, y){
  if (x.last_name < y.last_name) {return -1;}
  if (x.last_name > y.last_name) {return 1;}
  return 0;
}

let contactListSort = contactList.sort(SortArray);
console.log(contactListSort);

contactListSort.map(contact => {
  let actName = contact.actions != null ? contact.actions.map(action => action.name):'';
  let actCounter = contact.actions != null ? contact.actions.map(action => action.value):'';
  let groupName = contact.group != null ? contact.group.map(group => group.name):'';
   console.log(
       `Имя:${contact.first_name}\nФамилия:${contact.last_name}\nНомер:${contact.phone}  ${actName} ${actCounter} \nГруппа:${groupName}\n\n`
        );
  }
)

const positiveActionsContactList = contactList.filter(contact => contact.group != null );

  console.log(positiveActionsContactList);

