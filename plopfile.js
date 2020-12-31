module.exports = plop => {
  const templatePath = `plop_templates/Component`;
  const componentPath = `components/{{pascalCase name}}`;
  const includeCssModules = 'includeCssModules';
  const storybookMdxValue = 'storybookmdx';
  const storybookCsfValue = 'storybookcsf';

  plop.setGenerator('component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
      {
        type: 'confirm',
        name: includeCssModules,
        default: true,
        message: 'Do you want to create a CSS Modules file?'
      },
      {
        type: 'list',
        name: 'storybooktype',
        choices: [
          {
            name: 'MDX (Markdown with JSX)',
            value: storybookMdxValue
          },
          {
            name: 'CSF (Component Story Format)',
            value: storybookCsfValue
          },
          {
            name: 'None',
            value: 'none'
          }
        ],
        default: storybookMdxValue,
        message: 'Which Storybook story format would you like?'
      }
    ],
    actions: data => {
      let actions = [];
      actions.push(
        {
          type: 'add',
          path: `${componentPath}/index.js`,
          templateFile: `${templatePath}/Component.js.hbs`,
          data: {
            includeCssModules: data.includeCssModules
          }
        },
        {
          type: 'add',
          path: 'components/index.js',
          templateFile: `${templatePath}/injectable-index.js.hbs`,
          skipIfExists: true
        },
        {
          type: 'append',
          path: 'components/index.js',
          pattern: `/* PLOP_INJECT_DO_NOT_REMOVE */`,
          template: `export \{ default as {{pascalCase name}} \} from '@components/{{pascalCase name}}';`
        }
      );
      if (data.includeCssModules) {
        actions.push({
          type: 'add',
          path: `${componentPath}/{{pascalCase name}}.module.css`,
          templateFile: `${templatePath}/Component.css.js.hbs`
        });
      }
      if (data.storybooktype === storybookMdxValue) {
        actions.push({
          type: 'add',
          path: `${componentPath}/{{pascalCase name}}.stories.mdx`,
          templateFile: `${templatePath}/Component.mdx.js.hbs`
        });
      }
      if (data.storybooktype === storybookCsfValue) {
        actions.push({
          type: 'add',
          path: `${componentPath}/{{pascalCase name}}.stories.js`,
          templateFile: `${templatePath}/Component.csf.js.hbs`
        });
      }
      return actions;
    }
  });
};
