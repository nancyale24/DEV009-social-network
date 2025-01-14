// import { auth } from '../firebase/initializeFirebase.js';
import {
  exitUser,
  createPostFn,
  showData,
  // deletePost,
} from '../lib/index.js';
import logoImportado from '../img/logo.png';
import profilePicImportado from '../img/perfil.png';
import homeIconImport from '../icons/home.svg';
import exitIconImport from '../icons/exit.svg';

function wall(navigateTo) {
  const mainContainer = document.createElement('div');
  const section = document.createElement('section'); // contiene img de usuario y form para crear post(input y boton publicar)
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const profilePic = document.createElement('img');
  const createPost = document.createElement('textarea');

  const timeLineSection = document.createElement('div');

  const menu = document.createElement('nav');
  const home = document.createElement('img');
  const profileMenu = document.createElement('img');
  const exit = document.createElement('img');

  const logoParaMostrar = logoImportado;
  logo.src = logoParaMostrar;

  const profilePicParaMostrar = profilePicImportado;
  profilePic.src = profilePicParaMostrar;
  createPost.placeholder = '¿Cuál fue el último lugar que visitaste?';

  const formPost = document.createElement('form');
  const postBtn = document.createElement('button');
  postBtn.textContent = 'Publicar';

  const homeIconMostrar = homeIconImport;
  home.src = homeIconMostrar;

  const profileMenuIconMostrar = profilePicImportado;
  profilePic.width = 50;
  profileMenu.src = profileMenuIconMostrar;
  const exitIconMostrar = exitIconImport;
  exit.src = exitIconMostrar;

  mainContainer.classList.add('mainConteiner');
  section.classList.add('sectionWall');
  header.classList.add('header');
  logo.classList.add('logoWall');
  formPost.classList.add('formPost');
  profilePic.classList.add('profilePic');
  postBtn.classList.add('postBtn');
  createPost.classList.add('createPost');
  createPost.setAttribute('required', '');
  createPost.setAttribute('autocapitalize', 'sentences');
  timeLineSection.classList.add('timeLineSection');
  menu.classList.add('menu');
  home.classList.add('home');
  profileMenu.classList.add('profileMenu');
  exit.classList.add('exit');

  mainContainer.append(header, section, timeLineSection, menu);
  section.append(profilePic, formPost);
  header.appendChild(logo);
  formPost.append(createPost, postBtn);
  menu.append(home, profileMenu, exit);

  showData(navigateTo);

  home.addEventListener('click', () => {
    navigateTo('/wall');
  });

  profileMenu.addEventListener('click', () => {
    navigateTo('/profile');
  });

  exit.addEventListener('click', (e) => {
    e.preventDefault();
    const alertlogOut = (boolean) => {
      if (boolean) {
        navigateTo('/');
      }
    };
    exitUser(alertlogOut);
  });

  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    const postCreated = createPost.value;
    // const user = auth.currentUser;
    // const author = user.displayName;
    // console.log('hello: ', `${author}`);
    await createPostFn(postCreated);
    // console.log(obtenerUsuario());
    formPost.reset();
    showData(navigateTo);
  });
  return mainContainer;
}

export default wall;
