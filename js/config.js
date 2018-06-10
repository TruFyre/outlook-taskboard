var tbConfig = angular.module('taskboardApp.config', []);

var config_data = {

  'GENERAL_CONFIG': {

  	// Outlook Task folders
    // Name: Name of the task folder
    // Title: Task lane title
    // Limit: hard limits for each task lane. 0 = no limit
    // Sort: Sort order for tasks (default = priority), can state multiple sort keys separated by comma, use '-' to sort descending, Example "duedate,-priority,subject"
    // Restrict: Restrict certain tasks (default = only show incomplete tasks) (More info = https://msdn.microsoft.com/en-us/library/office/ff869597.aspx)
    // Owner: If the task folder is shared by someone else, enter the name of the owner. (i.e. Evren Varol)
    'BACKLOG_TASKS':       { Name: '', Title: 'BACKLOG', Limit: 0, Sort: "-priority", Restrict: "[Complete] = false and [Status] = 'Not Started'", Owner: '' },
    'INPROGRESS_TASKS': 	{ Name: 'InProgress', Title: 'IN PROGRESS', Limit: 5, Sort: "-priority", Restrict: "[Complete] = false and [Status] = 'In Progress'", Owner: ''},
    //'NEXT_TASKS': 			{ Name: 'Next', Title: 'NEXT', Limit: 0, Sort: "duedate,-priority", Restrict: "[Complete] = false", Owner: ''},
    'DEFERRED_TASKS': 		{ Name: 'Deferred', Title: 'DEFERRED', Limit: 0, Sort: "-priority", Restrict: "[Complete] = false and [Status] = 'Deferred'", Owner: '' },
    'WAITING_TASKS': 		{ Name: 'Waiting', Title: 'WAITING', Limit: 0, Sort: "-priority", Restrict: "[Complete] = false and [Status] = 'Waiting on someone else'", Owner: '' },
    'COMPLETED_TASKS':     { Name: 'Completed', Title: 'COMPLETED', Limit: 0, Sort: "-priority", Restrict: "[Complete] = false and [Status] = 'Completed'", Owner: '' },

    // Task Note Excerpt Size
    // number of chars for each task note
    // 0 = makes no notes appear on the each task card
    'TASKNOTE_EXCERPT':		200,

    // Default task template
    'TASK_TEMPLATE':        '\r\n\r\n### TODO:\r\n\r\n\r\n\r\n### STATUS:\r\n\r\n\r\n\r\n### ISSUES:\r\n\r\n\r\n\r\n### REFERENCE:\r\n\r\n\r\n\r\n'

  }
};

angular.forEach(config_data,function(key,value) {
		tbConfig.constant(value,key);
});

