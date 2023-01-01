// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzmZHPscYxGixZoYgMUsmPnQNed3dx_1A",
  authDomain: "un-caos-organizado.firebaseapp.com",
  projectId: "un-caos-organizado",
  storageBucket: "un-caos-organizado.appspot.com",
  messagingSenderId: "585084745675",
  appId: "1:585084745675:web:58ad3f534465adb2bc284e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const mockDataBase = [
    {category: 'tazas', id: '1', name: 'Taza Halloween', cost: '$10.00', description: 'Taza con ilustración de Halloween'},
    {category: 'tazas', id: '2', name: 'Taza Hongos', cost: '$10.00', description: 'Taza con ilustración de Hongos'},
    {category: 'stickers', id: '3', name: 'Stickers Halloween', cost: '$10.00', description: 'Stickers con ilustraciones de Halloween'},
    {category: 'stickers', id: '4', name: 'Stickers Hongos', cost: '$10.00', description: 'Stickers con ilustraciones de Hongos'},
    {category: 'agendas', id: '5', name: 'Taza Halloween', cost: '$10.00', description: 'Taza con ilustración de Halloween'},
    {category: 'agendas', id: '6', name: 'Taza Halloween', cost: '$10.00', description: 'Taza con ilustración de Halloween'},
    {category: 'agendas', id: '7', name: 'Taza Halloween', cost: '$10.00', description: 'Taza con ilustración de Halloween'},
    {category: 'tattoos', id: '8', name: 'Taza Halloween', cost: '$10.00', description: 'Taza con ilustración de Halloween'},
    {category: 'tattoos', id: '9', name: 'Taza Halloween', cost: '$10.00', description: 'Taza con ilustración de Halloween'},
    {category: 'tattoos', id: '10', name: 'Taza Halloween', cost: '$10.00', description: 'Taza con ilustración de Halloween'},
]

export const gFetch = (url) => new Promise((resolve, reject) => {
    let error = false
    let data = ''
    const [,endpoint = 'category',id = ''] = url.split('/')

    if(endpoint === "category") {
        if(id) data = mockDataBase.filter(product => product.category === id)
        else data = mockDataBase
    }

    if(endpoint === "product") {
        if(id) data = mockDataBase.find(product => product.id === id)
        else error = 'no product was selected'
    }

    if(error) {
        reject('error genérico')
    } else {
        resolve(JSON.stringify(data))
    }
})