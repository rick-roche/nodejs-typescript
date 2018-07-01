# nodejs-typescript

My experiments in building nodejs projects with typescript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Just [Node.JS](https://nodejs.org/); I generally use the LTS which is 8.11.3 at time of writing.

### Installing

Clone the repo and install dependencies

```sh
git clone https://github.com/rick-roche/nodejs-typescript.git
cd nodejs-typescript
npm i
```

### Running the test application

For live reload while developing run

```sh
npm run build:dev
```

Run the linter
```sh
npm run tslint
```

For building the dist

```sh
npm run build
```

To run the dist

```sh
npm run serve
```

## Built With

* [Node.JS](https://nodejs.org/) - The runtime environment
* [Typescript](http://www.typescriptlang.org/) - JavaScript that scales

## Contributing

Please submit a pull request and get in touch! I use [semantic commits](https://seesparkbox.com/foundry/semantic_commit_messages) so please do the same.

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/rick-roche/nodejs-typescript/tags). 

## Authors

* **[Rick Roché](https://github.com/rick-roche)** - *Initial work*

See also the list of [contributors](https://github.com/rick-roche/nodejs-typescript/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [TypeScript with Node.js](https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html)
* [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter)
* [Building a Node.js App with TypeScript Tutorial](https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/)
* [Developing a RESTful API with Node and TypeScript](http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/)
* [Debugging TypeScript in VS Code without compiling, using ts-node](https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a)
