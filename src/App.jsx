import './App.css';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { db, auth, app } from './lib/firebase';
import Todo from './components/Todo';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

// Use Effect - multiple ok but less is better
  useEffect(() => {
    // Check user's authentication on app load
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
      } else {
        // User is signed out
        setUser(null)
      }
    })

    return () => unsubscribe();
  })

  // SignUp
const signUp = () => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    setUser(userCredential.user);
    console.log('User signed up:', userCredential.user);
  })
  .catch(error => {
    console.error('Error signing up:', error);
  });
}
  // SignIn
  const signIn = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    setUser(userCredential.user);
    console.log('User signed in:', userCredential.user);
  })
  .catch(error => {
    console.error('Error signing in:', error);
  });
}

  // SignOut
const logOut = () => {
  signOut(auth)
  .then(() => {
    setUser(null);
    console.log('User signed out');
  })
  .catch(error => {
    console.error('Error signing out:', error);
  });
}

    return (
      <>
        <p>Firestore Authentication</p>
        <div>
          {
            !user && (
              // React fragnent required for free-range elements (children with no parent)
              <>
                <input name="username" type="email" placeholder="Email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input name="password" type="password" placeholder="Password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button onClick={signUp}>Sign up</button>
                <button onClick={signIn}>Sign In</button>
              </>
            )
          }
        </div>

      {
        user && (
          <div>
            <Todo />
            <p>Logged in as: {user.email}</p>
            <button onClick={logOut}>Sign Out</button>
          </div>
        )
      }
    </>
  );
}

export default App;
