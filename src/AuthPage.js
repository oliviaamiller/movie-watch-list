import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';
import './App.css';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);

    setUser(user);
    setEmail('');
    setPassword('');
  }

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signIn(email, password);

    setUser(user);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='auth'>
      <form>
        <input required type='email'
          value={email}
          placeholder='email'
          onChange={e => setEmail(e.target.value)} />

        <input required type='password'
          value={password}
          placeholder='password'
          onChange={e => setPassword(e.target.value)} />

        <button onClick={handleSignUp}>sign up</button>
        <button onClick={handleSignIn}>sign in</button>
      </form>
    </div>
  );
}
