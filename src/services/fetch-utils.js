import { client, checkError } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}
  
export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}
  
export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });
  
  return response.user;
}
  
export async function logout() {
  await client.auth.signOut();
  
  return (window.location.href = '../');
}
  

export async function addToList(movie) {
  const response = await client
    .from('watchlist')
    .insert(movie);

  return checkError(response);
}

export async function getList() {
  const response = await client
    .from('watchlist')
    .select()
    .order('id');

  return checkError(response);
}

export async function isWatched(id) {
  const response = await client
    .from('watchlist')
    .update({ watched: true })
    .match({ id })
    .single();

  return checkError(response);
}