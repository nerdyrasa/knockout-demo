//var vm = function(name) {
//
//  this.name = ko.observable(name);
//
//};
//
//ko.applyBindings(new vm('Fifi'));


// This is a simple *viewmodel* - JavaScript that defines the data and behavior of the UI
function AppViewModel() {
  this.firstName = "Bert";
  this.lastName = "Bertington";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());