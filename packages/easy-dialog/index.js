import EasyDialog from './src/main';

/* istanbul ignore next */
EasyDialog.install = function(Vue) {
  Vue.component(EasyDialog.name, EasyDialog);
};

export default EasyDialog;
