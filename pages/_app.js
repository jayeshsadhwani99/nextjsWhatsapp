import '../styles/globals.css';
import useAuthState from 'react-firebase-hooks';
import { auth, db } from '../firebase';
import Login from './login';
import Loading from '../components/Loading';
import { useEffect } from 'react';
import firebase from 'firebase';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if(loading) return <Loading />

  useEffect(()=> {
    if (user) {
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoUrl: user.photoUrl,
      }, 
      {
        merge: true
      },
      )
    }
  }, [user])

  if(!user) return <Login />
  return <Component {...pageProps} />
}

export default MyApp
