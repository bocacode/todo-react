# Simple Class Project To do App

## Environment Setup
1. Install all dependencies after cloning with `yarn` or `npm i`
2. Run `yarn start` or `npm start` to run project

## Phase 1 - 2/11/21
### Create Project and add Bootstrap
1. Create Project `npx create-react-app todo-react`
2. Add Bootstrap `yarn add bootstrap` or `npm install --save bootstrap` 
    refs: here `https://create-react-app.dev/docs/adding-bootstrap/`
3. Inside `index.js` add `import 'bootstrap/dist/css/bootstrap.css';` before any other CSS

### Clean up App and create new Component
1. Clean up `App.js` - DONE
2. Create `Todo.js` as App.js sibbling - DONE
3. Import `Todo Component` to App - DONE
4. Created `State` to hold our list of todos - DONE
5. Loop through the `todos` in state and display on page - DONE

## Phase 2 - 2/11/21
1. Create a Child component per each `todo item` - DONE
2. Render each Child component on `Todo Component` - DONE
3. Add an `input` inside `Todo.js` to add a new todo item - DONE
4. Add new todo item inside our state - DONE
5. Render each new item inside its own component

## Phase 3 - 
1. Be able to delete each Todo
2. Be able to refresh page and keep the same todos in our new list

## Phase 4 - deploy to host
1. Host this webapp in firebase hosting as a `webapp`
