# AngularTodo

Ce projet est une liste de tâches réalisée dans le cadre de mon apprentissage front-end. Il s’appuie sur le tutoriel de Mozilla's MDN. 

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Angular CLI installation

To install the Angular CLI globally, run:

```bash
npm install -g @angular/cli
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build -c production
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Host locally

You can host the built app on your machine using http-server package by running following command after running a build:

```bash
npx http-server ./dist/angular-todo/browser/ -o
```
