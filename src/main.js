import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Max Mustermann",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Continuous integration, continuous deployment. Processes and tools for software projects to keep adding new updates, delivering the latest version of the app to users, and ensuring the qualtiy of the products."],
    // Which CI/CD tools do you use in your project?
    tools: "GitLab pipelines",
    // What do you want to learn in this workshop?
    expectations: ["Learn about the state of the art best practices, including available options and specific techniques."],
  },
});
