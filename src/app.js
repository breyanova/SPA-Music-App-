import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderNavigation,renderContentMiddleware } from './middlewares/renderMiddleware.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { deleteView } from './views/deleteView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeview.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';
import { searchView } from './views/searchView.js';

page(authMiddleware);
page(renderNavigation);
page(renderContentMiddleware);


page('/', homeView);
page('/login', loginView)
page('/register', registerView)
page('/logout', logoutView)
page('/catalog' , catalogView)
page('/create', createView)
page('/search', searchView)
page('/albums/:albumId', detailsView) ///data/pets/:id
page('/albums/:albumId/edit', editView) 
page('/albums/:albumId/delete',deleteView)


page.start();