# React notes will be present here.

# git init

# git add README.md

# git commit -m "first commit"

# git branch -M main // it update the master branch name to main

# git remote add origin https://github.com/Mohit131991/ReactProject.git

# git push -u origin main

# npm init to initialize package manager. you can host ur repository as npm package

# npm install -D parcel

# npx parcel index.html will create a server hosted our index.html

- parcel uses a file watching algorithm written in c++.
- HMR: Hot Module Replacement (make the change in any file and save it. Will reflect automatically on browser)
- Local Server
- Provides faster build because it does caching
- Image optimization (Showing image on browser is very expensive, parcel does optimization for us)
- Production build: do minification of files and bundling, compress as well
- Content Hashing
- Code splitting
- Differential bundling - support older browsers
- Diagnostic, Error Handling
- Https
- Tree SHaking - remove unused code automatically

# npx parcel build index.html will create production ready build

# Structure for our app

<!-- /\*
Header
-> Logo
-> Search Bar
-> Location
-> Nav Bar

Body
-> ProductsContainer (will have vertical scroll)
-> ProductContainer(Will have left right scroll)
-> ProductCard

Footer
-> AboutUS
-> CopyRightInfo
-> ContactUs

\*/ -->
