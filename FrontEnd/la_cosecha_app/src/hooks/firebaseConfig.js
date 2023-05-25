import { initializeApp } from 'firebase/app';
import { getStorage,ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import saveProductLot from './saveProductLot';

const uploadPhoto=async (file,values)=>{
    const name=Math.floor(Math.random() * 1000000);
    const firebaseConfig = {
        apiKey: "AIzaSyC4ahR6EpTuZ8EwPbYk73a-4LGbVUoEPKQ",
        authDomain: "lacosechaapp-3085d.firebaseapp.com",
        projectId: "lacosechaapp-3085d",
        storageBucket: "lacosechaapp-3085d.appspot.com",
        messagingSenderId: "338331413635",
        appId: "1:338331413635:web:9683c5450345edce97ffb6"
    };
      
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    
    const metadata = {
      contentType: 'image/jpeg'
    };

    const response = await fetch(file);
    const blob = await response.blob();
    
    const storageRef = ref(storage, 'images/' + name);
    const uploadTask =  uploadBytesResumable(storageRef, blob, metadata);

    

    uploadTask.on('state_changed',(snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  },
  (error) => {
    console.log('sisas2');
    console.log(error);
  },
   () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      console.log('File available at', downloadURL);
      const res=await saveProductLot(values,downloadURL);
      console.log(res);
    });
  }
);
}

export default uploadPhoto;
