import { lstat } from 'fs/promises'
import React from 'react'
import { IButton } from '../models/IButton'
import { IUser } from '../models/IUser'
import { btnClick, fncMinus, fncSum } from '../util'

function login() {
  
  //variable
  // const, let, var
  // const - sabit - final
  const name = 'Ali'
  const namex:any = 'Ali'
  
  // let, var -> daha sonradan değişime uygun
  let surname = 'Bilmem'
  surname = 'Bilsin'

  // let ve var farkı, fonksiyon içerisindeki kullanımları ile birbirinden ayrılırlar.
  // gövde içerisindeki let ile kullanım sadece gövde içinde görünürken var gövde dışında da kullanılır.
  function sum() {

    if ( name === 'Ali' ) {
        let age = 30
        var status = true
        age = 40
        console.log(age, status)
    }
    status = false
  }
  sum()

  const cities = ['İstanbul', 'Van', 'Ankara', 'Samsun', 'İzmir']
  for (let i = 0; i < cities.length; i++) {
    const item = cities[i];
    console.log( item )
  }


  // Array Add item
  cities.push('Adana')
  cities.splice(0,1)
  cities.forEach( item => {
    console.log("forEach", item);
  })


  const user1 = {
    name: 'Ali',
    surname: 'Bilmem',
    age: 30,
    status: false
  }

  const user2 = {
    name: 'Erkan',
    age: 40,
    status: true
  }

  const user3:IUser = {
    name: 'Serkan',
    surname: 'Bilsinler',
    age: 40,
    status: false
  }

  if ( user3.status === true ) {

  }

  if ( user3.surname ) {
    sumx( user3.surname )
  }
  function sumx( data: string ) {

  }

  console.log(user3.name.charAt(0), user3.status?.valueOf());

  
  const users:IUser[] = []
  users.push({name: 'Kaan',age: 20})
  users.push({name: 'Ahmet',age: 33})
  users.push({name: 'Asya',age: 22})
  users.push({name: 'Mehmet',age: 44})
  users.forEach( item => {
    console.log( item.name, item.age );
    
  })

  const end = fncSum(4, 10)
  const type = typeof end
  if ( type === 'string' ){
    console.log("string", end )
  }else {
    console.log("number", end )
  }

  const min = fncMinus(37, 15);
  console.log(min);

  const btn:IButton = {
    title: 'Merhaba',
    click: btnClick
  }
  

  return (
    <div>
      <button onClick={() => btn.click() } >{btn.title}</button>
    </div>
  )
}

export default login