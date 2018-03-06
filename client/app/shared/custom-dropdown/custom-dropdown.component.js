import './_custom-dropdown.sass';
import templateUrl from './custom-dropdown.html';

export const CustomDropdownComponent = {
  controller: ComponentController,
  controllerAs: 'vm',
  bindings: {
    config: '<',
    items: '<',
    itemsCount: '<',
    onUpdate: '&',
    menuRight: '@',
  },
  templateUrl,
};

/** @ngInject */
function ComponentController() {
  var vm = this;

  vm.$onInit = function() {
    vm.menuRight = vm.menuRight && (vm.menuRight === 'true' || vm.menuRight === true);
    angular.extend(vm, {
      handleAction: handleAction,
      isOpen: false
    });
  };

  vm.$onChanges = function() {
    updateDisabled();
  };
  // Public

  // Private
  function updateDisabled() {
    vm.onUpdate({$config: vm.config, $changes: vm.items});
  }

  function handleAction(option) {
    if (!option.isDisabled) {
      option.actionFn(option);
    }
  }
}
