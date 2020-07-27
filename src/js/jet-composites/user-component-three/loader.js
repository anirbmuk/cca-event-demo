/**
  Copyright (c) 2015, 2020, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./user-component-three-view.html', './user-component-three-model', 'text!./component.json', 'css!./user-component-three-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('user-component-three', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);