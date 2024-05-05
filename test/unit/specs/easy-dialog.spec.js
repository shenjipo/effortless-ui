import { createTest, destroyVM } from '../util';
import EasyDialog from 'packages/easy-dialog';

describe('EasyDialog', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(EasyDialog, true);
    expect(vm.$el).to.exist;
  });
});

